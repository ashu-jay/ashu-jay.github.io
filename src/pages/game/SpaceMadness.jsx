import { Link, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { pink, purple } from "@mui/material/colors";
import Background from "../../components/Background";
import space_madness_gameplay from "../../images/space_madness_gameplay.jpeg";
import Carousel from "../../components/carousel/Carousel";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const SpaceMadness = () => {
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
      title: "Space Madness",
      description: (
        <>
          My interest in game development bore fruit through this first game I
          made with Unity. It is an endless runner-type game in space with an
          objective to achieve a high score. You can also buy cool rocket
          costumes with coins in the game shop! Check it out{" "}
          <Link
            href="https://ashujay.itch.io/space-madness"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </Link>
          !
        </>
      ),
      image: space_madness_gameplay,
    },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={purple}>
          {(isMobile || isMd) && (
            <Header
              handleNavClick={handleNavClick}
              side
              color={purple}
              secondary={pink}
            />
          )}
          {!isMobile && !isMd && (
            <Stack width={"100%"} height={"70vh"} alignItems={"center"}>
              <CarouselHeader
                color={purple}
                handleNavClick={handleNavClick}
                light
              />
              <Carousel color={purple} data={data} />
            </Stack>
          )}
          {(isMobile || isMd) && <Carousel color={purple} data={data} />}
        </Background>
      )}
    </AnimatePresence>
  );
};

export default SpaceMadness;
