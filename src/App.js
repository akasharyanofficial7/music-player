import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AlbumDetails from "./pages/AlbumDetails";
import MusicContext from "./context/MusicContext";
import { useState } from "react";
function App() {
  const [songs, setSongs] = useState([]);
  return (
    <MusicContext.Provider value={{ setSongs }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
        </Routes>
      </BrowserRouter>
    </MusicContext.Provider>
  );
}

export default App;
