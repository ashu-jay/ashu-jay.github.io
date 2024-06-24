import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.primary[50] }}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
