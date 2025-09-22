import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IPost } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description: "Brows all blog posts on web development, Next.js, React, and more. Stay updated with the latexxt tutorials and articles."
}

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,{
    cache: 'no-store'
  })
  const {data:blogs} = await res.json()
  console.log(blogs)
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
            {
              blogs?.data?.map((blog:IPost) => (
                <BlogCard key={blog.id} post={blog}></BlogCard>
              ))
            }
            </div>
    </div>
  );
};

export default AllBlogsPage;
