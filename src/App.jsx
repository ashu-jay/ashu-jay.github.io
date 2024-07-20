import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Landing from "./pages/Landing";
import {
  GameDevRoutes,
  MiscRoutes,
  RouteTitleManager,
  ScrollToTop,
  WebDevRoutes,
} from "./components/AppComponents";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: theme.palette.background.main,
          minHeight: "100vh",
        }}
      >
        <Router>
          <RouteTitleManager />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/web-development/*" element={<WebDevRoutes />} />
            <Route path="/game-development/*" element={<GameDevRoutes />} />
            <Route path="/other-stuff/*" element={<MiscRoutes />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
