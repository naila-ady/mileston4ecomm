


import Image from "next/image";
import img from "../../../public/assets/heroimage.webp";
import { Heebo } from "next/font/google";
import { Button } from "@/components/ui/button";

const heebo = Heebo({ subsets: ['latin'] });

export default function Hero() {
  return (
    <div className="w-full p-6 md:w-[1030px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
      {/* text div */}
      <div className="md:w-[512px] flex flex-col gap-2 md:justify-between items-start sm:justify-evenly">
        <h1 className={`${heebo.className} sm:text-[28px] md:text-[48px] text-mypink font-bold`}>
          THE FANCY WEAR
          <br /> Walk and Carry!
        </h1>
        <p className={`${heebo.className} text-[16px] sm:text-[18px] font-normal text-myblack`}>
          Step into elegance with our stunning collection of <strong>fancy sandals</strong> and <strong>luxury bags</strong>.
          Perfectly crafted to elevate any outfit, our sandals offer comfort with style, while our bags add a touch of sophistication to every look.
          Discover the perfect blend of fashion and function today!
        </p>
        <Button
          variant="destructive"
          className={`${heebo.className} text-[16px] font-medium text-white bg-mypink w-[205px] h-[50px] mt-5 rounded-sm shadow-md shadow-black/50`}
        >
          Shop Now
        </Button>
      </div>

      {/* image div */}
      <div className="w-full md:w-[500px] relative mt-6 md:mt-0 flex justify-center">
        <div className="w-full  pb-[100%] relative">
                    <Image
            src={img}
            alt="heroimage"
            layout="fill"  
                       objectFit="contain"           />
        </div>
        {/* {/* <div className="bg-heroeclipse w-[490px] h-[204px] absolute -z-10 top-2 right-2"></div> */}
      </div> 
    </div>
  );
}
