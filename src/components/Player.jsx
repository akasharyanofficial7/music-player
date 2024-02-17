import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdFileDownload } from "react-icons/md";
import VolumeController from "./VolumeController";

import React, { useState } from "react";
const Player = () => {
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);

  return (
    <div className="fixed bottom-0 right-0 left-0  bg-[#f5f5f5ff] flex flex-col">
      <input
        type="range"
        name="progress"
        id="progress"
        min={0}
        max={100}
        step="0.1"
        value={0}
        className="w-full h-[5px] text-green-500 range"
      />

      <div className="flex justify-between items-center px-3 mb-3">
        <div className="flex justify-start items-center gap-3 lg:w-[30vw]">
          <img
            src="https://c.saavncdn.com/274/Rockstar-2011-500x500.jpg"
            alt=""
            width={55}
            className="rounded-lg"
          />
          <div className="hidden lg:block">
            <span className=" text-green-500">Lorem, ipsum.</span>
            <p className="text-xs text-gray-500">Lorem ipsum dolor sit am</p>
          </div>
        </div>
        <div className="flex items-center text-2xl lg:text-3xl  justify-center lg:justify-start lg:w-[40vw]  gap-4 lg:gap-6">
          <BiRepeat className="text-gray-500 cursor-pointer hover:text-gray-700" />
          <IoMdSkipBackward className="text-gray-600 cursor-pointer hover:text-gray-500" />
          <FaPlay className="text-gray-600 cursor-pointer hover:text-gray-500" />
          <IoMdSkipForward className="text-gray-600 cursor-pointer hover:text-gray-500" />
          <PiShuffleBold className="text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>

        <div className="flex justify-end items-center w-[30vh]">
          <MdFileDownload className="text-gray-500 hover:text-gray-600 text-2xl lg:text-3xl cursor-pointer lg:mr-2" />
          <HiSpeakerWave
            className=" hidden lg:block text-gray-500 hover:text-gray-600 text-2xl lg:text-3xl cursor-pointer"
            onMouseEnter={() => setIsVolumeVisible(true)}
            onMouseLeave={() => setIsVolumeVisible(false)}
          />
          <VolumeController isVolumeVisible={isVolumeVisible} />
        </div>
      </div>
    </div>
  );
};

export default Player;
