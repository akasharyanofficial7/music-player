import React from "react";
import { Dropdown } from "flowbite-react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const Header = () => {
  const { setSearchedSongs } = useContext(MusicContext);
  const path = useLocation().pathname;

  const searchSongs = async (e) => {
    const res = await axios.get(
      `https://saavn.dev/search/songs?query=${e.target.value}&page=1&limit=4`
    );

    const { data } = await res.data;
    if (
      data.results.length === 0 ||
      e.target.value === " " ||
      e.target.value.length === 0
    ) {
      setSearchedSongs([]);
    } else {
      setSearchedSongs(data.results);
    }
  };

  return (
    <Navbar className="border-b-2 border-slate-700 fixed top-0 left-0 right-0 z-50 bg-gray-900">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-teal-700 font-serif"
      >
        <h1>
          <span className="font-semibold text-2xl lg:text-5xl">S</span>
          <span className="text-gray-400 text-lg lg:text-3xl">Series</span>
        </h1>
      </Link>

      <Navbar.Toggle />

      <Navbar.Collapse className="">
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="w-[270px] lg:w-[300px] pr-8 lg:pr-0"
            autoComplete="off"
            autoCorrect="off"
            onChange={searchSongs}
          />
        </form>

        <Navbar.Link
          active={path === "/"}
          as={"div"}
          className="text-sm font-semibold text-white lg:text-lg lg:font-semibold"
        >
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link
          active={path === "/about"}
          as={"div"}
          className="text-sm font-semibold text-white lg:text-lg lg:font-semibold"
        >
          <Link to="/about">About</Link>
        </Navbar.Link>

        <Navbar.Link>
          <div className="flex justify-between items-center pr-16 gap-1">
            <div className="text-white hover:text-[#46c7b6ff]">
              <Dropdown label="Languages" inline className=" ">
                <Dropdown.Header className="font-semibold">
                  Music List
                </Dropdown.Header>
                <Dropdown.Item>
                  <Link
                    to="/hindi"
                    className="block py-1 hover:text-[#46c7b6ff]"
                  >
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
                    All Songs
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown>
            </div>
          </div>
        </Navbar.Link>

        <Navbar.Link className="">
          <div className="flex gap-2 md:order-2 pl-0 m ml-0 lg:pl-10 lg:ml-10">
            <Link to="/signup">
              <Button>SignUp</Button>
            </Link>
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
