import React from 'react';

function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-col items-center">
            <img
              className="object-cover object-center rounded"
              alt="Sample Hero"
              src="/images/front2.png"
              style={{ position: 'absolute', top: '586px', left: '77px' }}
            />
            <img
              className="object-cover object-center rounded"
              alt="Second Image"
              src="/images/back1.png"
              style={{ position: 'absolute', top: '568px', left: '35px' }}
            />
            {/* <img
              className="object-cover object-center rounded"
              alt="Second Image"
              src="/images/image3.png"
            /> */}
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center text-center md:text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              Before they sold out
              <br className="hidden lg:inline-block" /> readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="/project" className="inline-flex text-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg mb-4 lg:mb-0 lg:mr-4" style={{ background: '#FFB600' }}>
                Discover Our Project
              </a>
              <a href="/about" className="inline-flex text-black bg-white border-2 border-black py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                ABOUT US
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
