// import logo from "../assets/kevinRushLogo.png"
import logo from "../assets/pranavSinghLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='w-10 mx-2' src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white'>
        <FaGithub/>
        <FaInstagram/>
        <FaLinkedin/>
        <FaYoutube/>
      </div>
    </nav>
  )
}

export default Navbar
