import { assets  } from "../assets/assets"
const LastSection = () => {
  return (
    <div className=" flex p-14 mt-24 m-10 space-x-40">
        <div className=" flex flex-col space-y-20">
            <div className=" relative">
            <img src={assets.growth} className="w-96" alt="" />
            <img src={assets.rocket} className=" absolute -top-16 -right-1 " alt="" />
            </div>
           <div className="flex flex-col space-y-5 relative">
            <p className="text-[#33295D] text-4xl font-bold">The Solution </p>
            <p className=" text-[#83808F] w-96 ">Re-focus hiring on competencies and the likelihood of success,  which will result in a larger pipeline of equity deserving candidates who have not done it before but can and will.  Build a predictive SaaS assessment solution that is efficient, affordable, unbiased and based on existing science that will predict success. Build the pipeline of equity deserving candidates.</p>
            <img src={assets.bgellipse} className=" absolute -top-10 -left-6 w-20 " alt="" />
           </div>
        </div>
        <div>
            <div className="flex flex-col space-y-5 relative">
            <p className="text-[#33295D] text-4xl font-bold">The Challenge </p>
            <p className=" text-[#83808F] w-96 ">There is not a sufficient pipeline of experienced diversity candidates to meet the demand. Talent managers do not have unbiased, cost effective, predictive tools to assess potential C-Suite and Board talent. .</p>
            <img src={assets.bgellipse} className=" absolute -top-10 -left-6 w-20 " alt="" />
           </div>
           <div className=" mt-10">
            <img src={assets.surface1} alt="" />
           </div>
        

        </div>

    </div>
  )
}

export default LastSection