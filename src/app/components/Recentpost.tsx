import { Heebo } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../../public/assets/recent-1.jpeg";
import img2 from "../../../public/assets/recent-2.webp";
import img3 from "../../../public/assets/recent-3.jpeg";
import product from "@/sanity/schemaTypes/product";






const heebo = Heebo({subsets:['latin']})
export default function Recentpost(){
    return(
        <div className="bg-recentbackground mx-auto md:w-[1030px] md:h-[100%] my-[66px]
         md:flex flex-col justify-evevnly sm:w-[900px] sm:h-[100%] sm:flex ">
            <div className=" md:w-[1030px] p-6 mx-auto md:flex justify-between">
         <h1 className={`${heebo.className} font-medium text-[22px]`}>Recent Launch</h1>
         <Link href={""} className={`${heebo.className} text-[22px] font-medium text-mypink shadow-lg`}>View All</Link>
        </div>
        
               <div className=" md:h-[400px]  mx-auto md:flex justify-evenly gap-1">
            <div className="w-[340px] h-[356px] bg-white flex flex-col items-center justify-evenly mx-auto">
                <Link href={"./products/the-fancy-wear"}>
                <div className="w-[291px] h-[70px] bg-recentbackground  py-4 flex flex-col items-center justify-between ">
                    <h1 className={`${heebo.className} font-bold text-[26px]`}>New Arrival in Bags</h1></div>
                    <div className= "font-normal w-[301px] h-[42px] flex items-center justify-between">
                        <p className={`${heebo.className} text-[18px] font-normal text-black/70 `}>Dated:25-Nov-2024</p>
                        <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>|</p>
                        <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>
                        Design:Material</p>

                      </div>
                    <div>
                        <Image src={img1} alt={"bag1"} width={300} height={300} className="top-10 h-[200px]
                         w-[auto] mx-auto"></Image>
                         <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>
                        SIZES:SM , M , L , XL ,XXL</p>
 
                </div>
                </Link>
                </div>
                
                

                <div className="w-[340px] h-[356px] bg-white flex flex-col items-center justify-evenly mx-auto">
                    <Link href={"./products"}>
                <div className="w-[291px] h-[70px] bg-recentbackground py-4 flex flex-col items-center justify-between">
                    <h1 className={`${heebo.className} font-bold text-[26px]`}>New Arrival in Bags</h1></div>
                    <div className= "font-normal w-[301px] h-[42px] flex items-center justify-between">
                        <p className={`${heebo.className} text-[18px] font-normal text-black/70 `}>Dated:25-Nov-2024</p>
                        <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>|</p>
                        <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>
                        Design:Material</p>
                    </div>
                    <div>
                        <Image src={img2} alt={"bag1"} width={300} height={200} className="top-10 h-[200px] w-[auto] mx-auto"></Image>
                        <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>
                        SIZES:SM , M , L , XL ,XXL</p>
 
                </div>
             </Link>
                </div>

                
                <div className="w-[340px] h-[356px] bg-white flex flex-col items-center justify-evenly mx-auto">
                <Link href={"./products/"}>
                <div className="w-[291px] h-[70px] bg-recentbackground py-4 flex flex-col items-center justify-between">
                    <h1 className={`${heebo.className} font-bold text-[26px]`}>New Arrival in Bags</h1></div>
                    <div className= "font-normal w-[301px] h-[42px] flex items-center justify-between">
                        <p className={`${heebo.className} text-[18px] font-normal text-black/70 `}>Dated:25-Nov-2024</p>
                        <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>|</p>
                        <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>
                        Design:Material</p>
                    </div>
                    <div>
                        <Image src={img3} alt={"bag1"} width={300} height={300} className="top-10 h-[200px]
                         w-[auto] mx-auto"></Image>
                                            <p className={`${heebo.className} text-[18px] font-normal text-black/70`}>
                        SIZES:SM , M , L , XL ,XXL</p>
 
                </div>
                </Link>
                </div>
                </div> 

            
            
         </div>
        
           
        
    )
}