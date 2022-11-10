import { Container, TopAnime } from "./style.js";

function Aside({ topAnime }) {
  return (
    <Container>
      <h2>Top animes</h2>
      <hr />
      {topAnime.map((item) => (
        <a href={item.url} target="_blank" rel="noreferrer">
          <TopAnime key={item.mal_id}>
            <span>{item.rank}</span>
            <img
              src={item.images.jpg.image_url}
              alt={`Imagem do anime ${item.titles[0].title}`}
            />
            <div>
              <h3>{item.titles[0].title}</h3>
              <p>
                {item.type}, {item.year} -- {`${item.episodes} eps`}
              </p>
              <p>{`Nota: ${item.score}`}</p>
            </div>
          </TopAnime>
        </a>
      ))}
    </Container>
  );
}

export default Aside;
