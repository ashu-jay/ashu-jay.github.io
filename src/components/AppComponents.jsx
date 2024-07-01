import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
      "/game-development": "Game Development",
      "/other-stuff": "Miscellaneous",
    };

    const currentTitle = routeTitles[location.pathname] || "Ashwin Jayendra";
    document.title = currentTitle;
  }, [location]);

  return null;
};
