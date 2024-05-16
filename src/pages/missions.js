import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import SubNavBar from "@/components/SubNavBar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Set_of_images";

const Missions = () => {
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
          className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow w-full md:max-w-md lg:max-w-lg xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full md:w-48 h-72 md:h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            src="/assets/images/thumbnail-man2024.png"
            alt="Calebs"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Manchester 2024
            </h5>
            <p className="mt-2 font-normal text-black text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Free books, Heaton Park cleaning, and hygiene kit for homeless.
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          href="/images?set=barking"
          className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow w-full md:max-w-md lg:max-w-lg xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full md:w-48 h-72 md:h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            src="/assets/images/barking/calebs1.jpg"
            alt="Calebs"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Barking 2024
            </h5>
            <p className="mt-2 font-normal text-black text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Workshops, free books, free hugs, and praying.
            </p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link
          href="/images?set=oxford"
          className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow w-full md:max-w-md lg:max-w-lg xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full md:w-48 h-72 md:h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            src="/assets/images/oxford/calebs10.jpg"
            alt="Calebs"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Oxford 2024
            </h5>
            <p className="mt-2 font-normal text-black text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Mental health counselling, gardening, and park cleaning.
            </p>
          </div>
        </Link>

        {/* Card 4 */}
        <Link
          href="/images?set=swindon"
          className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow w-full md:max-w-md lg:max-w-lg xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full md:w-48 h-72 md:h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            src="/assets/images/swindon/calebs7.jpg"
            alt="Calebs"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Swindon 2024
            </h5>
            <p className="mt-2 font-normal text-black text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Free books, gardening, and visiting.
            </p>
          </div>
        </Link>

        {/* Card 5 */}
        <Link
          href="/images?set=vauxhall"
          className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow w-full md:max-w-md lg:max-w-lg xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full md:w-48 h-72 md:h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            src="/assets/images/vauxhall/calebs1.jpg"
            alt="Calebs"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Vauxhall 2024
            </h5>
            <p className="mt-2 font-normal text-black text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Church refurbishment.                     
            </p>
          </div>
        </Link>
      </div>
      <Footer />
    </section>
  );
};

export default Missions;
