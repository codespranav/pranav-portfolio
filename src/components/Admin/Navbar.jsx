import React, { useState } from 'react'
import Logo from "../../assets/profile.png"
import { LayoutDashboard, Clock3, BarChart2, ArrowRightLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion"
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navLinks = [
    { name: "Dashboard", icon: <LayoutDashboard />, url: "/home" },
    { name: "Blogs", icon: <Clock3 />, url: "/blog" },
    { name: "Bar Chart", icon: <BarChart2 /> },
    { name: "Arrow", icon: <ArrowRightLeft /> }
];

const variants = {
  expanded: {width: "22%"},
  notExpanded: {width: "5%"}
}
  return (
    <motion.div animate = {
      isExpanded ? "expanded" : "notExpanded"
    } variants={variants} className='border-2 w-1/5 h-screen px-4 py-8 flex flex-col space-y-6 shadow-md relative'>
        <div className="logo flex items-center space-x-4 border-b-2 pb-3 px-2 ">
            <img src={Logo} alt="" className='w-14 rounded-md'/>
            <p className={`font-bold ${isExpanded ? "block" : "hidden"}`}>ADMIN <br/>DASHBOARD </p>
        </div>

        <div className='w-6 h-6 bg-red-600 rounded-full flex justify-center items-center absolute -right-3 cursor-pointer' onClick={()=>{setIsExpanded(!isExpanded)}}>
              <span className='text-white'><ChevronRight className='text-sm' /></span>
        </div>

        <div className="menu-icons mt-4 flex flex-col space-y-3 ">
           { navLinks.map((item, index)=>(
              <div key={index}>
                <ul className='flex space-x-4 cursor-pointer hover:bg-zinc-300 py-4 px-2 rounded-md'>
                  {item.icon}  
                  <Link to= {`/admin${item.url}`}  className={`${isExpanded ?"block" : "hidden"} w-full`}>{item.name}</Link>
                 </ul>
              </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Navbar
