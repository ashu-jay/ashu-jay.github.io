import { Link, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { pink, red } from "@mui/material/colors";
import Background from "../../components/Background";
import blog from "../../images/blog.png";
import Carousel from "../../components/carousel/Carousel";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const Blog = () => {
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
      title: "Blog Posts",
      description: (
        <>
          During the COVID-19 pandemic, I started a blog and wrote about the
          most random thoughts that came to my mind. I even wrote some stories
          about my life - if you'd like to check it out, click{" "}
          <Link
            href="https://misterrandomo.wordpress.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </Link>
          !
        </>
      ),
      image: blog,
    },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={red}>
          {(isMobile || isMd) && (
            <Header
              handleNavClick={handleNavClick}
              side
              color={red}
              secondary={pink}
            />
          )}
          {!isMobile && !isMd && (
            <Stack width={"100%"} height={"70vh"} alignItems={"center"}>
              <CarouselHeader color={red} handleNavClick={handleNavClick} />
              <Carousel color={red} data={data} />
            </Stack>
          )}
          {(isMobile || isMd) && <Carousel color={red} data={data} />}
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Blog;
