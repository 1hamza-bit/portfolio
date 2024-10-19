import React from 'react';

const Testimonials = (props) => {
  return (
    <section id="testimonials" ref={props.testiSectionRef}  className="bg-white py-12">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 md:px-12">
        <h2 className="text-left text-3xl leading-9 font-extrabold text-gray-900 mb-12">
          Testimonials from Past Colleagues
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-16">
          
          {/* Testimonial 1 */}
          <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <span className="inline-block "><span className="text-6xl text-red-600">&ldquo;</span> - Upwork Client</span>
            </div>
            <p className="text-gray-800 text-lg">
            "Excellent work. Hamza understood the project from the very beginning and executed it flawlessly. He was very receptive to new ideas and changes. I would be very happy to work with him on future projects and updates."            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-lg mb-0 mt-0  md:-mb-16 md:mt-16">
          <div className="mb-4">
              <span className="inline-block "><span className="text-6xl text-red-600">&ldquo;</span> - Ginkgo Review </span>
            </div>
            <p className="text-gray-800 text-lg">
            "Hamza has proven to be a valuable asset to the company. His growth and dedication to improving his skills have been impressive, and we're excited to see him continue to excel."

</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
