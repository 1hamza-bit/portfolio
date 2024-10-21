import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Home, LucideWorkflow, Moon, StarHalf, Text } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";


export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use the theme and toggle function


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full right-0 left-0 ${theme !== 'dark' ? 'bg-white text-gray-800' : 'bg-black text-gray-200'} transition-all duration-300 top-0 flex justify-between items-center py-4 px-8 z-50`}
    >
      <div className="flex justify-between w-full items-center">
        <div className="text-xl font-bold">Frontend Developer</div>

        <div className="flex gap-2 items-center">
          
          <nav>
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-8 h-5 flex flex-col justify-between items-center z-50"
            >
              {/* Bar 1 */}
              <motion.div
                className={`h-[3px] w-full ${theme !== 'dark' ? 'bg-gray-600' : 'bg-gray-200'} transition-transform`}
                animate={{ rotate: isOpen ? 45 : 0, translateY: isOpen ? 8 : 0 }}
              />
              {/* Bar 2 */}
              <motion.div
                className={`h-[3px] w-full ${theme !== 'dark' ? 'bg-gray-600' : 'bg-gray-200'} transition-opacity`}
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              {/* Bar 3 */}
              <motion.div
                className={`h-[3px] w-full ${theme !== 'dark' ? 'bg-gray-600' : 'bg-gray-200'} transition-transform`}
                animate={{ rotate: isOpen ? -45 : 0, translateY: isOpen ? -8 : 0 }}
              />
            </button>

            {/* Full Screen Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ x: '90%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '90%' }}
                  transition={{ duration: 0.2 }}
                  className={`fixed top-12 right-0 w-3/5 h-full ${theme !== 'dark' ? 'bg-gray-100 text-gray-800' : 'bg-gray-800 text-gray-200'} flex flex-col px-8 pt-20 z-40`}
                >
                  <nav className="space-y-6 text-lg flex flex-col">
                    <a
                      href="#"
                      className={`hover:${theme !== 'dark' ? 'text-gray-400' : 'text-gray-500'} transition flex gap-2 items-center`}
                    >
                      <Home className="h-4 w-4" /> Home
                    </a>
                    <a
                      href="#projects"
                      className={`hover:${theme !== 'dark' ? 'text-gray-400' : 'text-gray-500'} transition flex gap-2 items-center`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        props.scrollToSection(); // Trigger smooth scroll using Framer Motion
                      }}
                    >
                      <LucideWorkflow className="h-4 w-4" /> Work
                    </a>
                    <a
                      href="#about"
                      className={`hover:${theme !== 'dark' ? 'text-gray-400' : 'text-gray-500'} transition flex gap-2 items-center`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        props.scrollToAbout(); // Trigger smooth scroll using Framer Motion
                      }}
                    >
                      <Text className="h-4 w-4" /> About
                    </a>
                    <a
                      href="#testimonials"
                      className={`hover:${theme !== 'dark' ? 'text-gray-400' : 'text-gray-500'} transition flex gap-2 items-center`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        props.scrollToTesti(); // Trigger smooth scroll using Framer Motion
                      }}
                    >
                      <StarHalf className="h-4 w-4" /> Testimonials
                    </a>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>

            <ul className="hidden md:flex space-x-8">
              <li>
                <a
                  href="#projects"
                  className={`${theme !== 'dark' ? 'text-gray-600 hover:text-black' : 'text-gray-200 hover:text-gray-400'}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    props.scrollToSection(); // Trigger smooth scroll using Framer Motion
                  }}
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`${theme !== 'dark' ? 'text-gray-600 hover:text-black' : 'text-gray-200 hover:text-gray-400'}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    props.scrollToAbout(); // Trigger smooth scroll using Framer Motion
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className={`${theme !== 'dark' ? 'text-gray-600 hover:text-black' : 'text-gray-200 hover:text-gray-400'}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    props.scrollToTesti(); // Trigger smooth scroll using Framer Motion
                  }}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/13unnkIG-aysF2t7a73ENfMD_Bas_0lqS/view?usp=sharing"
                  target="_blank"
                  className={`${theme !== 'dark' ? 'text-gray-600 hover:text-black' : 'text-gray-200 hover:text-gray-400'}`}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded"
          >
            <Moon
              className={`h-6 w-6  pl-1 ${theme === 'dark' ? 'text-white' : 'text-black'} transition-all duration-300`} // Change color based on the theme
            />
          </button>
        </div>
      </div>
    </header>

  );
}
