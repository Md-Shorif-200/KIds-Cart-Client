import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const navlinks = (
  <>
    {/* Home */}
    <li className="text-[14px] capitalize text-black my-3 lg:my-0 lg:text-white font-normal hover:text-teal-600 transition-colors">
      <Link to="/" className="flex gap-x-2 items-center">
        Home 
      </Link>
    </li>

    {/* Page with Dropdown */}
    <li className="relative group text-[14px] capitalize text-black my-3 lg:my-0 lg:text-white flex gap-x-2 items-center font-normal hover:text-teal-600 transition-colors cursor-pointer">
      Page <IoIosArrowDown />
      <ul className="absolute left-0 top-full mt-2 w-40 bg-white rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <li>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white transition"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white transition"
          >
            Contact
          </Link>
        </li>
      </ul>
    </li>

    {/* Shop with Dropdown */}
    <li className="relative group text-[14px] capitalize text-black my-3 lg:my-0 lg:text-white flex gap-x-2 items-center font-normal hover:text-teal-600 transition-colors cursor-pointer">
      Shop <IoIosArrowDown />
      <ul className="absolute left-0 top-full mt-2 w-40 bg-white rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <li>
          <Link
            to="/checkout"
            className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white transition"
          >
            Checkout
          </Link>
        </li>
      
      </ul>
    </li>
  </>
);


const NavLinks = () => {
  return (
    <>
      <ul className=" lg:flex lg:gap-x-[30px] lg:ml-[15px] ">{navlinks}</ul>
    </>
  );
};

export default NavLinks;
