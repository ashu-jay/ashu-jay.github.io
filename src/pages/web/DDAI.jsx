import { Link, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { brown, orange } from "@mui/material/colors";
import Background from "../../components/Background";
import dd_home from "../../images/dd_home.png";
import dd_play from "../../images/dd_play.png";
import dd_win from "../../images/dd_win.png";
import Carousel from "../../components/carousel/Carousel";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const DDAI = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const handleNavClick = (url) => {
    if (url !== location.pathname) {
      setIsExiting(true);

      setTimeout(() => {
        navigate(url);
      }, 300);
    }
  };

  const data = [
    {
      title: "Dungeons and Dragons AI",
      description:
        "As part of the Web Development Club at Georgia Tech, I helped create a web-based game called Dungeons and Dragons AI. The idea was simple - you and your friends play an online representation of the board game, but the story was created by ChatGPT. This project was the first time I used React, as well as my first time fetching data from APIs (OpenAI in this case) through JavaScript.",
      image: dd_home,
    },
    {
      title: "The Back-end",
      description:
        "My tasks for the back-end aspect of this project included making functions for sending prompts to ChatGPT and retrieving answers from it. Considering I was more inclined to the visuals of the game, this was a good experience for me to learn more about data handling and storage.",
      image: dd_play,
    },
    {
      title: "The Front-end",
      description: (
        <>
          For the front-end, a teammate and I mostly worked on the main page for
          the gameplay, as well as the ending win/lose screens. We used{" "}
          <Link
            href="https://v2.chakra-ui.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Chakra UI
          </Link>{" "}
          to align and display different components for the game.
        </>
      ),
      image: dd_win,
    },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={brown}>
          {(isMobile || isMd) && (
            <Header
              handleNavClick={handleNavClick}
              side
              color={brown}
              secondary={orange}
            />
          )}
          {!isMobile && !isMd && (
            <Stack width={"100%"} height={"70vh"} alignItems={"center"}>
              <CarouselHeader
                color={brown}
                handleNavClick={handleNavClick}
                light
              />
              <Carousel color={brown} data={data} />
            </Stack>
          )}
          {(isMobile || isMd) && <Carousel color={brown} data={data} />}
        </Background>
      )}
    </AnimatePresence>
  );
};

export default DDAI;
