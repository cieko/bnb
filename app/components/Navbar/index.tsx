import Image from "next/image";
import Link from "next/link";
import SearchFilters from "./search-filters";
import UserNav from "./user-nav";
import AddPropertyButton from "./add-property-button";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="w-[180px] h-[65px] overflow-hidden flex items-center justify-center">
            <Image
              src={"/bnb-logo.png"}
              alt="Bnb logo"
              width={180}
              height={30}
              className="scale-75"
            />
          </Link>

          <div className="flex space-x-6">
            <SearchFilters />
          </div>

          <div className="flex items-center space-x-6">
            <AddPropertyButton />
            <UserNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
