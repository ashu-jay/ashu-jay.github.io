import { Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";
import CarouselButton from "./CarouselButton";
import PaperCard from "./PaperCard";

const Carousel = ({ color, data }) => {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const paginate = (newDirection) => {
    setCurrentSlide([currentSlide + newDirection, newDirection]);
  };

  return (
    <Stack
      py={isMobile || isMd ? 5 : 0}
      direction={isMobile || isMd ? "column" : "row"}
      gap={isMobile || isMd ? 10 : 2}
      px={isMobile ? 1 : 0}
      width={isMobile ? "100%" : "80%"}
      height={isMobile || isMd ? "auto" : "60vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {!isMobile && !isMd && (
        <CarouselButton
          pos={"left"}
          currentSlide={currentSlide}
          dataLength={data.length}
          paginate={paginate}
        />
      )}
      {(isMobile || isMd) &&
        data.map((item, index) => {
          return (
            <PaperCard
              key={item.title}
              data={item}
              currentSlide={currentSlide}
              direction={direction}
              slideVariants={slideVariants}
              color={color}
            />
          );
        })}
      {!isMd && !isMobile && (
        <PaperCard
          data={data[currentSlide]}
          currentSlide={currentSlide}
          direction={direction}
          slideVariants={slideVariants}
          color={color}
        />
      )}
      {!isMobile && !isMd && (
        <CarouselButton
          pos={"right"}
          currentSlide={currentSlide}
          dataLength={data.length}
          paginate={paginate}
        />
      )}
    </Stack>
  );
};

export default Carousel;
