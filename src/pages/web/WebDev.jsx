import { Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ContentCard from "../../components/ContentCard";
import { brown, orange } from "@mui/material/colors";

const WebDev = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));

  const padding = isMobile ? 2 : isMd ? "10%" : isLg ? "15%" : "25%";

  const handleNavClick = (url) => {
    if (url !== "/web-development") {
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
            <Typography variant="h2">Web Dev</Typography>

            <Typography variant="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor pellentesque luctus. Nulla sodales at massa ut laoreet.
              Duis ut ultrices neque. Sed sed sapien ut massa maximus aliquam.
              Aliquam ut tortor non dolor vehicula ullamcorper tincidunt
              molestie mi. Quisque ut augue hendrerit, viverra augue sed, mollis
              mauris. Fusce vitae nibh eleifend, elementum massa id, rutrum
              ante. Praesent eget lacus est. Nullam nec auctor eros. Aliquam
              molestie tincidunt leo nec ultricies. Sed tempor blandit ante,
              vitae auctor neque dapibus et. Nunc vel egestas est, sed congue
              massa.
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
            />
            <ContentCard
              title={"Dungeons and Dragons AI"}
              color={brown[500]}
              shadow={brown[300]}
              onClick={() => handleNavClick("/web-development/d-and-d-ai")}
            />
          </Stack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebDev;
