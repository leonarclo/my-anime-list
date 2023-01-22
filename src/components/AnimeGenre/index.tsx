import React, { useContext, useEffect } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";
import { Container } from "./style";

function AnimeGenre() {
  const {
    animeGenres,
    getAnimebyGenreId,
    setGenreSelected,
    setId,
    id,
    loading,
  } = useContext(AnimeContext);

  function handleClick(event) {
    const filter = animeGenres.filter(
      (item) => item.name === event.target.innerText
    );
    setId(filter[0].id);
    setGenreSelected(filter[0].name);
  }

  useEffect(() => {
    getAnimebyGenreId(id);
  }, [id]);

  return (
    !loading && (
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
