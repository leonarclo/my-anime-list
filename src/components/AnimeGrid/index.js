import { useContext } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";
import AnimeByGenre from "../AnimeByGenre";
import AnimeGenre from "../AnimeGenre";

function AnimeGrid() {
  const { genreList } = useContext(AnimeContext);

  return <>{genreList.length < 1 ? <AnimeGenre /> : <AnimeByGenre />}</>;
}

export default AnimeGrid;
