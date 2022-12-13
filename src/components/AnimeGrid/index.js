import { useContext } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";
import AnimeByGenre from "../AnimeByGenre";
import AnimeGenre from "../AnimeGenre";
import AnimeSearch from "../AnimeSearch";

function AnimeGrid() {
  const { genreList, animeList } = useContext(AnimeContext);

  return (
    <>
      {animeList.length < 1 && genreList.length < 1 ? <AnimeGenre /> : null}
      {animeList.length < 1 && genreList.length > 0 ? (
        <AnimeByGenre />
      ) : (
        <AnimeSearch />
      )}
    </>
  );
}

export default AnimeGrid;
