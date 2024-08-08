import { Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import Background from "../../components/Background";
import better_pick from "../../images/better_pick.jpg";
import Carousel from "../../components/carousel/Carousel";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const black = {
  50: "#fafafa",
  100: "#e0e0e0",
  200: "#a0a0a0",
  300: "#434343",
  400: "#262626",
  500: "#212121",
  600: "#101010",
};

const BetterPick = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const handleNavClick = (url) => {
    if (url !== "/game-development/the-better-pick") {
      setIsExiting(true);

      setTimeout(() => {
        navigate(url);
      }, 300);
    }
  };

  const data = [
    {
      title: "The Better Pick",
      description:
        "This game is an endless puzzle game which tests your reflexes by enhancing your mathematical ability. It was the second game I'd ever created and massively improved my skills in game development. I also got to feature my own music/beats in the game, which was something I was very new to!",
      image: better_pick,
    },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={black}>
          {(isMobile || isMd) && (
            <Header
              handleNavClick={handleNavClick}
              side
              color={black}
              secondary={grey}
            />
          )}
          {!isMobile && !isMd && (
            <Stack width={"100%"} height={"70vh"} alignItems={"center"}>
              <CarouselHeader
                color={black}
                handleNavClick={handleNavClick}
                light
              />
              <Carousel color={black} data={data} />
            </Stack>
          )}
          {(isMobile || isMd) && <Carousel color={black} data={data} />}
        </Background>
      )}
    </AnimatePresence>
  );
};

export default BetterPick;
