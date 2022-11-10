import React, { useEffect, useState } from "react";
import AnimeGrid from "./components/AnimeGrid";
import Aside from "./components/Aside";
import Header from "./components/Header";
import { Container, MainContent } from "./AppStyle";

function App() {
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
    console.log(topAnime);
  }, [topAnime]);

  useEffect(() => {
    getAnimeRecommendations();
    console.log(animeRecommendations);
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
    <Container>
      <Header fetchAnime={fetchAnime} />
      <MainContent>
        <Aside topAnime={topAnime} />
        <AnimeGrid
          animeList={animeList}
          animeRecommendations={animeRecommendations}
        />
      </MainContent>
    </Container>
  );
}

export default App;
