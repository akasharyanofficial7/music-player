import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Slider from "./Slider";
import Footer from "./Footer";

const MainSection = () => {
  const [albums, setAlbums] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getHomePageData = async () => {
      try {
        const res = await axios.get(
          "https://saavn.dev/modules?language=hindi,punjabi"
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
      <section className="my-20 lg:my-16">
        <h2 className="text-xl px-5 py-3 font-semibold text-gray-500 w-14 lg:w-[78vw] mx-auto trending">
          Trending Now
        </h2>
        <Slider data={trendingAlbums} />
        <h2 className="text-xl px-5 py-3 font-semibold text-gray-500 w-full lg:w-[78vw] mx-auto">
          Top Albums
        </h2>
        <Slider data={albums} />
        <h2 className="text-xl px-5 py-3 font-semibold text-gray-500 w-full lg:w-[78vw] mx-auto">
          All BlockBuster
        </h2>
        <Slider data={albums} />
      </section>
      <Footer />
    </>
  );
};

export default MainSection;
