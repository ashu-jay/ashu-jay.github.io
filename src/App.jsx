import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Landing from "./pages/Landing";
import WebDev from "./pages/WebDev";
import GameDev from "./pages/GameDev";
import Misc from "./pages/Misc";

const RouteTitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/": "Home",
      "/web-development": "Web Development",
      "/game-development": "Game Development",
      "/other-stuff": "Miscellaneous",
    };

    const currentTitle = routeTitles[location.pathname] || "Ashwin Jayendra";
    document.title = currentTitle;
  }, [location]);

  return null;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.primary[50] }}>
        <Router>
          <RouteTitleManager />
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
