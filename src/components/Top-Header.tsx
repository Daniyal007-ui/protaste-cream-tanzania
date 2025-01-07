
import { BsFillSendArrowDownFill } from "react-icons/bs"

export default function TopHeader() {
    return (
        <>
            <div className="bg-sky-700 h-auto w-full flex flex-col justify-center items-center py-2">
                <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg">HURRY UP! GET IN TOUCH TODAY!</h3>
            </div>

            <div className="bg-black h-auto w-full sm:w-auto text-white flex items-center justify-center py-2 sm:px-4">
                <BsFillSendArrowDownFill className="text-xl sm:text-2xl md:text-3xl" />
                <h3 className="ml-2 text-center text-xs sm:text-sm md:text-base lg:text-lg sm:pt-2">ENJOY FREE SHIPPING ON ALL DELIVERY!✔️</h3>
            </div>

        </>
    )
}