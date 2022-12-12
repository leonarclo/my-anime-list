import { useContext } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";
import { Container, AnimeData } from "./style";

function AnimeByGenre() {
  const { genreList, genreSelected } = useContext(AnimeContext);

  return (
    <Container>
      <h1>
        Animes do gênero: <span>{genreSelected}</span>
      </h1>
      {genreList.map((item) => (
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
  );
}

export default AnimeByGenre;
