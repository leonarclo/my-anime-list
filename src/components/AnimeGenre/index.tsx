import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimeContext } from "../../contexts/AnimeContext";
import { Container } from "./style";

function GenreList() {
  const { animeGenres, setGenreSelected, setId, setLoading, setCurrentPage } =
    useContext(AnimeContext);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    try {
      setLoading(true);
      const input = event.target as HTMLElement;
      const filter = animeGenres.filter(
        (item) => item.name === input.innerText
      );
      setId(filter[0].id);
      setGenreSelected(filter[0].name);
      setCurrentPage(1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <h2>Selecione um gênero</h2>
      <hr />
      <ul>
        {animeGenres.map((item) => (
          <li key={item.id} onClick={handleClick}>
            <Link to="/genre">{item.name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default GenreList;
