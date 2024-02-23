import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import MusicContext from "../context/MusicContext";

import Player from "../components/Player";
import SongList from "../components/SongList";

const AlbumDetails = () => {
  const { setSongs } = useContext(MusicContext);
  const [album, setAlbum] = useState([]);
  const [image, setImage] = useState([]);

  const { id } = useParams();

  const getAlbumDetails = async () => {
    const res = await axios.get(`https://saavn.dev/albums?id=${id}`);

    const { data } = await res.data;
    console.log(data);
    setAlbum(data);
    setSongs(data.songs);
    setImage(getImg(data.image));
  };

  const getImg = (image) => (image = image[2].link);

  useEffect(() => {
    getAlbumDetails();
  }, []);

  return (
    <>
      <div className="mt-24  lg:mt-0">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 h-screen my-16 lg:my-0 mx-2 lg:mx-auto">
          <div>
            <img
              src={image}
              alt={album.title}
              width={250}
              className="mx-auto mb-4 rounded-lg"
            />
            <div className="w-[250px]  ">
              <h1>{album.name}</h1>
              <p>
                by {album.primaryArtists} . {album.songCount} songs
              </p>
            </div>
          </div>

          <div>
            {album.songs?.map((song) => (
              <SongList key={song.id} {...song} />
            ))}
          </div>
        </div>

        <Player />
      </div>
    </>
  );
};

export default AlbumDetails;
