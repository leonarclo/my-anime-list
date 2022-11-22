import React from "react";
import { Container, MainContent } from "./style";
import Header from "../Header";
import Aside from "../Aside";
import AnimeGrid from "../AnimeGrid";

function Layout() {
  return (
    <Container>
      <Header />
      <MainContent>
        <Aside />
        <AnimeGrid />
      </MainContent>
    </Container>
  );
}

export default Layout;
