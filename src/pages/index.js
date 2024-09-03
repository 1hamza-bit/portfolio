import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      <main className="px-16 py-16">
        <section className="">
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-blue-600">Hamza Tahir</span>.
          </h1>
          <h2 className="text-2xl font-semibold mt-2">
            <span className="text-blue-600">Software Engineer</span> based in Lahore, Pakistan
          </h2>
          <p className="text-gray-600 mt-2">
            Frontend Developer at <strong>Ginkgo</strong>
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-full">
            My Resume
          </button>
        </section>

        <section className="mt-16 space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="space-y-4">
            
                <div className="flex items-center space-x-4">
                  <div className="flex-1 border-t border-gray-300"></div>
                </div>
             
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                 {project.title}
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full ">
                <Link href={project.url} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                <ArrowRight
    size={32}
    className="transform transition-transform duration-300 group- hover:translate-x-2"
  />
  </a>
</Link>
                </div>
              </div>
              <div className="flex-1">
                  <img src={project.image} alt={project.alt} className="w-full h-auto object-cover rounded-lg max-h-[70vh]" />
                </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
