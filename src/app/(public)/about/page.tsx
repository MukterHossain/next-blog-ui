import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About" ,
  description: "A simple blog built with Next.js, Tailwind CSS, and shadcn/ui.",
};


const AboutPage = () => {
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-gray-700 text-center">
        💤 The developer is sleeping now. Check back later!
      </h1>
    </div>
  );
};

export default AboutPage;
