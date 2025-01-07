"use client"

import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"
//import { Label } from "@/components/ui/label"
import { MdMenu } from "react-icons/md";
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2 md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline"><MdMenu /></Button>
          </SheetTrigger>
          <SheetContent side={side}>


            
            <SheetHeader>
              <SheetTitle>Perfect Shop:</SheetTitle>
              <SheetDescription>
                
              </SheetDescription>
            </SheetHeader>
           
            <div className="  flex gap-4 flex-col items-center sm:gap-6">
                      <CiSearch className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8" />
                      <FaShoppingCart className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8" />
                      <FaRegUserCircle className="h-6 w-6 cursor-pointer  sm:h-8 sm:w-8" />
                    </div>
         
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
