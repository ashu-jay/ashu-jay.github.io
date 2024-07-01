import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
                height: isMobile ? (expanded ? "0vh" : "50vh") : "100vh",
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
                height: expanded ? "100vh" : "auto",
                bgcolor: "primary.50",
                alignContent: "center",
                transition: "width 0.7s, height 0.7s",
              }}
            >
              <Stack gap={5} px={isMobile ? 1 : 10} py={2} textAlign={"center"}>
                <Typography variant="h2">Hey, I'm Ashwin!</Typography>
                <Stack gap={5} alignItems={"center"} justifyContent={"center"}>
                  <Typography variant="h6">
                    Yes, this website is still under development :)
                  </Typography>
                  <Typography variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    dapibus libero nec eros commodo porttitor. Aliquam tincidunt
                    turpis nibh, at tincidunt justo varius blandit. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Curabitur volutpat sem non scelerisque
                    congue. In suscipit ac elit hendrerit pharetra. Nulla
                    facilisi. Morbi rhoncus odio turpis, vel blandit purus
                    egestas id. Praesent volutpat, risus et eleifend vestibulum,
                    nunc nisl tristique nunc, at aliquam mauris dolor in tellus.
                    Vestibulum porttitor finibus risus. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Fusce sed mauris quis sem tempor gravida vel
                    id ex. Integer pharetra nibh tellus, in rutrum lacus gravida
                    eu. Cras ac urna non sapien finibus porta. Donec tincidunt
                    erat magna, vel ultricies arcu varius vitae. Fusce est
                    velit, vulputate sed vulputate sit amet, facilisis sed quam.
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
                  <Stack direction={"row"} gap={2}>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => {
                        setUrl("/web-development");
                        setExpanded(true);
                      }}
                    >
                      Web Development
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => {
                        setUrl("/game-development");
                        setExpanded(true);
                      }}
                    >
                      Game Development
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => {
                        setUrl("/other-stuff");
                        setExpanded(true);
                      }}
                    >
                      Other Stuff
                    </Button>
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
