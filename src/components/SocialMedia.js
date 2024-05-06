import React from "react";
import Link from "next/link";
import {
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebook,
  } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialMedia = () => {
  return (
    <>
    <div className="flex justify-center items-center">
      <div className="text-5xl flex justify-center gap-16 py-20 text-rgb-blue-caleb">
        <Link
          href="https://chat.whatsapp.com/I9zC1kxe2LkEYx7kDpTsD8"
          target="_blank"
        >
          <IoLogoWhatsapp />
        </Link>
        <Link
          href="https://www.instagram.com/iasd_manchester/"
          target="_blank"
        >
          <AiFillInstagram />
        </Link>
        <Link 
            href="https://www.facebook.com/IASDManchester/" 
            target="_blank"
        >
          <AiFillFacebook />
        </Link>
      </div>
      </div>
    </>
  );
};

export default SocialMedia;
