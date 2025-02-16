import { assets } from "../assets/assets";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className=" flex justify-aroundborder  cursor-pointer " style={{backgroundImage:`url(${assets.FooterBackground})`, backgroundSize: 'cover', backgroundPosition: 'center'}}    >
       <div className=" flex flex-col space-y-5 p-24 relative">
        <img src={assets.Logo} className=" w-44"  alt="" />
        <img src={assets.planeElement} className=" absolute -top-16 -right-36" alt="" />
         <div className=" flex items-center justify-evenly text-[#41BCDA] ">
          <FacebookIcon/>
          <TwitterIcon/>
          <LinkedInIcon/> 
         </div>
       </div>
       <div className=" flex items-start justify-between space-x-36 m-32 text-[#363546]">
        <ul className=" ">
          <li className="text-[#002C8F] font-semibold mb-2">Usefull Links</li>
          <li> About Us</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>Career</li>
        </ul>
        <ul>
          <li className="text-[#002C8F] font-semibold mb-2">Support</li>
          <li>Help Center</li>
          <li>FAQ&apos;s</li>
          
        </ul>
        <ul>
          <li className="text-[#002C8F] font-semibold mb-2">Legal</li>
          <li>Privacy Policy</li>
          <li>CA Privacy Policy</li>
          <li>T&C</li>
        </ul>
       </div>
    </div>
  );
};

export default Footer;
