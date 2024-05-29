import React from 'react';

function About() {
  return (
    <>
      <div className="font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 m-3">
          <div className="w-full lg:w-3/4 md:w-11/12 z-50 relative transform transition-transform duration-500 hover:scale-105 animate-fade-in" style={{ backgroundColor: '#FFB600' }}>
            <img
              src="/images/front2.png"
              className="rounded-md object-cover md:mx-auto md:max-w-sm lg:max-w-none"
              alt="Dining Experience"
              style={{ margin: '30px' }}
            />
          </div>

          <div className="max-md:order-1 max-md:text-center animate-slide-in-left">
            <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px] text-center">Schedule meetings effortlessly</h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed text-center">Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.</p>

            <div className="mt-10 space-x-4 text-center animate-slide-in-left">
              <button type='button'
                className="inline-flex text-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 text-lg mb-4 lg:mb-0 lg:mr-4 transition duration-300 ease-in-out transform hover:scale-110" style={{ background: '#FFB600' }}>Discover Our Project</button>
              <button type='button'
                className="bg-transparent hover:bg-yellow-400 hover:text-white border-2 border-black transition-all text-black font-bold text-sm px-6 py-2.5 transition duration-300 ease-in-out">ABOUT US</button>
            </div>
            <hr className="mt-10" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
