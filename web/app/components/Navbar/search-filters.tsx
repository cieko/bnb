import { CiSearch } from "react-icons/ci";

const SearchFilters = () => {
  return (
    <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex items-center justify-between">
          <div className="w-[250px] cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm text-gray-400">Wanted Location</p>
          </div>

          <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check In</p>
            <p className="text-sm text-gray-400">Add dates</p>
          </div>

          <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check Out</p>
            <p className="text-sm text-gray-400">Add dates</p>
          </div>

          <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm text-gray-400">Add guests</p>
          </div>

        </div>
      </div>

      <div className="p-2">
        <div className="p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark cursor-pointer rounded-full text-white">
          <CiSearch />
        </div>
      </div>
    </div>
  )
}

export default SearchFilters