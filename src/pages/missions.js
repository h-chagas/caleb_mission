import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import SubNavBar from "@/components/SubNavBar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Set_of_images";

const Treatments = () => {
  return (
    <section className="flex flex-col min-h-screen px-10 bg-rgb-yellow-caleb">
      <NavBar />
      <SubNavBar />

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-2xl lg:text-4xl text-center">
          Missions
        </h2>

        {/* Card 1 */}

        <Link
    href="/images?set=manchester"
    className="flex flex-col items-center bg-white border border-gray-200 border-4 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 my-10"
>
    <img
        className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48"
        src="\assets\images\thumbnail-man2024.png"
        alt="Calebs"
    />
    <div className="flex flex-col justify-between leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Manchester 2024
        </h5>
        <p className="mt-2 font-normal text-black text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Free books, Heaton Park cleaning, and hygiene kit for homeless.
        </p>

        <div className="flex justify-center gap-8 mt-5"></div>
    </div>
</Link>


         {/* Card 2 */}

        <Link
    href="/images?set=london"
    className="flex flex-col items-center bg-white border border-gray-200 border-4 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 my-10"
>
    <img
        className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48"
        src="\assets\images\thumbnail-lon2024.jpg"
        alt="Calebs"
    />
    <div className="flex flex-col justify-between leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            London 2024
        </h5>
        <p className="mt-2 font-normal text-black text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Free books, Hyde Park cleaning, and hygiene kit for homeless.
        </p>

        <div className="flex justify-center gap-8 mt-5"></div>
    </div>
</Link>


        
      </div>
      <Footer />
    </section>
  );
};

export default Treatments;
