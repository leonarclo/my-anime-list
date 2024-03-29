import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { data } from "../api/genres";
import { TTopAnimes, TAnimeList, TData } from "../types/AnimeTypes";

type AnimeContextProps = {
  children: ReactNode;
};

type TAnimeContext = {
  topAnime: TTopAnimes[];
  setTopAnime: Dispatch<SetStateAction<TTopAnimes[]>>;
  animeList: TAnimeList[];
  setAnimeList: Dispatch<SetStateAction<TAnimeList[]>>;
  animeGenres: TData[];
  setAnimeGenres: Dispatch<SetStateAction<TData[]>>;
  animeByGenre: TAnimeList[];
  setAnimeByGenre: Dispatch<SetStateAction<TAnimeList[]>>;
  genreSelected: string;
  setGenreSelected: Dispatch<SetStateAction<string>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  lastPage: number;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const AnimeContext = createContext<TAnimeContext>({} as TAnimeContext);

export const AnimeContextProvider = ({children,}: AnimeContextProps): JSX.Element => {
  const TOP_ANIME_API = `https://api.jikan.moe/v4/top/anime`;
  const ANIME_BY_GENRE_API = `https://api.jikan.moe/v4/anime`;

  const [topAnime, setTopAnime] = useState<TTopAnimes[]>([]);
  const [animeList, setAnimeList] = useState<TAnimeList[]>([]);
  const [animeGenres, setAnimeGenres] = useState<TData[]>([]);
  const [animeByGenre, setAnimeByGenre] = useState<TAnimeList[]>([]);
  const [genreSelected, setGenreSelected] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getTopAnime() {
      const response = await fetch(TOP_ANIME_API);
      const data = await response.json();
      setTopAnime(data.data.slice(0, 5));
    }
    getTopAnime();
  }, []);

  useEffect(() => {
    setAnimeGenres(data);
  }, []);
  async function getTopAnime() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await response.json();
    setTopAnime(data.data.slice(0, 5));
  }

  function getAnimeGenre() {
    setAnimeGenres(data);
  }

  useEffect(() => {
    async function getAnimebyGenreId() {
      try {
        setLoading(true);
        const response = await fetch(
          `${ANIME_BY_GENRE_API}?genres=${id}&page=${currentPage}`
        );
        const { data, pagination } = await response.json();
        setAnimeByGenre(data);
        setLastPage(pagination.last_visible_page);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getAnimebyGenreId();
  }, [currentPage, id]);

  useEffect(() => {
    getAnimeGenre();
    getTopAnime();
  }, []);

  return (
    <AnimeContext.Provider
      value={{
        topAnime,
        setTopAnime,
        animeList,
        setAnimeList,
        animeGenres,
        setAnimeGenres,
        animeByGenre,
        setAnimeByGenre,
        genreSelected,
        setGenreSelected,
        id,
        setId,
        currentPage,
        setCurrentPage,
        lastPage,
        loading,
        setLoading,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
