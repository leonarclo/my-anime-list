import React from "react";
import { AnimeData } from "./style";

function AnimeCard({ item }) {
  return (
    <>
      <AnimeData>
        <div>
          <span>{item.rank}</span>
          <h3>{item.titles[0].title}</h3>
        </div>
        <img
          src={item.images.jpg.image_url}
          alt={`Imagem do anime ${item.titles[0].title}`}
        />
        <p>
          {item.type}, {item.year} -- {`${item.episodes} eps`}
        </p>
        <p>{`Nota: ${item.score}`}</p>
      </AnimeData>
    </>
  );
}

export default AnimeCard;
