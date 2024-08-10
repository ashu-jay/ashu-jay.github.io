import { Link, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { amber, yellow } from "@mui/material/colors";
import Background from "../../components/Background";
import gba from "../../images/gba.jpg";
import gba_frog from "../../images/gba_frog.png";
import gba_robo from "../../images/gba_robo.png";
import gba_bubble_bobble from "../../images/gba_bubble_bobble.png";
import gba_acorn_king from "../../images/gba_acorn_king.png";
import Carousel from "../../components/carousel/Carousel";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const GBA = () => {
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
      title: "CS 2261",
      description:
        "During the Fall 2023 semester at Georgia Tech, I was enrolled in a class called CS 2261 - Media Device Architecture. The course was based on learning the different components of a computer (in this case, the GameBoy Advance), and how they all come together to work on display. What I particularly liked about this class was that we had to make games as assignments, while learning how pixels, sound, and controls come together. All games were made entirely in C, and I had a lot of fun making games in this class!",
      image: gba,
    },
    {
      title: "Frogger",
      description:
        "One of the early assignments for this class was to make Frogger, and at this point we had just learn about rendering pixels and controlling where those pixels appear - thus making it so that there's a player and they have to cross the obstacles to win. Compared to what we ended up making towards the end of the semester, this game was easy to implement.",
      image: gba_frog,
    },
    {
      title: "The Liberation",
      description:
        "Another game I made was called 'The Liberation', where a planet has been conquered by an emperor, and you as the player have to liberate it. This was a mini platformer game with shooting mechanics and a boss level (the emperor).",
      image: gba_robo,
    },
    {
      title: "Bubble Bobble",
      description:
        "Our last assignment was to recreate the famous game 'Bubble Bobble', with almost all mechanics and display to be as similar as possible to the original. We gained a lot of experience using spritesheets and tilemaps for this game, as well as implementing sounds in our games.",
      image: gba_bubble_bobble,
    },
    {
      title: "Acorn King",
      description: (
        <>
          As the final project for the class, I created a game called 'Acorn
          King', where a tiny squirrel has to climb up a humongous tree in order
          to defeat the Acorn King and claim the crown for itself. This game is
          a classic dodge-the-obstacles game, with a mid-game fight and an
          end-game boss battle. It's a lot of fun, be sure to check it out on
          desktop{" "}
          <Link
            href="https://www.ashwinjayendra.com/acorn-king/"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </Link>
          !
        </>
      ),
      image: gba_acorn_king,
    },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={amber}>
          {(isMobile || isMd) && (
            <Header
              handleNavClick={handleNavClick}
              side
              color={amber}
              secondary={yellow}
            />
          )}
          {!isMobile && !isMd && (
            <Stack width={"100%"} height={"70vh"} alignItems={"center"}>
              <CarouselHeader color={amber} handleNavClick={handleNavClick} />
              <Carousel color={amber} data={data} />
            </Stack>
          )}
          {(isMobile || isMd) && <Carousel color={amber} data={data} />}
        </Background>
      )}
    </AnimatePresence>
  );
};

export default GBA;
