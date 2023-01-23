import { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimeContext } from "../../contexts/AnimeContext";
import { Loading } from "../../styles/GlobalStyles";
import {
  Container,
  Content,
  AnimeData,
  Pagination,
  ButtonPages,
  ReturnButton,
} from "./style";

function AnimeByGenre() {
  const {
    animeByGenre,
    genreSelected,
    currentPage,
    setCurrentPage,
    lastPage,
    loading,
  } = useContext(AnimeContext);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const input = event.target as HTMLElement;
    if (input.innerText === "Prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (input.innerText === "Next" && currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return animeByGenre ? (
    <Container>
      <Content>
        <h1>
          Animes do gênero: <span>{genreSelected}</span>
        </h1>
        {loading ? (
          <Loading>
            <h4>...Carregando</h4>
          </Loading>
        ) : (
          animeByGenre.map((item) => (
            <AnimeData key={item.mal_id}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <div>
                  <h3>{item.title}</h3>
                </div>
                <img
                  src={item.images.jpg.image_url}
                  alt={`Imagem do anime ${item.title}`}
                />
                <p>
                  {item.type}, {item.year} - {`${item.episodes} eps`}
                </p>
                <p>{`Nota: ${item.score}`}</p>
              </a>
            </AnimeData>
          ))
        )}
      </Content>
      <Pagination>
        <ReturnButton>
          <Link to="/">
            <button onClick={() => setCurrentPage(1)}>Retornar</button>
          </Link>
        </ReturnButton>
        <ButtonPages>
          <button onClick={handleClick}>Prev</button>
          <span>{currentPage}</span>
          <button onClick={handleClick}>Next</button>
        </ButtonPages>
      </Pagination>
    </Container>
  ) : null;
}

export default AnimeByGenre;
