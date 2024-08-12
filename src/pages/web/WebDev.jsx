import { Typography, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ContentCard from "../../components/ContentCard";
import { brown, orange } from "@mui/material/colors";

const WebDev = () => {
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
    } else {
      navigate(url);
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
            <Typography variant="h2">Web Dev</Typography>

            <Typography variant="h5">
              My interest in Web Development first surfaced after making
              websites using the Wix website builder. Since then, it has been a
              dream of mine to be able to fully code a website from scratch, and
              this portfolio website is the culmination of that dream. To
              achieve this, I had to learn the tools and languages required to
              make a website, which I did through the projects below. My skills
              in HTML, CSS and JavaScript improved, and I learned how to use
              React, Next.js, Node.js, TypeScript, Figma and other helpful tools
              through these projects.
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
              title={"Arusto AI"}
              color={orange[500]}
              shadow={orange[300]}
              onClick={() => handleNavClick("/web-development/arusto-ai")}
              description="Summer 2024 Internship for AI-based content creation"
            />
            <ContentCard
              title={"Dungeons and Dragons AI"}
              color={brown[500]}
              shadow={brown[300]}
              onClick={() => handleNavClick("/web-development/d-and-d-ai")}
              description="GT WebDev club project to make a web-based game whose story is created by ChatGPT"
            />
          </Stack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebDev;
