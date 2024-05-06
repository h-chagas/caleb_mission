import React from 'react'
import Link from "next/link";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineWhereToVote } from "react-icons/md";
import {
  AiOutlineCar
} from "react-icons/ai";
import { BsPersonGear } from "react-icons/bs";

const HomeIcons = () => {
  return (
    <div className="flex flex-col 2xl:flex-row justify-center items-center text-center text-2xl leading-10 text-gray-800 pb-10 py-20">
      <Link href="/about" className="block w-3/5 sm:w-1/3 p-6 mb-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <BsPersonGear className="text-4xl mx-auto dark:text-gray-500" />
        <h3 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Experience</h3>
        <p className="font-normal md:text-3xl text-gray-700 dark:text-gray-400">6 Years</p>
      </Link>

      <Link href="/mobile" className="block w-3/5 sm:w-1/3 p-6 mb-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <AiOutlineCar className="text-4xl mx-auto dark:text-gray-500" />
        <h3 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Mobile treatment</h3>
        <p className="font-normal md:text-3xl text-gray-700 dark:text-gray-400">Greater Manchester</p>
      </Link>

      <Link href="/treatment_room" className="block w-3/5 sm:w-1/3 p-6 mb-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <MdOutlineWhereToVote className="text-4xl mx-auto dark:text-gray-500" />
        <h3 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Treatment Room</h3>
        <p className="font-normal md:text-3xl text-gray-700 dark:text-gray-400">Heywood</p>
      </Link>

      <Link href="/about" className="block w-3/5 sm:w-1/3 p-6 mb-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <GrCertificate className="text-4xl mx-auto dark:text-gray-500" />
        <h3 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Certification</h3>
        <p className="font-normal md:text-3xl text-gray-700 dark:text-gray-400">Sports Therapy Level 5</p>
      </Link>
    </div>
  )
}

export default HomeIcons