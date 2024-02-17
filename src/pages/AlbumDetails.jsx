import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MusicContext from "../context/MusicContext";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

const AlbumDetails = () => {
  const { setSongs } = useContext(MusicContext);
  const [album, setAlbum] = useState([]);
  const [image, setImage] = useState([]);
  const { id } = useParams();

  const getAlbumDetails = async () => {
    try {
      const res = await axios.get(`https://saavn.dev/albums?id=${id}`);
      const { data } = res.data;
      setAlbum(data);
      setImage(getImg(data.image));
      setSongs(data.songs);
    } catch (error) {
      console.error("Error fetching album details:", error);
    }
  };

  const getImg = (image) => {
    return image?.[2]?.link;
  };

  useEffect(() => {
    const getAlbumDetails = async () => {
      try {
        const res = await axios.get(`https://saavn.dev/albums?id=${id}`);
        const { data } = res.data;
        setAlbum(data);
        setImage(getImg(data.image));
        setSongs(data.songs);
      } catch (error) {
        console.error("Error fetching album details:", error);
      }
    };
    getAlbumDetails();
  }, [id, setSongs]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 h-screen my-48 lg:my-0">
        <div className="text-center lg:text-left">
          <img
            src={image}
            alt={album.title}
            width={250}
            className="mx-auto mb-4 rounded-lg"
          />
          <div className="text-gray-600">
            <h1 className="text-xl font-semibold">{album.name}</h1>
            <p className="text-sm">
              by {album.primaryArtists}.{album.songCount} songs
            </p>
          </div>
        </div>
      </div>
      <Player />
    </>
  );
};

export default AlbumDetails;
