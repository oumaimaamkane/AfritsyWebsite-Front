import React from 'react';

function End() {
    return (
        <div className="text-black px-8 py-8 w-full rounded-lg font-[sans-serif] flex flex-col items-center">
            <h1 className="text-4xl font-extrabold">Hello World!</h1>
            <p className="mt-4 text-sm text-black text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et
                tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
                ultrices, non consequat mauris tincidunt.</p>
            <button type="button"
                className="px-6 py-3 m-3 text-base font-semibold text-white bg-[#FFB600] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50">Learn
                more</button>
        </div>
    )
}

export default End;
