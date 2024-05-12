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
    <div className="flex justify-center items-center py-6 lg:py-12">
      <div className="flex justify-center gap-8 lg:gap-12">
        <Link
          href="https://chat.whatsapp.com/I9zC1kxe2LkEYx7kDpTsD8"
          target="_blank"
        >
          <div className="bg-white rounded-full p-2">
            <IoLogoWhatsapp className="text-4xl lg:text-5xl text-rgb-blue-caleb" />
          </div>
        </Link>
        <Link href="https://www.instagram.com/iasd_manchester/" target="_blank">
          <div className="bg-white rounded-full p-2">
            <AiFillInstagram className="text-4xl lg:text-5xl text-rgb-blue-caleb" />
          </div>
        </Link>
        <Link href="https://www.facebook.com/IASDManchester/" target="_blank">
          <div className="bg-white rounded-full p-2">
            <AiFillFacebook className="text-4xl lg:text-5xl text-rgb-blue-caleb" />
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default SocialMedia;
