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

  return (
    <>
      <section className={`flex flex-col min-h-screen px-10 xl:px-96 `}>
        <NavBar />
        <div className="py-20 mb-2 flex justify-between">
          <Link href="/">
            <h1 className="text-xl">Caleb Mission UK</h1>
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

        <div className="bg-rgb-blue-caleb">
          <h2 className="text-2xl sm:text-2xl lg:text-4xl text-center text-white">
            About me
          </h2>
          <p className="py-2 sm:text-xl sm:py-4 lg:text-2xl lg:py-6 text-white">
            The Missão Calebe (Caleb Mission) is an evangelistic program of the
            Seventh-day Adventist Church developed in the territory of the South
            American Division (SAD) and is now a global initiative. Its goal is
            to promote the participation of young Adventists in voluntary and
            mission endeavors during school vacations. It aims at utilizing the
            creative energies of students (particularly in Public Campuses) to
            dedicate some of their vacation time to Jesus.
          </p>

          <p className="py-2 sm:text-xl sm:py-4 lg:text-2xl lg:py-6 text-white">
            The initiative encourages anyone over sixteen years of age to
            actively participate in community outreach and evangelism through
            home visits, Bible studies, and other activities. Those who
            participate in the Caleb Mission are commonly called “Calebs,” and
            usually go to the mission field wearing shirts and carrying
            backpacks, Bibles, and other materials stamped with the project’s
            name and logo.
          </p>
          

 <iframe 
        className=' h-full w-full rounded-lg my-20'
        src="https://www.youtube.com/embed/Diuvef3eoWY"
        
        width="100%" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
     </iframe>

    

        </div>
        
      
      </section>
      <Footer darkMode={darkMode} />
    </>
  );
};

export default About;
