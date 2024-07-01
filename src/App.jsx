import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Landing from "./pages/Landing";
import WebDev from "./pages/WebDev";
import GameDev from "./pages/GameDev";
import Misc from "./pages/Misc";
import { RouteTitleManager, ScrollToTop } from "./components/AppComponents";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.primary[50] }}>
        <Router>
          <RouteTitleManager />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/web-development" element={<WebDev />} />
            <Route path="/game-development" element={<GameDev />} />
            <Route path="/other-stuff" element={<Misc />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
