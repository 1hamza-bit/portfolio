import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MyStory from "@/components/MyStory";
import Testimonials from "@/components/Testi";

const inter = Inter({ subsets: ["latin"] });

const projects = [
  {
    id: 1,
    title: 'Stream Apps',
    image: '/streamapps.png',
    alt: 'Stream Apps',
    url: 'https://streamapps.vercel.app'
  },
  {
    id: 2,
    title: 'Cyber to Cyber',
    image: '/cyber.png',
    alt: 'Netflix App',
    url: 'https://cybertocyber.com'


  },
  {
    id: 3,
    title: 'Shahryar Trading',
    image: '/project1.png',
    alt: 'STC',
    url: 'https://shahzadtradingcompany.com'


  },
  {
    id: 4,
    title: 'Meet Ahsan',
    image: '/meet.png',
    alt: 'meet',
    url: 'https://'


  },
  // Add more projects here as needed
];

export default function Home() {

  return (
    <div>
      <Header />
      <main className="px-4 py-4  md:px-16 md:py-16">
        <section className="">
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="">Hamza Tahir</span>.
          </h1>
          <h2 className="text-2xl font-semibold mt-2">
            <span className="text-blue-600">Software Engineer</span> based in Lahore, Pakistan
          </h2>
          <p className="text-gray-600 mt-2">
            Frontend Developer at <strong>Ginkgo</strong>
          </p>
          <a
            href="https://drive.google.com/file/d/13unnkIG-aysF2t7a73ENfMD_Bas_0lqS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-full">
              My Resume
            </button>
          </a>
        </section>
        <MyStory />

        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-8">My Portfolio</h2>


        <section className="mt-8 space-y-16 bg-white px-4 py-8">
          {projects.map((project, index) => (
            <>
              <div key={project.id} className="grid  gap-8 bg-gray-100 shadoww p-3 rounded-md shadow-sm">

                {/* Text Section */}
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                  <p className="text-sm text-gray-500">
                    {/* Description: you can add project descriptions here */}
                    Redesigning the API documentation for better developer experience.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 text-sm text-gray-700">
                      By {project.author || "Your Name"}
                    </div>
                    <div className="text-sm text-gray-700">
                      Timeline: {project.timeline || "Jan 2023 - Mar 2023"}
                    </div>
                  </div>
                  <Link href={project.url} passHref legacyBehavior>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      View Case Study &rarr;
                    </a>
                  </Link>
                </div>


                {/* Image Section */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                  {/* Add hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <p>Hover Text or Description</p>
                  </div>
                </div>

              </div>
              <hr />
            </>
          ))}
        </section>

        <Testimonials />

      </main>
      <footer className="bg-white text-black py-8 px-12">
        <div className="px-8 mx-auto flex flex-col items-start">
          <h2 className="text-xl font-light">Let's craft a better future, <span className="font-bold">together.</span></h2>

          <hr className="my-6 w-full border-gray-300 " />

          <div className="flex  items-center justify-between w-full">
            <div>
              <p className="italic font-light">Hamza<br />Tahir</p>
              <p className="mt-4 text-sm text-gray-500">© 2024 All rights reserved.</p>
            </div>

            <div>
              <div className="flex mt-4 space-x-4">
                <a href="https://www.linkedin.com/in/hamza-tahir-960879255/" target="_blank" className="hover:underline">LinkedIn ↗</a>
                <a href="https://drive.google.com/file/d/13unnkIG-aysF2t7a73ENfMD_Bas_0lqS/view" target="_blank" className="hover:underline">Resume ↗</a>
                <a href="mailto:hamtah112@gmail.com" target="_blank" className="hover:underline">Email</a>
              </div>

              <div className="mt-4 flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span>Open to Next Role</span>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
