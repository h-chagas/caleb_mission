import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Set_of_images = () => {
    const router = useRouter();
    const { set } = router.query;
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageSet, setImageSet] = useState("manchester"); // Default set to manchester

    useEffect(() => {
        if (set) {
            setImageSet(set);
            setActiveIndex(0); // Reset active index when set changes
        }
    }, [set]);

    const images = Array.from({ length: 13 }, (_, i) => i + 1); // Dynamically create an array for 13 images

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const setImageSetAndResetIndex = (set) => {
        setActiveIndex(0);
        setImageSet(set);
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="py-5 mb-2 flex justify-between">
                <Link href="/">
                    <h1 className="text-xl opacity-0">Caleb Mission UK</h1>
                </Link>

                <ul className="flex items-center">
                    <li>
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkMode)}
                            className="cursor-pointer text-xl"
                        />
                    </li>
                </ul>
            </div>
            <div className="relative h-96 md:h-auto overflow-hidden">
                {/* Render items */}
                {images.map((item, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
                        data-carousel-item
                        onClick={(e) => {
                            const clickX = e.clientX;
                            const halfWidth = window.innerWidth / 2;
                            if (clickX < halfWidth) {
                                handlePrev();
                            } else {
                                handleNext();
                            }
                        }}
                    >
                        <img
                            src={`/assets/images/${imageSet}/calebs${item}.jpg`}
                            className="block object-cover w-full h-full"
                            alt={`Slide ${item}`}
                        />
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-3 rtl:space-x-reverse">
                {["manchester", "manchesterblood2024", "manchesterchristmas2024", "barking", "oxford", "swindon", "vauxhall"].map((set, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${imageSet === set ? 'bg-gray-800' : 'bg-white'}`}
                        aria-current={imageSet === set}
                        aria-label={`Set ${set}`}
                        onClick={() => setImageSetAndResetIndex(set)}
                        data-carousel-slide-to={index}
                    />
                ))}
            </div>
            
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-1/2 z-30 left-3 px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
                onClick={handlePrev}
                data-carousel-prev
            >
                {/* Previous button icon */}
                <FaChevronLeft className="text-white text-3xl bg-gray-800 p-2 rounded-full opacity-70 hover:opacity-100 transition" />
            </button>
            <button
                type="button"
                className="absolute top-1/2 z-30 right-3 px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
                onClick={handleNext}
                data-carousel-next
            >
                {/* Next button icon */}
                <FaChevronRight className="text-white text-3xl bg-gray-800 p-2 rounded-full opacity-70 hover:opacity-100 transition" />
            </button>
        </div>
    );
};

export default Set_of_images;
