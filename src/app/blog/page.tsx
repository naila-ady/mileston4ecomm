import Image from "next/image";
import img1 from "../../../public/assets/blog1.webp"
import img2 from "../../../public/assets/blog2.webp"
import img3 from "../../../public/assets/blog-4.jpeg"
export default function Blog(){
    return(

        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-recentbackground border-opacity-60 rounded-lg overflow-hidden">
                <Image src={img1} alt={"blog1"} width={721} height={400}/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-myblack mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-mypink mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed mb-3">
                  These are more refined sandals, often made from materials like leather or suede and 
                  featuring elegant designs for formal occasions.
                   They might have delicate straps or embellishments like beads or crystals.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-mypink inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-recentbackground border-opacity-60 rounded-lg overflow-hidden">

                  <Image src={img2} alt={"blog2"} width={721} height={400}/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-myblack mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-mypink mb-3">
                    The Wedding Blows
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Your wedding day is all about comfort and style, and finding the perfect bridal shoes is key.
                   We share tips on how to pick the ideal pair for your big day
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-mypink inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More</a>
                      
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-recentbackground border-opacity-60 rounded-lg overflow-hidden">
              <Image src={img3} alt={"blog3"} width={721} height={500}/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-myblack mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-mypink mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Stay ahead of the fashion curve with these must-have shoe styles this season. 
                  From sleek stilettos to higj-heels, we break down the top trends that will elevate your shoe game
                    
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-mypink inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      </a>
                      
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

    )
}