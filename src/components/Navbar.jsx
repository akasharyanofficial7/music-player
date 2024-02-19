import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 border-none lg:border px-2 fixed top-0 left-0 right-0 bg-gray-900 z-20">
      {/* 1st div */}
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0">
        <Link to="/" className="flex justify-between items-center gap-2 mr-4 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CluwMHUf0L4YkBoAR8SNvEvbAexvpOZgKw&usqp=CAU"
            alt="logo"
            width={45}
            className="rounded-full"
          />
          <Link
            to="/"
            className="font-extrabold text-lg  lg:text-2xl jiosaavan text-orange-600 font-serif"
          >
            <h1>
              <span className="font-semibold">S</span>
              <span className="text-gray-400">series</span>
            </h1>
          </Link>
        </Link>
        <div className="flex  pl-0 lg:pl-24 hover:text-gray-600 ">
          <Link to="/about" className="text-white font-semibold">
            About
          </Link>
        </div>
      </div>

      {/* 2nd div */}
      <div className=" flex w-12 lg:w-full  pt-10 lg:h-full h-[70px] lg:pt-0 pl-0 lg:pl-10 lg:flex">
        <input
          type="text"
          name="search"
          id="search"
          className="py-2 rounded-full w-[40vw] outline-none text-center border text-black"
          placeholder="Search songs"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
      {/* 3rd div */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-center gap-1">
          <div className="flex flex-col text-sm">
            <span className="text-[15px]  lg:text-[18px] text-white mb-6  lg:mb-0 font-semibold">
              Languages
            </span>
          </div>
          <div>
            <div className="cursor-pointer" onClick={toggleMenu}>
              <MdKeyboardArrowDown
                className={`text-xl text-white ${
                  isMenuOpen ? "transform rotate-180" : ""
                } mt-0 lg:mt-2`}
              />
            </div>
          </div>
          {/* Dropdown menu for song languages */}
          {isMenuOpen && (
            <div className="absolute top-full left-50 w-60 text-center text-sm  bg-white text-black py-2 px-4 shadow-lg rounded-lg">
              {/* Change div elements to Link elements and add more music */}
              <Link to="/english" className="block py-1 hover:text-[#46c7b6ff]">
                <hr className=" border-gray-300" />
                English
              </Link>
              <hr className=" border-gray-300" />
              <Link to="/hindi" className="block py-1 hover:text-[#46c7b6ff]">
                Hindi
              </Link>
              <hr className=" border-gray-300" />
              <Link to="/" className="block py-1 hover:text-[#46c7b6ff]">
                Spanish
              </Link>
              <hr className=" border-gray-300" />
              <Link to="/" className="block py-1 hover:text-[#46c7b6ff]">
                Spanish
              </Link>
              <hr className=" border-gray-300" />
              {/* Add more languages as needed */}
            </div>
          )}
        </div>
        <div className="flex text-[12px]  lg:text-[15px] gap-3 pb-6 lg:pb-0 text-white font-semibold">
          <Link to="/login" className="list-none">
            LogIn
          </Link>
          <li className="list-none">SignUp</li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
