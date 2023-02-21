import React, { useContext } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";
import { Loading } from "../../styles/GlobalStyles";
import { Container, AnimeData } from "./style";

function AnimeSearch() {
  const { animeList, loading } = useContext(AnimeContext);

  return loading ? (
    <Loading>
      <h4>Carregando...</h4>
    </Loading>
  ) : (
    <Container>
      {animeList.map((item) => (
        <AnimeData key={item.mal_id}>
          <a href={item.url} target="_blank" rel="noreferrer">
            <div>
              <h3>{item.title}</h3>
            </div>
            <img
              src={item.images.jpg.image_url}
              alt={`Imagem do anime ${item.title}`}
            />
            <p>
              {item.type}, {item.year} - {`${item.episodes} eps`}
            </p>
            <p>{`Nota: ${item.score}`}</p>
          </a>
        </AnimeData>
      ))}
    </Container>
  );
}

export default AnimeSearch;
