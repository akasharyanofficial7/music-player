import React from "react";
import { Link } from "react-router-dom";

const AlbumItem = ({ name, artists, id, image }) => {
  return (
    <Link
      to={`/albums/${id}`}
      className="lg:w-[160px] lg:max-h-[220px]   w-[100px] max-h-[130px] overflow-y-clip flex flex-col justify-center items-center gap-3 rounded-lg"
    >
      <img src={image[2].link} alt="Album Cover" className="rounded-lg" />
      <div className="text-xs w-full flex flex-col justify-center items-center">
        <span className="  font-semibold overflow-x-clip">
          {name.slice(0, 15)}
        </span>
        <p className="  font-thin">
          {artists.map((artist) => artist.name).join(", ").length > 24
            ? artists
                .map((artist) => artist.name)
                .join(", ")
                .slice(0, 24) + "..."
            : artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default AlbumItem;
