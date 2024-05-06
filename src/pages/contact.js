import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SocialMedia from "@/components/SocialMedia";


const images = () => {
  return (
    <>
      <section className={`flex flex-col min-h-screen px-5 xl:px-96 `}>
        <NavBar />
        <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-2xl">Contact us - Social media</h1>
        </div>
        <SocialMedia />
       
        
      </section>
      <Footer />
    </>
  );
};

export default images;
