import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 border-none lg:border px-2 fixed top-0 left-0 right-0 bg- bg-gray-900 z-20">
      {/* 1st div */}
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0">
        <div className="flex justify-between items-center gap-2 mr-4 ">
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
        </div>
        <div className="flex text-[15px] lg:text-[15px] gap-5 text-white font-semibold h-full">
          <li className="list-none">Music</li>
          <li className="list-none">Podcasts</li>
          <Link to="/about" className=" ">
            About
          </Link>
        </div>
      </div>

      {/* 2nd div */}
      <div className="hidden lg:block">
        <input
          type="text"
          name="search"
          id="search"
          className="py-2 rounded-full w-[40vw] outline-none text-center border text-black"
          placeholder="Search for songs"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
      {/* 3rd div */}
      <div className="hidden lg:flex justify-between items-center gap-4">
        <div className="flex justify-center gap-2">
          <div className="flex flex-col text-sm">
            <span className="text-[14px] text-white font-semibold">
              Music Languages
            </span>
            <span className="text-[12px] text-white">Hindi</span>
          </div>
          <MdKeyboardArrowDown className="text-xl text-white mt-2" />
        </div>
        <div className="flex text-[15px] gap-5 text-white font-semibold">
          <li className="list-none">Log In</li>
          <li className="list-none">Sign Up</li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
