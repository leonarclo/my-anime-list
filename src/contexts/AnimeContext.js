import React, { createContext, useState, useEffect } from "react";

export const AnimeContext = createContext();

export const AnimeContextProvider = ({ children }) => {
  const [topAnime, setTopAnime] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [animeRecommendations, setAnimeRecommendations] = useState([]);

  async function getTopAnime() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await response.json();
    setTopAnime(data.data.slice(0, 5));
  }

  async function getAnimeRecommendations() {
    const response = await fetch(
      `https://api.jikan.moe/v4/recommendations/anime`
    );
    const data = await response.json();

    let min = Math.floor(Math.random() * 60);
    let max = min + 32;
    setAnimeRecommendations(data.data.slice(min, max));
  }

  useEffect(() => {
    getTopAnime();
  }, [topAnime]);

  useEffect(() => {
    getAnimeRecommendations();
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
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
