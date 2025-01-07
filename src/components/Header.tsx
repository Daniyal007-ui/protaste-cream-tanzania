import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';
import { SheetSide } from './Sheet';



export default function Header() {
  return (
    <>
   
    <div className="bg-gray-100 w-full flex justify-between items-center px-3  sm:h-16 h-auto">
    <SheetSide/>
      {/* Logo Section */}
      <div className=" flex items-center justify-center sm:justify-start w-full ">
        <Image
          src="/logo.jpg"
          alt="logo"
          height={300}
          width={300}
          className="object-cover md:h-[60px]  sm:h-[40px] md:w-[200px] sm:w-auto sm:pl-3"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-end ">
        {/* Contact Us Text */}
        <p className="md:text-xl hidden md:block sm:text-sm font-bold sm:whitespace-nowrap">
          Contact Us 
        </p>
        <CiSearch className="h-6 w-6 cursor-pointer md:hidden sm:ml-auto  sm:h-8 sm:w-8" />
       

        {/* Icons - Visible on all screen sizes */}
        <div className="  flex gap-4 items-center sm:gap-6">
          <CiSearch className="h-6 w-6 cursor-pointer hidden md:block sm:h-8 sm:w-8" />
          <FaShoppingCart className="h-6 w-6 cursor-pointer  hidden md:block sm:h-8 sm:w-8" />
          <FaRegUserCircle className="h-6 w-6 cursor-pointer  hidden md:block sm:h-8 sm:w-8" />
        </div>
      </div>
    </div>
    </>
  );
}
