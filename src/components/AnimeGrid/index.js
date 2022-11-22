import { useContext } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";
import { Container, TitleRecommendations, AnimeData } from "./style";

function AnimeGrid() {
  const { animeList, animeRecommendations } = useContext(AnimeContext);

  return animeList.length > 0 ? (
    <Container>
      {animeList.map((item) => (
        <AnimeData key={item.mal_id}>
          <a href={item.url} target="_blank" rel="noreferrer">
            <div>
              <span>{item.rank}</span>
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
  ) : (
    <Container>
      <TitleRecommendations>
        Atualize a página para encontrar outros animes recomendados ou pesquise
        por um de sua preferência!
      </TitleRecommendations>
      {animeRecommendations.map((item) => (
        <AnimeData key={item.mal_id}>
          <a href={item.entry[0].url} target="_blank" rel="noreferrer">
            <div>
              <h3>{item.entry[0].title}</h3>
            </div>
            <img
              src={item.entry[0].images.jpg.image_url}
              alt={`Imagem do anime ${item.entry[0].title}`}
            />
          </a>
        </AnimeData>
      ))}
    </Container>
  );
}

export default AnimeGrid;
