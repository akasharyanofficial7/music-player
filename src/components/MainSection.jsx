import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Slider from "./Slider";

const MainSection = () => {
  const [albums, setAlbums] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getHomePageData = async () => {
      try {
        const res = await axios.get(
          `https://saavn.dev/modules?language=hindi,punjabi,bhojpuri,tamil&page=${180}&pageSize=${120}`
        );
        const { data } = res.data;
        setAlbums(data.albums);
        setTrending(data.trending);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getHomePageData();
  }, []);

  const trendingAlbums = useMemo(
    () => (Array.isArray(trending.albums) ? trending.albums : []),
    [trending.albums]
  );

  return (
    <>
      <section className=" my-6 lg:my-6 pt-8">
        <h2 className="text-xl  pt-2 pb-4 font-semibold  dark:text-teal-700  items-center  w-14 lg:w-[78vw] mx-auto trending">
          Trending
        </h2>
        <Slider data={trendingAlbums} className="" />
        <h2 className="text-xl px-5 py-5 font-semibold dark:text-teal-700  w-full lg:w-[78vw] mx-auto">
          Top Albums
        </h2>
        <Slider data={albums} />
        <h2 className="text-xl px-5 py-5 font-semibold  dark:text-teal-700   w-full lg:w-[78vw] mx-auto">
          All BlockBuster
        </h2>
        <Slider data={albums} />
      </section>
    </>
  );
};

export default MainSection;
