import React, { useContext } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";
import { Container } from "./style";

function AnimeGenre() {
  const { animeGenres, getAnimebyGenreId, setGenreSelected } =
    useContext(AnimeContext);

  function handleClick(event) {
    const filter = animeGenres.filter(
      (item) => item.name === event.target.innerText
    );
    getAnimebyGenreId(filter[0].id);
    setGenreSelected(filter[0].name);
  }

  return (
    animeGenres && (
      <Container>
        <h2>Selecione um gênero</h2>
        <hr />
        <ul>
          {animeGenres.map((item) => (
            <li key={item.id} onClick={handleClick}>
              {item.name}
            </li>
          ))}
        </ul>
      </Container>
    )
  );
}

export default AnimeGenre;
