import React from "react";
import Layout from "./components/Layout";
import { AnimeContextProvider } from "./contexts/AnimeContext";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <AnimeContextProvider>
      <Layout />
      <GlobalStyles />
    </AnimeContextProvider>
  );
}

export default App;
