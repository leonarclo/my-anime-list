import { Container, MainContent } from "./style";
import Header from "../Header";
import Aside from "../Aside";
import Footer from "../Footer";
import GenreList from "../AnimeGenre";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeByGenre from "../AnimeByGenre";
import AnimeSearch from "../AnimeSearch";

function Layout() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <MainContent>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Aside />
                  <GenreList />
                </>
              }
            />
            <Route
              path="genre"
              element={
                <>
                  <Aside />
                  <AnimeByGenre />
                </>
              }
            />
            <Route
              path="search"
              element={
                <>
                  <Aside />
                  <AnimeSearch />
                </>
              }
            />
          </Routes>
        </MainContent>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
