import { assets } from "../assets/assets"

assets
const OpportunitySection = () => {
  return (
    <div className=" flex space-x-36">
        <div  className=" relative">
            <img src={assets.Semicircle}  alt="" />
            <img src={assets.frame1} className=" absolute top-5 right-5" alt="" />
            <img src={assets.frame2} className=" absolute top-60  -right-12 " alt="" />
            <img src={assets.frame3}  className=" absolute bottom-3  right-14 "  alt="" />
            <p className=" absolute top-24 -left-48 -rotate-90 origin-bottom-right text-3xl text-[#23769F] font-bold ">The Opportunity is Now</p>
             <img src={assets.bgellipse} className=" absolute -top-8 -left-16 " alt="" />
             <img src={assets.bgellipse} className=" absolute -bottom-12 -left-16  " alt="" />
             <img src={assets.bgellipse} className=" absolute -bottom-16  w-20 " alt="" />
        </div>
        <div className=" flex flex-col space-y-16 p-10 relative">
            <p className="w-44 text-left text-[#23769F]">Social and regulatory forces have caused the corporate world to recognize bias and commit to equity hiring</p>
            <p className="w-44 text-left text-[#23769F]">Social and regulatory forces have caused the corporate world to recognize bias and commit to equity hiring</p>
            <p className="w-44 text-left text-[#23769F]">Social and regulatory forces have caused the corporate world to recognize bias and commit to equity hiring</p>
            <img src={assets.vector6} className=" absolute top-5 -left-36 w-40" alt="" />
            <img src={assets.vector8} className=" absolute top-56 -left-20" alt="" />
            <img src={assets.vector9} className=" absolute bottom-14 -left-36 w-40" alt="" />
        </div>
        <div className=" items-center relative">
            <img src={assets.girlsimage} className="w-96 relative z-10 pt-24" alt="" />
            <img src={assets.vector} className="w-96 absolute top-0 z-0 pt-24" alt="" />
            <img src={assets.orangeellipse} className=" absolute top-24  w-14" alt="" />
            <img src={assets.greenellipse} className=" absolute top-24 left-14 " alt="" />
        </div>
    </div>
  )
}

export default OpportunitySection
