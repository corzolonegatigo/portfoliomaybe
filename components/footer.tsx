import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const contacts = [
    {
      id: 1,
      img: <FaGithub size={60}/>,
      link:"https://github.com/corzolonegatigo",
    },
    {
      id: 2,
      img: <CiMail size={60}/>,
      link:"mailto:zlee26369@gmail.com",
    },
  ];

const Footer = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
            My <span className='text-purple' >Contacts </span> Below
        </h1>
        <p className='text-white-200 md:mt-10 mb-5 text-center pb-10'>
            Please contact me if you have any questions or opportunites available
        </p>
        <div className="flex items-center md:gap-10 gap-14 pb-20">
          {contacts.map((info) => (
            <div
              key={info.id}
              className="w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <a href={info.link}>{info.img}</a>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Footer