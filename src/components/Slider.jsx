import React, { useRef } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import AlbumItem from "./AlbumItem"; // Assuming it's a relative path

const Slider = ({ data }) => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 800;
  };

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 800;
  };

  return (
    <div className="flex justify-center items-center gap-1">
      <MdOutlineKeyboardArrowLeft
        className="hidden lg:block text-xl lg:text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer"
        onClick={scrollLeft}
      />
      <div
        className="grid grid-rows-2 lg:grid-rows-2 grid-flow-col-dense gap-4 lg:gap-4 justify-between items-center overflow-x-scroll w-full 
      lg:w-[78] px-5 scroll-hide"
        ref={scrollRef}
      >
        {data.map((album) => (
          <AlbumItem key={album.id} {...album} />
        ))}
      </div>
      <MdOutlineKeyboardArrowRight
        className="hidden lg:block text-xl lg:text-3xl text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer "
        onClick={scrollRight}
      />
    </div>
  );
};

export default Slider;
