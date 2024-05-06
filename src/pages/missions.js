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
          href="/images"
          className="flex flex-col items-center bg-white border border-gray-200 border-4 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48"
            src="\assets\images\thumbnail-man2024.png"
            alt="Swedish Relaxing Massage"
          />
          <div className="flex flex-col justify-between leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Manchester 2024
            </h5>
            <p className="mt-2 font-normal text-black text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Free books, Heaton Park cleaning, and hygiene kit for homelesses.
            </p>

            <div className="flex justify-center gap-8 mt-5">
            {/* 
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
                */}
            </div>

          </div>
        </Link>
        





      

        {/* Card 2 
          href="/contact"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\swedish_img.jpeg"
            alt="Deep Tissue Massage"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Deep Tissue Massage
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            It relieves muscle pain and tension by deeper pressure on localised acute or chronic pain.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>

        */}
        






        {/* Card 3 
          href="/contact"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\sports_img.jpg"
            alt="Sports massage"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sports Massage
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Improve your training, performance and even assists in muscle recovery.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>

        */}






        {/* Card 4 
        <Link
          href="/contact"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\cupping.jpg"
            alt="Cupping Therapy"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cupping Therapy
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Cups are placed on the skin to create a gentle suction. This helps to increase blood flow, break out adhesions, release toxins, and stimulate the body's natural healing process.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>

        */}





        {/* Card 5 
        <Link
          href="/contact"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\pregnancy_massage.jpg"
            alt="Pregnancy Massage"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pregnancy Massage
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Pregnancy massage focus on addressing pregnancy-related discomforts and promoting relaxation.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>

        */}







         {/* Card 6 
          href="/contact"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\electrotherapy.png"
            alt="Electrotherapy"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Electrotherapy
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Electrotherapy involves the use of electrical devices or equipment to complement traditional massage techniques, the electrical currents stimulate tissue repair and reduce pain.
            Electrotherapy can be used in combination with massage to enhance the therapeutic effects and provide relief for various musculoskeletal conditions.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>

        */}






        {/* Card 7 
        <Link
          href="/contact"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\chair_img.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Chair Massage (Corporate)
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Treatment specifically designed for the workplace or corporate events, as seated massage is applied in a specially designed portable chair.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>

        */}






        {/* Card 8 
        <Link
          href="/contact"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\facial_img.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Beauty Facial Express (30min)
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Effective and suitable for every skin type, with a uplifting facial massage. High-quality skin-care products.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>
        */}
      





      </div>
      <Footer />
    </section>
  );
};

export default Treatments;
