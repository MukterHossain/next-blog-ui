'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const register = async(data:FormData) =>{
    const userInfo = Object.fromEntries(data.entries())
    const modifiedData = {
        ...userInfo
    }
    console.log(modifiedData)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
    method: "POST",
    headers:{ 
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(modifiedData)
  })
  console.log({res})
  const result = await res.json()
  console.log({result})
  if(result?.data?.id){
    revalidatePath("/login");
    redirect("/")
  }
  return result
}