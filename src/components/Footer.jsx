import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="pb-16 lg:pb-0 bg-[#101013]">
      <div className="flex items-center justify-around">
        <div className="flex flex-col ">
          <img className="w-30 h-16 lg:w-40 lg:h-16" src="/images/logo.png" alt="LOGO" />
        </div>
          <h5 className="text-white">@2026 All rights reserved.</h5>
        <h1 className="text-white">Creted by <span className="font-bold">Ayan</span></h1>
        <div className="flex items-center justify-around gap-4 text-white">
            <a href="https://www.facebook.com/Iamayan1906" target="blank"><FaFacebook/></a>
            <a href="https://github.com/ayan1906" target="blank"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/sakin-ayan-a7953b346/?isSelfProfile=true" target="blank"><FaLinkedin/></a>

        </div>
        </div>    
      </div>
  )
}

export default Footer