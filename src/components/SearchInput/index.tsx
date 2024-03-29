import { useNavigate } from "react-router-dom";
import { Container, SearchIcon } from "./style";

type SearchInputProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  fetchAnime: (search: string) => Promise<void>;
};

function SearchInput({ search, setSearch, fetchAnime }: SearchInputProps) {
  const navigate = useNavigate();

  function handleSearch(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    navigate("/search");
    fetchAnime(search);
    setSearch("");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <Container>
      <input
        type="search"
        placeholder="Procurar anime..."
        required
        value={search}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>
        <SearchIcon />
      </button>
    </Container>
  );
}

export default SearchInput;
