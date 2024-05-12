import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SocialMedia from "@/components/SocialMedia";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import InstagramPost from "@/components/InstagramEmbedCode";
import FacebookPost from "@/components/FacebookEmbedCode";


const Contact = () => {
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
            Contact us
            <br />
            Social media
          </h1>
          <SocialMedia />
          <div className="my-4 hidden lg:block">
            <InstagramPost />
          </div>
          <div className="my-4 hidden lg:block">
            <FacebookPost />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
