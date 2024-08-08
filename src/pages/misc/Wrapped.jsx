import { Link, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cyan, teal } from "@mui/material/colors";
import Background from "../../components/Background";
import wrapped from "../../videos/wrapped.mp4";
import Carousel from "../../components/carousel/Carousel";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const Wrapped = () => {
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
      title: "Wrapped",
      description: (
        <>
          In my CS 2340 class at Georgia Tech, we were required to replicate a{" "}
          <Link
            href="https://ziweitang05.wixsite.com/project2-cs2340"
            target="_blank"
            rel="noreferrer noopener"
          >
            Spotify Wrapped
          </Link>{" "}
          page for our users using Android Studio. The app allows users to
          create an account and link their personal Spotify accounts to it. With
          their Spotify data, it app gives users the ability to create a joint
          Spotify Wrapped playlist, hear clips from the songs in the Spotify
          Wrapped playlist, play a game to guess your most listened to musician,
          and recommend new artists based off of music tastes. I was in charge
          of fetching data from the Spotify API, as well as implementing the
          guessing game.{" "}
        </>
      ),
      video: wrapped,
    },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={teal}>
          {(isMobile || isMd) && (
            <Header
              handleNavClick={handleNavClick}
              side
              color={teal}
              secondary={cyan}
            />
          )}
          {!isMobile && !isMd && (
            <Stack width={"100%"} height={"70vh"} alignItems={"center"}>
              <CarouselHeader color={teal} handleNavClick={handleNavClick} />
              <Carousel color={teal} data={data} />
            </Stack>
          )}
          {(isMobile || isMd) && <Carousel color={teal} data={data} />}
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Wrapped;
