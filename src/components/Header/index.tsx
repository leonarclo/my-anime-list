import { Container, Content, Title } from "./style";
import SearchInput from "../SearchInput/index";
import { useContext, useState } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";

const Header = () => {
  const { setCurrentPage, setAnimeList, setLoading } = useContext(AnimeContext);
  const [search, setSearch] = useState<string>("");

  async function fetchAnime(query: string) {
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

  function reload() {
    window.location.reload();
    setCurrentPage(1);
  }

  return (
    <Container>
      <Content>
        <Title onClick={reload}>My Anime App</Title>
        <SearchInput
          search={search}
          setSearch={setSearch}
          fetchAnime={fetchAnime}
        />
      </Content>
    </Container>
  );
};

export default Header;
