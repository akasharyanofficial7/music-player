import React from "react";
// import Header from "../components/Header";
import Player from "../components/Player";
import MainSection from "../components/MainSection";
import SearchSection from "../components/SearchSection";
const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <SearchSection />
      <MainSection />
      <Player />
    </div>
  );
};

export default Home;
