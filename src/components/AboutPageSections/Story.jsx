import React from 'react';

function Story() {
    return (
        <div className="mx-auto">
            <div className="text-center p-8">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Why choose US?
                </h2>
                <div className="w-full mx-auto py-10">

                    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
                        <div className="lg:w-[50%] xs:w-full animate__animated animate__fadeIn">
                            <img className="rounded-lg" src="/images/Frame 35.png" alt="billboard image" />
                        </div>
                        <div className="lg:w-[50%] sm:w-full xs:w-full md:p-4 xs:p-0 rounded-md animate__animated animate__fadeIn">
                            <h2 className="text-3xl font-semibold text-gray-900 ">Lorem ipsum dolor sit amet consectetur</h2>
                            <p className="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
                                veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
                                sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
                                nobis tempora possimus ullam!</p>
                        </div>
                    </div>

                    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">


                        <div className="lg:w-[50%] xs:w-full md:p-4 xs:p-0 rounded-md animate__animated animate__fadeIn">
                            <h2 className="text-3xl font-semibold text-black ">Lorem ipsum dolor sit amet consectetur</h2>

                            <p className="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
                                veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
                                sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
                                nobis tempora possimus ullam!</p>
                        </div>

                        <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full animate__animated animate__fadeIn">
                            <img className="rounded-lg" src="/images/pana.png" alt="billboard image" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Story;
