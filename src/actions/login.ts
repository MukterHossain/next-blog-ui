'use server'

import { redirect } from "next/navigation"

export const login = async(data:FormData) =>{
    const userInfo = Object.fromEntries(data.entries())
    const modifiedData = {
        email:userInfo.email,
        password: userInfo.password
    }
    console.log(modifiedData)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,{
    method: "POST",
    headers:{ 
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(modifiedData)
  })
  console.log({res})
  if(!res.ok){
    throw new Error("Invalid credentials")
  }
  const result = await res.json()
  console.log({result})
//   if(result?.data?.id){
//     redirect("/")
//   }
  if(result?.data?.id){
    redirect("/")
  }
// if (Array.isArray(result.data) && result.data.length > 0) {
//   redirect("/");
// }
  return result
}