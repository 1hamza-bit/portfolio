import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MyStory from "@/components/MyStory";
import Testimonials from "@/components/Testi";
import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import Stats from "@/components/Stats";
import { InteractiveHoverButton } from "@/components/Button";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const projects = [
  {
    id: 1,
    title: 'Stream Apps',
    image: '/streamapps.png',
    alt: 'Stream Apps',
    url: 'https://streamapps.vercel.app',
    Description: "This project was created for a client who wants to build his app showcase website using Next.js.",
    skills: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'Cyber to Cyber',
    image: '/cyber.png',
    alt: 'Netflix App',
    url: 'https://cybertocyber.com',
    Description: "I have worked on this project with a team of developers and currently in progress. I am the Frontend (React.js) Team Lead.",
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap']
  },
  {
    id: 3,
    title: 'Shahryar Trading',
    image: '/project1.png',
    alt: 'STC',
    url: 'https://shahzadtradingcompany.com',
    Description: "This project was created for a client who wants to build a business website using Next.js.",
    skills: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    id: 4,
    title: 'Meet Ahsan',
    image: '/meet.png',
    alt: 'meet',
    url: 'https://meetahsan.vercel.app',
    Description: "This is an agency portfolio website built on Next.js and Tailwind CSS.",
    skills: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
  }
  // Add more projects here as needed
];


export default function Home() {
  const projectsSectionRef = useRef(null);
  const { theme, toggleTheme } = useTheme(); // Use the theme and toggle function
  const fullText = "Hi, I'm Hamza Tahir.";
  const [displayText, setDisplayText] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => [...prev, fullText[index]]);
        setIndex(index + 1);
      }, 50); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);


  const scrollToSection = () => {
    const targetPosition = projectsSectionRef.current?.offsetTop;
    const currentPosition = window.pageYOffset;

    animate(currentPosition, targetPosition, {
      duration: 2,  // Adjust this for slower scrolling (e.g., 2 seconds)
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  const aboutSectionRef = useRef(null);

  const scrollToAbout = () => {
    const targetPosition = aboutSectionRef.current?.offsetTop;
    const currentPosition = window.pageYOffset;

    animate(currentPosition, targetPosition, {
      duration: 2,  // Adjust this for slower scrolling (e.g., 2 seconds)
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  const testiSectionRef = useRef(null);

  const scrollToTesti = () => {
    const targetPosition = testiSectionRef.current?.offsetTop;
    const currentPosition = window.pageYOffset;

    animate(currentPosition, targetPosition, {
      duration: 2,  // Adjust this for slower scrolling (e.g., 2 seconds)
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  return (

    <div >
      <Header scrollToSection={scrollToSection} scrollToAbout={scrollToAbout} scrollToTesti={scrollToTesti} />
      <main className={`px-4 py-4 mt-12 md:px-16 md:py-16 ${theme === 'dark' ? 'bg-[#15181b] text-white' : 'bg-white text-black'} transition-all duration-300`}>
       

        <section>

        {/* <motion.div
            className="absolute top-0 left-0 w-2/3 h-[200px] bg-gradient-to-br from-blue-500 via-purple-500 to-transparent blur-3xl opacity-10 pointer-events-none"
            initial={{ opacity: 0.1, x: -50, y: -50 }}
            animate={{ opacity: 0.2, x: 0, y: 0 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Bottom Right Cloud */}
          {/* <motion.div
            className="absolute bottom-0 right-0 w-3/4 h-[250px] bg-gradient-to-tr from-indigo-500 via-teal-400 to-transparent blur-3xl opacity-10 pointer-events-none"
            initial={{ opacity: 0.1, x: 50, y: 50 }}
            animate={{ opacity: 0.2, x: 0, y: 0 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          // /> */}

          <motion.h1
            className="text-[50px] md:text-[100px] font-bold flex flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayText.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.01 }}
              >
                {char === " " ? "\u00A0" : char} {/* Ensures spaces are preserved */}
              </motion.span>
            ))}
          </motion.h1>
          <h2 className="text-2xl font-semibold mt-2">
            <span className="text-blue-600">Software Engineer</span> based in Lahore, Pakistan
          </h2>
          <p className={`mt-2 max-w-4xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Passionate software engineer with 3 years of experience, driven by a curiosity to uncover the 'why' behind every challenge and craft innovative solutions
            that meet user needs. Dedicated to enhancing user experiences with modern practices,
            I thrive in collaborative environments and am committed to continuous learning. Focused on delivering impactful,
            high-performance results that drive innovation and long-term value.
          </p>
          <a
            href="https://drive.google.com/file/d/13unnkIG-aysF2t7a73ENfMD_Bas_0lqS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"

          >
            {/* <button className="mt-6 px-6 py-2 bg-black text-white rounded-full">
              My Resume
            </button> */}
            <InteractiveHoverButton />
          </a>
        </section>
        <div ref={aboutSectionRef}>
          <MyStory ref={aboutSectionRef} />
        </div>

        <Stats />

        <h2 className={`text-3xl font-bold mb-6 mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>My Portfolio</h2>

        <section
          id="projects"
          ref={projectsSectionRef}
          className={`mt-8 space-y-16 ${theme === 'dark' ? 'bg-transparent text-white' : 'bg-white text-black'
            } transition-all duration-300 px-4 py-8 border-t-2 border-b-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}
        >
          
          {projects.map((project, index) => (
             
            <div
              key={project.id}
              className={`grid grid-cols-6 gap-8 p-3 rounded-md transition-all duration-300 border-t border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}
            >
              {/* Project Content */}
              <div className="col-span-5 md:col-span-4 grid md:grid-cols-1 gap-8 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <h2
                    className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {project.title}
                  </h2>
                  <p
                    className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}
                  >
                    {project.Description}
                  </p>
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
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                  <Link href={project.url} passHref legacyBehavior>
                    <div className="absolute cursor-pointer inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white"></div>
                  </Link>
                </div>
              </div>

              {/* Skills Used Section */}
              <div
                className={`col-span-5 md:col-span-2 sm:border-t-2 sm:border-l-0 md:border-l-2 md:border-t-0 md:mt-4 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                  } flex flex-col items-start space-y-2 p-3 `}
              >
                <h3
                  className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                  Skills Used:
                </h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 w-full">
                  {project.skills?.map((skill, idx) => (
                    <li
                      key={idx}
                      className={`px-3 py-1 rounded-md ${theme === 'dark'
                        ? 'bg-gray-800 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                        } text-sm shadow-sm`}
                      title={`Skill: ${skill}`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>





        <div ref={testiSectionRef}>
          <Testimonials ref={testiSectionRef} />
        </div>
      </main>

      <footer className={`py-8 px-4 md:px-12 ${theme === 'dark' ? 'bg-[#15181b] text-white' : 'bg-white text-black'}`}>
        <div className="px-2 md:px-8 mx-auto flex flex-col items-start">
          <h2 className="text-xl font-light">Let's craft a better future, <span className="font-bold">together.</span></h2>

          <hr className={`my-6 w-full ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`} />

          <div className="flex items-center justify-between w-full">
            <div>
              <p className="italic font-light">Hamza<br />Tahir</p>
              <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} max-w-1/2`}>© 2024 All rights reserved.</p>
            </div>

            <div>
              <div className="flex mt-4 space-x-2 md:space-x-4">
                <a href="https://www.linkedin.com/in/hamza-tahir-960879255/" target="_blank" className="hover:underline text-sm">LinkedIn ↗</a>
                <a href="https://drive.google.com/file/d/13unnkIG-aysF2t7a73ENfMD_Bas_0lqS/view" target="_blank" className="hover:underline text-sm">Resume ↗</a>
                <a href="mailto:hamtah112@gmail.com" target="_blank" className="hover:underline text-sm">Email</a>
              </div>

              <div className="mt-5 flex items-center space-x-2">
                <div className={`h-3 w-3 rounded-full ${theme === 'dark' ? 'bg-green-500' : 'bg-green-500'}`}></div>
                <span className="text-sm">Open to Next Role</span>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>

  );
}
