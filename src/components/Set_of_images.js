import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Set_of_images = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-96 rounded-lg md:h-96">
                {/* Render items */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img
                            src={`assets/images/calebs${item}.jpg`}
                            className="absolute block object-cover w-full -translate-x-1/2 top-1/2 left-1/2"
                            alt={`Slide ${item}`}
                        />
                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            <div className="z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-3 rtl:space-x-reverse">
                {[...Array(5).keys()].map((index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-gray-800' : 'bg-white'}`}
                        aria-current={activeIndex === index}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                        data-carousel-slide-to={index}
                    />
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
                data-carousel-prev
            >
                {/* Previous button icon */}
                <FaArrowAltCircleLeft className=" bg-white text-2xl" />
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
                data-carousel-next
            >
                {/* Next button icon */}
                <FaArrowAltCircleRight className="bg-white text-2xl"/>
            </button>
        </div>
    );
};

export default Set_of_images;
