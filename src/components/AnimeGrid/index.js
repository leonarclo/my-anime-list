import { Container, TitleRecommendations } from "./style";
import { AnimeData } from "../AnimeCard/style";

function AnimeGrid({ animeList, animeRecommendations }) {
  return animeList && animeList.length > 0 ? (
    <Container>
      {animeList.map((item) => (
        <AnimeData key={item.mal_id}>
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
          <div>
            <h3>{item.entry[0].title}</h3>
          </div>
          <img
            src={item.entry[0].images.jpg.image_url}
            alt={`Imagem do anime ${item.entry[0].title}`}
          />
        </AnimeData>
      ))}
    </Container>
  );
}

export default AnimeGrid;
