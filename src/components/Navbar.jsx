import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "flowbite-react";

const Navbar = () => {
  const path = useLocation().pathname;

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
            className="font-extrabold   jiosaavan text-orange-600 font-serif"
          >
            <h1>
              <span className="font-semibold text-xl  lg:text-4xl">S</span>
              <span className="text-gray-400 text-lg  lg:text-xl">Series</span>
            </h1>
          </Link>
        </Link>
        <div className="flex  pl-0 lg:pl-24   ">
          <Link
            to="/about"
            className={`   font-semibold ${
              path === "/about" ? "text-teal-500" : "text-white"
            }`}
          >
            About
          </Link>
        </div>
      </div>

      {/* 2nd div */}
      <div className=" flex w-12 lg:w-full  pt-10 lg:h-full h-[70px] lg:pt-0 mr-6 pl-0 lg:pl-10 lg:flex">
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
        <div className="flex justify-center gap-1 mb-6 text-white lg:mb-0">
          <div>
            <Dropdown label="Dropdown" inline>
              <Dropdown.Header className="font-semibold">
                music list
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/hindi" className="block py-1 hover:text-[#46c7b6ff]">
                  Hindi
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/english" className="block hover:text-[#46c7b6ff]">
                  English
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/" className="block hover:text-[#46c7b6ff]">
                  All song
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown>
          </div>
        </div>

        {/* 4th div */}
        <div className="flex text-[12px]  lg:text-[15px] gap-3 pb-6 lg:pb-0 text-white font-semibold">
          <Link
            to="/signup"
            className={`flex-nowrap ${
              path === "/signup" ? "text-teal-500" : ""
            }`}
          >
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
