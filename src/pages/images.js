import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Set_of_images from "@/components/Set_of_images";

const images = () => {
  return (
    <>
      <section className={`flex flex-col min-h-screen px-5 xl:px-96 `}>
        <NavBar />
        

       <Set_of_images />

       
        
      </section>
      <Footer />
    </>
  );
};

export default images;
