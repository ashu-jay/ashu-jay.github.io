import { Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { brown, orange } from "@mui/material/colors";
import Background from "../../components/Background";
import aristotle from "../../images/aristotle.png";
import arusto_banner from "../../images/arusto_banner.jpeg";
import Carousel from "../../components/carousel/Carousel";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const DDAI = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const handleNavClick = (url) => {
    if (url !== "/web-development/d-and-d-ai") {
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
