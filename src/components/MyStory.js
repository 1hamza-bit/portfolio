// components/MyStory.js
const MyStory = () => {
    return (
      <section className="bg-stone-100 py-6 mt-8 rounded-xl shadoww">
        <div className="container  flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-3/3 px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">My Story</h2>
            <p className="text-md text-gray-700 mb-4">
              My career in frontend development began at Propertica, a real estate company, where I worked as a frontend developer. At Propertica, I was responsible for developing and optimizing user interfaces for property listings and real estate management tools. This experience allowed me to hone my skills in creating dynamic, user-friendly web applications.
            </p>
            <p className="text-md text-gray-700 mb-4">
              After Propertica, I transitioned to Ginkgo, where I further expanded my expertise in frontend development. At Ginkgo, I worked on a variety of projects, delivering high-quality, responsive, and interactive user interfaces using modern technologies like React.js, Next.js, and Tailwind CSS.
            </p>
            <p className="text-md text-gray-700 mb-4">
              In addition to my work at Ginkgo, I have been freelancing on Upwork, collaborating with clients globally to develop custom components and UI solutions. This experience has given me the opportunity to work on diverse projects, providing tailored solutions to meet clients' unique requirements.
            </p>
          
          </div>
  
          {/* Image Section */}
          {/* <div className="w-full md:w-1/3 px-6 mt-8 md:mt-0">
            <img
              src="https://example.com/path-to-your-skateboard-image.jpg"
              alt="Skateboard"
              className="rounded-lg shadow-md"
            />
          </div> */}
        </div>
      </section>
    );
  };
  
  export default MyStory;
  