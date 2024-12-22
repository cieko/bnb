import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { MdOutlineCabin } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Categories = () => {
  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
        <LiaSwimmingPoolSolid size={30} />

        <span className="text-xs">Beach</span>
      </div>

      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
        <MdOutlineHolidayVillage size={30} />

        <span className="text-xs">Villas</span>
      </div>

      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
        <MdOutlineCabin size={30} />

        <span className="text-xs">Cabins</span>
      </div>

      <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
        <FaHome size={30} />

        <span className="text-xs">Tiny Homes</span>
      </div>
    </div>
  )
}

export default Categories