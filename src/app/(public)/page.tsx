import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      tags: ["BLOGS"]
      // revalidate: 30
    }
  })
  const {data:blogs} = await res.json()
  console.log(blogs)
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts120</h2>
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
      {
        blogs?.data?.slice(0, 3).map((blog:IPost) => (
          <BlogCard key={blog.id} post={blog}></BlogCard>
        ))
      }
      </div>
    </div>
  );
}
