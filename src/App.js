import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Explore from "./pages/Explore";
import SubscribeChannel from "./pages/SubscribeChannel";
import Popular from "./pages/Popular";
import Music from "./pages/Music";
import Game from "./pages/Game";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bgMenu};
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Router>
          <Header darkMode={darkMode} setDarkMode = {setDarkMode}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />

            <Route path="/video" element={<Video />} />
            <Route path="/subscribe" element={<SubscribeChannel />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/music" element={<Music />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
