import { Container, Content, Title } from "./style";
import SearchInput from "../SearchInput/index";
import { useContext, useState } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";

const Header = () => {
  const { fetchAnime, setCurrentPage } = useContext(AnimeContext);
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    fetchAnime(search);
    setSearch("");
  }

  function reload() {
    window.location.reload(false);
    setCurrentPage(1);
  }

  return (
    <Container>
      <Content>
        <Title onClick={reload}>My Anime App</Title>
        <SearchInput
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Content>
    </Container>
  );
};

export default Header;
