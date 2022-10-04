import { Container, Content, Title } from "./style";
import SearchInput from "../SearchInput/index";
import { useState } from "react";

const Header = ({ fetchAnime }) => {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    fetchAnime(search);
    setSearch("");
    console.log(search);
  }

  return (
    <Container>
      <Content>
        <Title>My Anime App</Title>
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
