import { useContext } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";
import { Loading } from "../../styles/GlobalStyles";
import AnimeByGenre from "../AnimeByGenre";
import AnimeGenre from "../AnimeGenre";
import AnimeSearch from "../AnimeSearch";

function AnimeGrid() {
  const { animeByGenre, animeList, loading } = useContext(AnimeContext);

  return (
    <>
      {animeList.length < 1 && animeByGenre.length < 1 ? <AnimeGenre /> : null}
      {animeList.length < 1 && animeByGenre.length > 0 ? (
        <AnimeByGenre />
      ) : (
        <AnimeSearch />
      )}
    </>
  );
}

export default AnimeGrid;
