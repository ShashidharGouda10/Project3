import { assets } from "../assets/assets";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const HeroSection = () => {
  return (

    <div className=" flex p-5" >
      <div className=" flex flex-col items-start  m-24 w-fit space-y-5 relative " >
          <p className="text-[#33295D] text-5xl  ">The Science Of <br />  <span className="text-5xl font-bold ">Seeing the Invisible</span></p>
           <p className="text-[#787585] ">Adding Diversity to the C-Suite and Board through Predictive <br /> Unbiased Talent Assessment.</p>
           <button className="bg-gradient-to-r from-green-400 to-blue-400  md:block px-8 py-2 rounded-md text-[#FCFCFC] ">Get Started{<ArrowForwardIcon/>} </button>
           <p className="text-[#756B6D] text-xs"> Free forever — no credit card required.</p>
           <img src={assets.Illustration2} className="w-[621px] h-[396px] pt-5" alt="" />
           <img src={assets.bgellipse} className=" absolute w-20 -top-10 -left-6  " alt="" />
      </div>
      <div className="relative space-y-4  ">
         <img src={assets.planeElement} className="  absolute top-8 -left-16 " alt="" />
        <img src={assets.Illustration1} className=" w-[577px] h-[564px]" alt="" />
        <p className="text-[#33295D] text-4xl font-bold mt-3 ">Sit id quis viverra quis.</p>
        <p className="text-[#787585]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In <br /> natoque leo leo aliquam fringilla id est neque..</p>
         <img src={assets.vector5} className=" absolute top-96 right-96 w-80" alt="" />
      </div> 
    </div>
  );
};

export default HeroSection;
