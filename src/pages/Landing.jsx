import React, { useState, useEffect } from "react";
import { Box, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import GitHubIcon from "../components/GitHubIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import LandingButton from "../components/LandingButton";

const Landing = () => {
  const [expanded, setExpanded] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [url, setUrl] = useState("/");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  useEffect(() => {
    if (expanded) {
      setTimeout(() => {
        setRedirect(true);
        setTimeout(() => {
          navigate(url);
        }, 500);
      }, 700);
    }
  }, [expanded, navigate, url]);

  const handleClick = (url) => {
    if (isMobile) {
      navigate(url);
    } else {
      setUrl(url);
      setExpanded(true);
    }
  };

  return (
    <AnimatePresence>
      {!redirect && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Stack direction={isMobile ? "column" : "row"}>
            <Box
              sx={{
                width: isMobile ? "100vw" : expanded ? "0vw" : "50vw",
                height: isMobile ? "50vh" : "100vh",
                overflow: "hidden",
                transition: "width 0.7s, height 0.7s",
              }}
            >
              <Box
                component={"img"}
                src="/ashwin_photo.jpg"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <Paper
              elevation={24}
              sx={{
                width: isMobile || expanded ? "100vw" : "50vw",
                height: isMobile ? "auto" : "100vh",
                bgcolor: "primary.50",
                alignContent: "center",
                // justifyContent: "center",
                overflowY: isMobile ? "unset" : "auto",
                transition: "width 0.7s, height 0.7s",
              }}
            >
              <Stack gap={5} px={isMobile ? 1 : 10} py={2} textAlign={"center"}>
                <Typography variant="h2">Hey, I'm Ashwin!</Typography>
                <Stack gap={3} alignItems={"center"} justifyContent={"center"}>
                  <Typography variant="h6">
                    Welcome to my portfolio website!
                  </Typography>
                  <Typography variant="h6">
                    I'm an undergraduate student from Georgia Tech, majoring in
                    computer science. While I have many interests, I aspire to
                    become an excellent web developer in the future. I have a
                    passion for game design and development, which has
                    continuously fueled my creativity (I might try to add a few
                    small games to this website). I hope to make a career out of
                    UI/UX design primarily, and this website is my first step in
                    doing so!
                  </Typography>
                  <Typography variant="h6">
                    Check out some of the cool things I've done here!
                  </Typography>
                  {/* <Button
                    variant="outlined"
                    size="large"
                    href="https://www.ashwinjayendra.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check out the old version!
                  </Button> */}
                  <Stack gap={2} flexWrap={"wrap"} justifyContent={"center"}>
                    <LandingButton
                      onClick={() => handleClick("/web-development")}
                    >
                      WEB DEVELOPMENT
                    </LandingButton>

                    <LandingButton
                      onClick={() => handleClick("/game-development")}
                    >
                      GAME DEVELOPMENT
                    </LandingButton>
                    <LandingButton onClick={() => handleClick("/other-stuff")}>
                      MISCELLANEOUS
                    </LandingButton>
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <GitHubIcon color={"primary.500"} />
                    <LinkedInIcon color={"primary.500"} />
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Landing;
