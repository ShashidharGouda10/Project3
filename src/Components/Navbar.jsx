import { assets } from "../assets/assets"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Navbar = () => {
  return (
    <div className="relative left-0 w-full  font-sans ">
        <div className="container mx-auto flex justify-between items-center py-4 px-20  ">
          <img src={assets.Logo} className="w-30 h-10" alt="" />
          <ul className="flex space-x-6">
            <li className="cursor-pointer text-[#473E6D] font-bold ">Home </li>
            <li  className="cursor-pointer text-[#473E6D] font-bold ">Solution{<ExpandMoreIcon/>}</li>
            <li className="cursor-pointer text-[#473E6D] font-bold">Why-System-3{<ExpandMoreIcon/>}</li>
            <li className="cursor-pointer text-[#473E6D] font-bold">About Us{<ExpandMoreIcon/>}</li>
            <li className="cursor-pointer text-[#473E6D] font-bold">Contact Us  </li>
          </ul>
          <button className="bg-gradient-to-r from-green-400 to-blue-400  md:block px-8 py-2 rounded-full text-[#FCFCFC] font-bold">Register/Login{<ArrowForwardIcon/>}  </button>
          <span className="absolute bottom-0 left-0 w-full h-0.5  bg-gradient-to-r from-green-400 to-blue-400"></span>
        </div>
    </div>
  )
}

export default Navbar;