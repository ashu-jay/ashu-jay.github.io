import { Link, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { lightGreen, lime } from "@mui/material/colors";
import Background from "../../components/Background";
import book_genius from "../../images/book_genius.jpg";
import Carousel from "../../components/carousel/Carousel";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const BookGenius = () => {
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
      title: "The Book Genius",
      description: (
        <>
          The Book Genius was a venture I started as an attempt to save paper.
          It's a website made with Wix that connects people to buy and sell
          second-hand books. This project helped me understand content
          management and user experience on an e-commerce-like website. Check
          out the website{" "}
          <Link
            href="https://ashwinjayendra.wixsite.com/the-book-genius"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </Link>{" "}
          !
        </>
      ),
      image: book_genius,
    },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={lightGreen}>
          {(isMobile || isMd) && (
            <Header
              handleNavClick={handleNavClick}
              side
              color={lightGreen}
              secondary={lime}
            />
          )}
          {!isMobile && !isMd && (
            <Stack width={"100%"} height={"70vh"} alignItems={"center"}>
              <CarouselHeader
                color={lightGreen}
                handleNavClick={handleNavClick}
              />
              <Carousel color={lightGreen} data={data} />
            </Stack>
          )}
          {(isMobile || isMd) && <Carousel color={lightGreen} data={data} />}
        </Background>
      )}
    </AnimatePresence>
  );
};

export default BookGenius;
