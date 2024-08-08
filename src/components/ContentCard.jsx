import { ArrowForward } from "@mui/icons-material";
import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ContentCard = ({ title, color, shadow, onClick }) => {
  const [expand, setExpand] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [translateValues, setTranslateValues] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    if (isCentered && cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const translateX =
        viewportWidth / 2 - (cardRect.left + cardRect.width / 2);
      const translateY =
        viewportHeight / 2 - (cardRect.top + cardRect.height / 2);

      setTranslateValues({ x: translateX, y: translateY });
    }
  }, [isCentered]);

  const handleClick = () => {
    setIsCentered(true);
    setTimeout(() => {
      setExpand(true);
      setTimeout(() => {
        onClick();
      }, 700);
    }, 1000);
  };

  return (
    <Card
      component={motion.div}
      ref={cardRef}
      animate={{
        x: isCentered && translateValues.x,
        y: isCentered && translateValues.y,
        zIndex: isCentered && 100,
        boxShadow: expand
          ? `0px 0px 0px ${
              window.innerHeight > window.innerWidth
                ? window.innerHeight
                : window.innerWidth
            }px ${color}`
          : `0px 0px 30px ${isMobile ? 5 : 20}px ${shadow}`,
      }}
      transition={{ duration: expand ? 0.1 : 1, ease: "easeInOut" }}
      variant="outlined"
      sx={{
        width: "20em",
        height: "18em",
        padding: 2,
        backgroundColor: `${color}`,
        boxShadow: `0px 0px 30px ${isMobile ? 5 : 20}px ${shadow}`,
        borderWidth: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={handleClick}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Typography variant={"h4"} color={"white"} textAlign={"center"}>
          {title}
        </Typography>
        <ArrowForward sx={{ fontSize: "60px", color: "white" }} />
      </CardContent>
    </Card>
  );
};

export default ContentCard;
