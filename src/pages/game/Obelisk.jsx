import { Link, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { green, lime } from "@mui/material/colors";
import Background from "../../components/Background";
import obelisk_gameplay from "../../images/obelisk_gameplay.png";
import obelisk_logo from "../../images/obelisk_logo.png";
import Carousel from "../../components/carousel/Carousel";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const Obelisk = () => {
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
      title: "Project Obelisk",
      description: (
        <>
          As part of the VGDev club at Georgia Tech, I helped create a video
          game called Project Obelisk - a 3D isometric shooter, where the player
          must place down weapons in their inventory into a room before being
          able to enter and use those weapons. I also won an award for my
          contributions to the game, and I'm proud to be a part of its creation.
          To look at other projects from VGDev,{" "}
          <Link
            href="https://www.gtvgdev.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            click here!
          </Link>
        </>
      ),
      image: obelisk_logo,
    },
    {
      title: "What I did",
      description: (
        <>
          As the design lead, I worked closely with game lead and the team to
          create and balance game levels and mechanics in the game. I was also
          in charge of a few tasks involving the on-screen UI. I also
          implemented one weapon in the game, along with other improvements to
          gameplay and play style. Check it out{" "}
          <Link
            href="https://www.gtvgdev.com/games-archive/project-obelisk"
            target="_blank"
            rel="noreferrer noopener"
          >
            here!
          </Link>
        </>
      ),
      image: obelisk_gameplay,
    },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={green}>
          {(isMobile || isMd) && (
            <Header
              handleNavClick={handleNavClick}
              side
              color={green}
              secondary={lime}
            />
          )}
          {!isMobile && !isMd && (
            <Stack width={"100%"} height={"70vh"} alignItems={"center"}>
              <CarouselHeader color={green} handleNavClick={handleNavClick} />
              <Carousel color={green} data={data} />
            </Stack>
          )}
          {(isMobile || isMd) && <Carousel color={green} data={data} />}
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Obelisk;
