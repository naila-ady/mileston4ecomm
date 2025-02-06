import { Heebo } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaLinkedin, } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa";


const heebo = Heebo({ subsets: ["latin"] })

const Footer = () => {
    return (
        <div className=" bg-[#F1F8F1] flex items-center flex-col justify-center w-[100%] h-[243px]">
            <div className="flex space-x-5">
                <Link href={''}>
                <FaFacebookSquare className="w-[30px] h-[30px]" /></Link>
                <Link href={''}>
                <FaLinkedin className="w-[30px] h-[30px]" /></Link>
                <Link href={''}>
                <FaTwitter className="w-[30px] h-[30px]" /></Link>
                <Link href={''}>
                <FaInstagram className="w-[30px] h-[30px]" /></Link>
                           

            </div>
            <p className={`${heebo.className} text-center space-y-6 font-medium text-[22px]`}>
                Copyright @2020 All Rights Reserved
            </p>
        </div>
    )
}
export default Footer