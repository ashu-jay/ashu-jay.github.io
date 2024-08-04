import { Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import Background from "../../components/Background";
import aristotle from "../../images/aristotle.png";
import arusto_banner from "../../images/arusto_banner.jpeg";
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
      title: "Arusto",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor pellentesque luctus. Nulla sodales at massa ut laoreet. Duis ut ultrices neque. Sed sed sapien ut massa maximus aliquam. Aliquam ut tortor non dolor vehicula ullamcorper tincidunt molestie mi. Quisque ut augue hendrerit, viverra augue sed, mollis mauris. Fusce vitae nibh eleifend, elementum massa id, rutrum ante. Praesent eget lacus est. Nullam nec auctor eros. Aliquam molestie tincidunt leo nec ultricies. Sed tempor blandit ante, vitae auctor neque dapibus et. Nunc vel egestas est, sed congue massa.",
      image: aristotle,
    },
    {
      title: "Maybe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor pellentesque luctus. Nulla sodales at massa ut laoreet. Duis ut ultrices neque. Sed sed sapien ut massa maximus aliquam. Aliquam ut tortor non dolor vehicula ullamcorper tincidunt molestie mi. Quisque ut augue hendrerit, viverra augue sed, mollis mauris. Fusce vitae nibh eleifend, elementum massa id, rutrum ante. Praesent eget lacus est. Nullam nec auctor eros. Aliquam molestie tincidunt leo nec ultricies. Sed tempor blandit ante, vitae auctor neque dapibus et. Nunc vel egestas est, sed congue massa.",
      image: arusto_banner,
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
