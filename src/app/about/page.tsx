import Image from "next/image";
import img5 from "../../../public/assets/blog3.webp"
import img6 from "../../../public/assets/work-3.jpeg"
import  img from "../../../public/assets/works-1.webp";
export default function Work(){
    return(

    


<section className="text-myblack body-font">
  <div className="container  px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image src={img} alt={"work1"} width={1200} height={1200}/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10 bg-recentbackground">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-70 h-80 inline-flex items-center justify-center bg-gray-200 text-gray-400">
          <Image src={img5} alt={"blog1"} width={721} height={400}/>
   
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-mypink text-lg">
            The Latest Bags You’ll Love!
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-myblack">
              We are thrilled to introduce our new collection of bags, 
              featuring the season’s hottest styles, perfect for every occasion. Whether you’re looking
               for something chic for a night out, a spacious tote for everyday use, or a sleek crossbody
                to elevate your outfit, we’ve got something special just for you.


            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className=" leading-relaxed text-lg mb-4 mt-6 text-myblack">
          Elegant Evening Clutches<br/>
Add a touch of glamour to your night out with our new range of evening clutches.<br/>

Versatile Tote Bags<br/>
The ultimate in practicality and style, our new tote bags are spacious and stylish enough to take you from work to weekend.
 with ease.<br/> 

{/* Chic Crossbody Bags<br/>
Stay hands-free and stylish with our updated selection of crossbody bags. Trendy colors, 
perfect for busy days or casual outings<br/>. */}

          </p>
          <div className="text-mypink text-lg inline-flex items-center">
          <Image src={img6} alt={"blog1"} width={400} height={100}/>
        </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

    )
}