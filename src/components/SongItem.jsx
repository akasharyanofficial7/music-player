import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const SongItem = ({
  name,
  image,
  duration,
  downloadUrl,
  id,
  primaryArtists,
}) => {
  const { playMusic } = useContext(MusicContext);

  return (
    <div className="lg:w-[160px] lg:max-h-[220px]   py-8 pb-6 w-[100px] max-h-[155px] overflow-y-clip flex flex-col justify-center items-center gap-4  lg:gap-0 rounded-lg">
      <img
        src={image[2].link}
        alt=""
        className="rounded-lg  mb-2 cursor-pointer"
        onClick={() =>
          playMusic(downloadUrl, name, duration, image, id, primaryArtists)
        }
      />
      <div className="text-[13px] w-full flex flex-col justify-center items-center">
        <span className="font-semibold overflow-x-clip">
          {name.slice(0, 8) + "..."}
        </span>
        <span className="font-semibold overflow-x-clip text-teal-600">
          {primaryArtists.slice(0, 15) + "..."}
        </span>
      </div>
    </div>
  );
};

export default SongItem;
