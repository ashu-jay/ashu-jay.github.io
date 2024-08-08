import { Typography, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ContentCard from "../../components/ContentCard";
import { green, grey, purple } from "@mui/material/colors";

const GameDev = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));

  const padding = isMobile ? 2 : isMd ? "10%" : isLg ? "15%" : "25%";

  const handleNavClick = (url) => {
    if (url !== location.pathname) {
      setIsExiting(true);

      setTimeout(() => {
        navigate(url);
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Header handleNavClick={handleNavClick} />
          <Stack
            direction={"column"}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
            pt={isMobile || isMd ? 5 : 25}
            pb={5}
            px={padding}
          >
            <Typography variant="h2">Game Dev</Typography>

            <Typography variant="h5">
              Like many, I had an interest in playing video games - specifically
              mobile games. But what really irked my mind was how studios made
              those games; how did they figure out the mechanics, the character
              design, the UI, and other things. With that interest, I made two
              mobile games using the Unity Editor, and my passion for developing
              games only grew. I joined the VGDev club at Georgia Tech and
              helped create an amazing PC game as well. I hope to continue
              making games as a hobby, and maybe even publish a game in the
              future.
            </Typography>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            gap={isMobile ? 5 : 15}
            justifyContent={"center"}
            alignItems={"center"}
            py={5}
            px={2}
            overflow={"visible"}
            flexWrap={"wrap"}
          >
            <ContentCard
              title={"Project Obelisk"}
              color={green[500]}
              shadow={green[300]}
              onClick={() =>
                handleNavClick("/game-development/project-obelisk")
              }
            />
            <ContentCard
              title={"The Better Pick"}
              color={grey[800]}
              shadow={grey[700]}
              onClick={() =>
                handleNavClick("/game-development/the-better-pick")
              }
            />
            <ContentCard
              title={"Space Madness"}
              color={purple[500]}
              shadow={purple[300]}
              onClick={() => handleNavClick("/game-development/space-madness")}
            />
          </Stack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameDev;
