import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from 'framer-motion'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='text-center my-20 text-3xl'>Technologies</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className='rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center'>
          <RiReactjsFill className='text-7xl text-cyan-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center'>
          <DiMongodb className='text-7xl text-green-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center'>
          <SiExpress className='text-7xl text-white'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center'>
          <FaNodeJs className='text-7xl text-green-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center'>
          <IoLogoJavascript className='text-7xl text-yellow-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center'>
          <FaJava className='text-7xl text-cyan-500'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
