import React, { createContext, useState, useEffect } from "react";
import { data } from "../api/genres";

export const AnimeContext = createContext();

export const AnimeContextProvider = ({ children }) => {
  const [topAnime, setTopAnime] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [animeGenres, setAnimeGenres] = useState([]);
  const [animeByGenre, setAnimeByGenre] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(null);
  const [genreSelected, setGenreSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);

  async function getTopAnime() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await response.json();
    setTopAnime(data.data.slice(0, 5));
  }

  function getAnimeGenre() {
    setAnimeGenres(data);
  }

  async function getAnimebyGenreId(id) {
    let allAnimes = [];

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?genres=${id}&page=${currentPage}`
      );
      const data = await response.json();
      allAnimes.push(...data.data);
      setAnimeByGenre(allAnimes);
      setLastPage(data.pagination.last_visible_page);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAnimeGenre();
  }, []);

  useEffect(() => {
    getTopAnime();
  }, []);

  async function fetchAnime(query) {
    try {
      setLoading(true);
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
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimeContext.Provider
      value={{
        topAnime,
        setTopAnime,
        animeList,
        setAnimeList,
        fetchAnime,
        animeGenres,
        setAnimeGenres,
        animeByGenre,
        setAnimeByGenre,
        genreList,
        setGenreList,
        getAnimebyGenreId,
        genreSelected,
        id,
        setId,
        setGenreSelected,
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
