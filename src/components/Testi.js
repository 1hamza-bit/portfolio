import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 md:px-12">
        <h2 className="text-left text-3xl leading-9 font-extrabold text-gray-900 mb-12">
          Testimonials from Past Colleagues
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-16">
          
          {/* Testimonial 1 */}
          <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <span className="inline-block text-6xl text-black">&ldquo;</span>
            </div>
            <p className="text-gray-800 text-lg">
              I had the pleasure of working with Chevis at Solara for over a year, much of that time as his direct manager. Chevis is an excellent Product Designer who consistently met and exceeded expectations. He worked on various parts of the product, notably taking the initiative on the homepage and API documentation redesign. He effectively handled complex challenges and consistently delivered high-quality results.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-lg mb-0 mt-0  md:-mb-16 md:mt-16">
            <div className="mb-4">
              <span className="inline-block text-6xl text-black">&rdquo;</span>
            </div>
            <p className="text-gray-800 text-lg">
              I had the pleasure of working closely with Chevis at Vierra, where he not only served as the designer but also the Project Lead when I joined the team. Chevis impressed me right off the bat with his leadership skills, and dedication to elevating our product to its best potential.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
