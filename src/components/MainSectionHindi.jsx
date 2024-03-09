import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Slider from "./Slider";

const MainSectionHindi = () => {
  const [albums, setAlbums] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getHomePageData = async () => {
      try {
        const res = await axios.get(
          `https://saavn.dev/modules?language=hindi,french`
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
      <section className="my-6 lg:my-6">
        <h2 className="text-xl px-5 pt-12  pb-2 font-semibold  dark:text-teal-700   w-full lg:w-[78vw] mx-auto">
          Hindi music
        </h2>
        <Slider data={trendingAlbums} />
        <h2 className="text-xl px-5 py-5 font-semibold  dark:text-teal-700   w-full lg:w-[78vw] mx-auto">
          Blockbusters
        </h2>
        <Slider data={albums} />
      </section>
    </>
  );
};

export default MainSectionHindi;
