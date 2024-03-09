import React from "react";
import Player from "../components/Player";
import MainEnglish from "../components/MainEnglish";
import SearchSection from "../components/SearchSection";
const EnglishHome = () => {
  return (
    <div>
      <SearchSection />
      <MainEnglish />
      <Player />
    </div>
  );
};

export default EnglishHome;
