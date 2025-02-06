import React from 'react'
import Link from 'next/link'
import { Search, Briefcase } from 'lucide-react';
import { CircleEllipsis, Menu } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"



const Header = () => {
  return (
    //header
    <div>
    <header className='max-w-[1920px] h-[107px] bg-[#F1F8F1] flex flex-col mx-auto'>
      {/* Foodtuck title  */}
      <div className=' flex justify-center'>
        <h1 className='text-4xl text-[#155915]'>
          TRENDY
          <span className='text-4xl text-[#d32f2f]'>TREADS</span>
        </h1>
      </div>

      {/* Links and Search section */}
      <div className='max-w-[1320px] h-[57px] bg-[#F1F8F1] flex flex-row justify-between
       px-2 ml-2 py-2 mt-3 xl:justify-evenly '>

        {/* Links section */}
        <ul className='max-w-[800px] h-[24px] text-[16px] text-[#155915] hidden md:flex gap-1 list-none ">'>
          <Link href={"/"} className="mr-5 text-1xl hover:text-[#155915]">
            Home <CircleEllipsis className='w-3 h-3 text-[#155915]' />
          </Link>
          <Link href={"../products"} className="mr-5 text-1xl hover:text-[#155915]">
            Products
          </Link>
          <Link href={"../blog"} className="mr-5 text-1xl hover:text-[#155915]">
            Blog
          </Link>
                    <Select>
            <SelectTrigger className="w-[78px] h-[24px] text-sm px-2 border-none">
              <SelectValue placeholder="Pages" />
            </SelectTrigger>
            <SelectContent className=''>

              <Link href="../signup" className="mr-5 text-1xl text-[#ffffff] hover:text-[#155915]">
                Sign Up
              </Link>

              <Link href="../signin" className="mr-5 text-1xl text-[#ffffff] hover:text-[#155915]">
                Sign In
              </Link>

              <Link href="../error404" className="mr-5 text-1xl text-[#ffffff] hover:text-[#155915]">
                Error 404
              </Link>

            </SelectContent>
          </Select>
          <Link href={"./shop"} className="mr-5 text-1xl hover:text-[#155915]">
                Shop
              </Link>
          <Link href={"../contact"} className="mr-5 text-1xl hover:text-[#155915]">
            Contact
          </Link>
        </ul>

        <Sheet>
          <SheetTrigger className="md:hidden text-[#155915] ">
            <Menu />
          </SheetTrigger>
          <SheetContent className='bg-white'>
            <ul className="flex flex-col gap-1 list-none ">
              <Link href={"/"} className="mr-5 text-1xl hover:text-[#155915]">
                Home <CircleEllipsis className='w-3 h-3 text-[#155915]' />
              </Link>
              <Link href={"./products"} className="mr-5 text-1xl hover:text-[#155915]">
                Products
              </Link>
              <Link href={"./blog"} className="mr-5 text-1xl hover:text-[#155915]">
                Blog
              </Link>
                          <Select>
                <SelectTrigger className="w-[78px] h-[24px] text-sm px-2 border-none">
                  <SelectValue placeholder="Pages" />
                </SelectTrigger>
                <SelectContent className=''>

                  <Link href="../signup" className="mr-5 text-1xl text-[#ffffff] hover:text-[#155915]">
                    Sign Up
                  </Link>

                  <Link href="../signin" className="mr-5 text-1xl text-[#ffffff] hover:text-[#155915]">
                    Sign In
                  </Link>

                  <Link href="../error404" className="mr-5 text-1xl text-[#ffffff] hover:text-[#155915]">
                    Error 404
                  </Link>

                </SelectContent>
              </Select>
              <Link href={"./shop"} className="mr-5 text-1xl hover:text-[#155915]">
                Shop
              </Link>
              <Link href={"./contact"} className="mr-5 text-1xl hover:text-[#155915]">
                Contact
              </Link>
            </ul>
          </SheetContent>
        </Sheet>


        {/* Search section */}
        <div className='relative py-1 inline-flex gap-4'>
          <input
            type="text"
            placeholder='Search...'
            className='rounded-2xl h-8 pt-3 pr-3 pb-2 pl-5 gap-[10px] font-[inter] text-[16px]
         border-[#D32F2F] border-2 bg-[#ffffff] text-[#155915]'/>
          <Search className="absolute right-12 top-1/2 transform -translate-y-3 text-[#FFFFFF]" />
          <Briefcase className='text-[#D32F2F]' />
        </div>
      </div>

    </header >
    
    <div>


    </div>
</div>
  )
}

export default Header