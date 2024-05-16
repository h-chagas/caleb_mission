import React from "react";
import Image from "next/image";

import profile from "../../public/assets/images/caleb_mission_logo.jpg";

const ProfileInfo = () => {
  return (
    <>
    {/* 
      <div className="text-center p-2">
        
        <h2 className="text-4xl py-2 text-teal-600 font-medium">
          Milena Flores
        </h2>
        <h2 className="text-xl py-2 dark:text-white"> Sports Massage Therapist </h2>

      
      
      </div>
      */}
      <div className="relative mx-auto bg-gradient-to-b w-full my-10 h-1/5 lg:max-w-lg">
        <Image src={profile} />
      </div>
    </>
  );
};

export default ProfileInfo;
