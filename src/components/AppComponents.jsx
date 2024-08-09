import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import WebDev from "../pages/web/WebDev";
import Arusto from "../pages/web/Arusto";
import DDAI from "../pages/web/DDAI";
import GameDev from "../pages/game/GameDev";
import Obelisk from "../pages/game/Obelisk";
import BetterPick from "../pages/game/BetterPick";
import Misc from "../pages/misc/Misc";
import Wrapped from "../pages/misc/Wrapped";
import SpaceMadness from "../pages/game/SpaceMadness";
import BookGenius from "../pages/misc/BookGenius";
import Blog from "../pages/misc/Blog";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const RouteTitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/": "Home",
      "/web-development": "Web Development",
      "/web-development/arusto-ai": "Arusto AI",
      "/web-development/d-and-d-ai": "Dungeons and Dragons AI",
      "/game-development": "Game Development",
      "/game-development/project-obelisk": "Project Obelisk",
      "/game-development/the-better-pick": "The Better Pick",
      "/game-development/space-madness": "Space Madness",
      "/other-stuff": "Miscellaneous",
      "/other-stuff/wrapped": "Wrapped",
      "/other-stuff/the-book-genius": "The Book Genius",
      "/other-stuff/blog": "Blog",
    };

    const currentTitle = routeTitles[location.pathname] || "Ashwin Jayendra";
    document.title = currentTitle;
  }, [location]);

  return null;
};

export const WebDevRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebDev />} />
      <Route path="/arusto-ai" element={<Arusto />} />
      <Route path="/d-and-d-ai" element={<DDAI />} />
    </Routes>
  );
};

export const GameDevRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GameDev />} />
      <Route path="/project-obelisk" element={<Obelisk />} />
      <Route path="/the-better-pick" element={<BetterPick />} />
      <Route path="/space-madness" element={<SpaceMadness />} />
    </Routes>
  );
};

export const MiscRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Misc />} />
      <Route path="/wrapped" element={<Wrapped />} />
      <Route path="/the-book-genius" element={<BookGenius />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};
