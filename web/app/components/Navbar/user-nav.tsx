import { CiMenuBurger } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const UserNav = () => {
  return (
    <div className='p-2 relative inline-block border rounded-full'>
      <button className='flex items-center gap-3'>
        <CiMenuBurger size={20} />
        <FaRegUser size={20} />
      </button>
    </div>
  )
}

export default UserNav