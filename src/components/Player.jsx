import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdFileDownload } from "react-icons/md";
import VolumeController from "./VolumeController";
import { useContext } from "react";
import MusicContext from "../context/MusicContext";
import { useRef } from "react";
import React, { useState, useEffect } from "react";
const Player = () => {
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const { currentSong, playMusic, isPlaying, nextSong, prevSong } =
    useContext(MusicContext);

  const inputRef = useRef();

  useEffect(() => {
    if (currentSong) {
      const audioElement = currentSong.audio;

      const handleTimeUpdate = () => {
        const duration = Number(currentSong.duration);
        const currentTime = audioElement.currentTime;
        const newTiming = (currentTime / duration) * 100;
        inputRef.current.value = newTiming;
      };

      const handleSongEnd = () => nextSong();

      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("ended", handleSongEnd);

      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.addEventListener("ended", handleSongEnd);
      };
    }
  }, [currentSong]);

  const handleProgressChange = (event) => {
    const newPercentage = parseFloat(event.target.value);
    const newTime = (newPercentage / 100) * Number(currentSong.duration);
    if (newTime >= 0) {
      currentSong.audio.currentTime = newTime;
    }
  };

  const handleDownloadSong = async (url) => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${currentSong.name}.mp3`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    } catch (error) {
      console.log("Error fetching or downloading files", error);
    }
  };

  const handlePlayPause = () => {
    if (currentSong) {
      playMusic(
        currentSong.audio,
        currentSong.name,
        currentSong.duration,
        currentSong.image,
        currentSong.id,
        currentSong.primaryArtists
      );
    }
  };

  return (
    <div className="fixed bottom-0 right-0 left-0 bg-[#f5f5f5ff] flex flex-col">
      <input
        type="range"
        name="progress"
        id="progress"
        min={0}
        max={100}
        step="0.05"
        value={0}
        ref={inputRef}
        onChange={handleProgressChange}
        className="w-full h-[5px] text-[#46c7b6ff] range"
      />

      <div className="flex justify-between items-center px-3 mb-3">
        <div className="flex justify-start items-center gap-3   lg:w-[30vw]">
          <img
            src={currentSong?.image}
            alt=""
            width={50}
            className="rounded-lg"
          />
          <div className="  w-auto lg:block">
            <span className=" text-teal-600 text-xs text-nowrap lg:text-lg mr-2">
              {currentSong?.name.slice(0, 16)}
            </span>
            <p className="text-xs text-gray-500">
              {currentSong?.primaryArtists.slice(0, 16)}
            </p>
          </div>
        </div>
        <div className="flex items-center   text-sm  lg:text-2xl justify-center lg:justify-start lg:w-[40vw]  gap-4 lg:gap-6">
          <BiRepeat className="text-gray-500 cursor-pointer hover:text-gray-700    ml-16" />
          <IoMdSkipBackward
            onClick={prevSong}
            className="text-gray-700 hover:text-gray-500 cursor-pointer"
          />
          {isPlaying ? (
            <FaPause
              className="text-gray-700 hover:text-gray-500 cursor-pointer "
              onClick={() =>
                playMusic(
                  currentSong?.audio,
                  currentSong.name,
                  currentSong.duration,
                  currentSong.image,
                  currentSong.id
                )
              }
            />
          ) : (
            <FaPlay
              className="text-gray-700 hover:text-gray-500 cursor-pointer"
              onClick={handlePlayPause}
            />
          )}

          <IoMdSkipForward
            onClick={nextSong}
            className="text-gray-700 hover:text-gray-500 cursor-pointer"
          />

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
