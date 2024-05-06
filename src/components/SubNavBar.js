import React, { useState } from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

const SubNavBar = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`py-20 mb-2 flex justify-between ${darkMode ? 'dark:bg-gray-900' : ''}`}>
      <Link href="/">
        <h1 className="text-xl"></h1>
      </Link>

      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill onClick={() => setDarkMode(darkMode)} className="cursor-pointer text-xl" />
        </li>
      </ul>
    </div>
  );
};

export default SubNavBar;
