import { useTheme } from "../../context/ThemeContext";

// components/MyStory.js
const MyStory = (props) => {
  const { theme, toggleTheme } = useTheme(); // Use the theme and toggle function

  return (
    <>
    
    <section
      id="about"
      ref={props.ref}
      className={`${theme === "dark" ? " text-gray-100 " : " text-gray-600 "
        } py-6 mt-8 rounded-xl  transition-all duration-300`}
    >
      <div className=" flex justify-center text-center flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full md:w-2/3 px-6">
          <h2 className="text-3xl font-bold mb-6">My Career so far</h2>
          <p className="text-md mb-4 transition-all duration-300">
            My career in software development began at Propertica, a real estate company, where I worked as a frontend developer. At Propertica, I was responsible for developing and optimizing user interfaces for property listings and real estate management tools. This experience allowed me to hone my skills in creating dynamic, user-friendly web applications.
          </p>
          <p className="text-md mb-4 transition-all duration-300">
            After Propertica, I transitioned to Ginkgo, where I further expanded my expertise in frontend development. At Ginkgo, I worked on a variety of projects, delivering high-quality, responsive, and interactive user interfaces using modern technologies like React.js, Next.js, and Tailwind CSS.
          </p>
          <p className="text-md mb-4 transition-all duration-300">
            In addition to my work at Ginkgo, I have been freelancing on Upwork, collaborating with clients globally to develop custom components and UI solutions. This experience has given me the opportunity to work on diverse projects, providing tailored solutions to meet clients' unique requirements.
          </p>
        </div>

      


      </div>
    </section>

</>
  );
};

export default MyStory;
