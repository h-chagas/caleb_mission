import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  // console.log("this is darkmode ----->", darkMode);
  return (
    <div>
      <nav className="w-full bg-rgb-yellow-caleb fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex justify-end py-3 md:py-5 md:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/close-menu-hamburger.svg"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="/menu-hamburger.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-6 text-xl text-black py-4 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#b3b3b3]  border-[#b3b3b3]  md:hover:text-[#b3b3b3] md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-4 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#b3b3b3]  border-[#b3b3b3]  md:hover:text-[#b3b3b3] md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-4 px-6 text-center border-b-2 md:border-b-0  hover:bg-[#b3b3b3]  border-[#b3b3b3]  md:hover:text-[#b3b3b3] md:hover:bg-transparent">
                  <Link href="/missions" onClick={() => setNavbar(!navbar)}>
                    Missions
                  </Link>
                </li>
                {/*
                <li className="pb-6 text-xl text-black py-4 px-6 text-center border-b-2 md:border-b-0  hover:bg-[#b3b3b3]  border-[#b3b3b3]  md:hover:text-[#b3b3b3] md:hover:bg-transparent">
                  <Link href="/pricing" onClick={() => setNavbar(!navbar)}>
                    Pricing
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-4 px-6 text-center border-b-2 md:border-b-0  hover:bg-[#b3b3b3]  border-[#b3b3b3]  md:hover:text-[#b3b3b3] md:hover:bg-transparent">
                  <Link href="/mobile" onClick={() => setNavbar(!navbar)}>
                    Mobile
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-4 px-6 text-center border-b-2 md:border-b-0  hover:bg-[#b3b3b3]  border-[#b3b3b3]  md:hover:text-[#b3b3b3] md:hover:bg-transparent">
                  <Link href="/treatment_room" onClick={() => setNavbar(!navbar)}>
                    Treatment Room
                  </Link>
                </li>
                */}
                <li className="pb-6 text-xl text-black py-4 px-6 text-center border-b-2 md:border-b-0  hover:bg-[#b3b3b3]  border-[#b3b3b3]  md:hover:text-[#b3b3b3] md:hover:bg-transparent">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
