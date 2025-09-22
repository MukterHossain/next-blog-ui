import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById } from "@/services/PostServices";
import { IPost } from "@/types";


export const generateStaticParams  =async()=>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`)
  const {data:blogs} = await res.json()
  
    return blogs?.data.slice(0, 2).map((blog :IPost)  => ({
        blogId: String(blog.id)
    }))
}

export const generateMetadata = async({params}: {params:Promise<{blogId:string}>}) =>{
const {blogId} = await params
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    // const {data:blog} =  await res.json()
    const {data:blog }= await getBlogById(blogId)
    return {
        title: blog?.title,
        Description: blog?.content
    }
}


const BlogDetailsPage =async ({params}: {params:Promise<{blogId:string}>}) => {

    const {blogId} = await params
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    // const {data:blog} =  await res.json()
    const {data:blog} =  await getBlogById(blogId)
    
    return (
        <div className='py-30 px-4 max-w-7xl mx-auto'>
            <div>
                <BlogDetailsCard key={blog.blogId} blog={blog}></BlogDetailsCard>
            </div>
        </div>
    );
};

export default BlogDetailsPage;