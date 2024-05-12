import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import SubNavBar from "@/components/SubNavBar";
import BookingBtn from "@/components/BookingBtn";
import CvBtn from "@/components/CvBtn";
import Footer from "@/components/Footer";
import Link from "next/link";

import { BsFillMoonStarsFill } from "react-icons/bs";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className={`flex flex-col min-h-screen px-10 xl:px-96 `}>
        <NavBar />
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

        <div className="bg-rgb-blue-caleb p-8 md:p-12 lg:p-16 rounded-xl mx-4 md:mx-8 lg:mx-auto my-8 md:my-12 lg:my-16 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center text-white mb-6 md:mb-8 lg:mb-10">
            About
            <br></br>
            Caleb Mission in the UK
          </h1>
          <p className="py-4 sm:py-6 lg:py-8 text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
            The Missão Calebe (Caleb Mission) is an evangelistic program of the
            Seventh-day Adventist Church developed in the territory of the South
            American Division (SAD) and is now a global initiative.
            <br></br>
            <br></br>
            Its goal is to promote the participation of young Adventists in
            voluntary and mission endeavors during school vacations. It aims at
            utilizing the creative energies of students (particularly in Public
            Campuses) to dedicate some of their vacation time to Jesus.
          </p>
          {showMore && (
            <p className="py-4 sm:py-6 lg:py-8 text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
              The initiative encourages anyone over sixteen years of age to
              actively participate in community outreach and evangelism through
              home visits, Bible studies, and other activities. Those who
              participate in the Caleb Mission are commonly called “Calebs,” and
              usually go to the mission field wearing shirts and carrying
              backpacks, Bibles, and other materials stamped with the project’s
              name and logo.
            </p>
          )}
          {!showMore && (
            <button
              onClick={toggleShowMore}
              className="bg-white text-rgb-blue-caleb py-2 px-4 rounded-lg text-lg font-semibold mt-4"
            >
              Click to know more
            </button>
          )}

          <div class="aspect-w-16 aspect-h-16 md:aspect-h-12 lg:aspect-h-10 rounded-lg overflow-hidden my-8 md:my-12 lg:my-16 mx-auto lg:max-w-2xl">
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/Diuvef3eoWY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <Footer darkMode={darkMode} />
    </>
  );
};

export default About;
