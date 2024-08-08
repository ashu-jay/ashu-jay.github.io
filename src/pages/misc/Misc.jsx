import { Typography, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ContentCard from "../../components/ContentCard";
import { teal } from "@mui/material/colors";

const Misc = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));

  const padding = isMobile ? 2 : isMd ? "10%" : isLg ? "15%" : "25%";

  const handleNavClick = (url) => {
    if (url !== "/other-stuff") {
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
            <Typography variant="h2">Other Stuff</Typography>

            <Typography variant="h5">
              This page is an archive of all the other random things I've done
              besides games and websites - app development, venturous ideas and
              fun classes at college.
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
              title={"Wrapped"}
              color={teal[500]}
              shadow={teal[300]}
              onClick={() => handleNavClick("/other-stuff/wrapped")}
            />
          </Stack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Misc;
