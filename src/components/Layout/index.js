import React from "react";
import { Container, MainContent } from "./style";
import Header from "../Header";
import Aside from "../Aside";
import AnimeGrid from "../AnimeGrid";
import Footer from "../Footer";

function Layout() {
  return (
    <>
      <Container>
        <Header />
        <MainContent>
          <Aside />
          <AnimeGrid />
        </MainContent>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
