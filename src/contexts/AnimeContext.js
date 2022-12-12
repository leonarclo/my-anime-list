import React, { createContext, useState, useEffect } from "react";
import { data } from "../api/genres";

export const AnimeContext = createContext();

export const AnimeContextProvider = ({ children }) => {
  const [topAnime, setTopAnime] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [animeRecommendations, setAnimeRecommendations] = useState([]);
  const [animeGenres, setAnimeGenres] = useState([]);
  const [animeByGenre, setAnimeByGenre] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [genreSelected, setGenreSelected] = useState([]);

  async function getTopAnime() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await response.json();
    setTopAnime(data.data.slice(0, 5));
  }

  function getAnimeGenre() {
    setAnimeGenres(data);
  }

  async function getAnimeByGenre() {
    const response = await fetch(`https://api.jikan.moe/v4/anime?genres`);

    const data = await response.json();
    const genres = data.data
      .map((item) => item)
      .filter((item) => item.genres[0].name === animeByGenre);
    setGenreList(genres);
  }

  async function getAnimebyGenreId(id) {
    const response = await fetch(`https://api.jikan.moe/v4/anime?genres=${id}`);

    const data = await response.json();
    setGenreList(data.data);
  }

  useEffect(() => {
    getAnimeByGenre();
  }, []);

  useEffect(() => {
    getAnimeGenre();
  }, []);

  useEffect(() => {
    getTopAnime();
  }, []);

  async function fetchAnime(query) {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&limit=20`
    );
    const data = await response.json();
    if (data.data.length > 0) {
      setAnimeList(data.data);
      console.log(data.data);
    } else if (data.data.length === 0) {
      alert("Nada encontrado! Por favor, tente outro nome.");
    }
  }

  return (
    <AnimeContext.Provider
      value={{
        topAnime,
        setTopAnime,
        animeList,
        setAnimeList,
        animeRecommendations,
        setAnimeRecommendations,
        fetchAnime,
        animeGenres,
        setAnimeGenres,
        animeByGenre,
        setAnimeByGenre,
        genreList,
        setGenreList,
        getAnimebyGenreId,
        genreSelected,
        setGenreSelected,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
