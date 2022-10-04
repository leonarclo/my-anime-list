import { Container, SearchIcon } from "../SearchInput/style";

function SearchInput({ search, setSearch, handleSearch }) {
  return (
    <Container>
      <input
        type="search"
        placeholder="Procurar anime..."
        required
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>
        <SearchIcon />
      </button>
    </Container>
  );
}

export default SearchInput;
