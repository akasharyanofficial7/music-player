import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import AlbumItem from "./AlbumItem";
import Slider from "./Slider";

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
    <div>
      <Slider data={trendingAlbums} />
    </div>
  );
};

export default MainSection;
