import {
  Box,
  Typography,
  Stack,
  Link,
  SvgIcon,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import {
  MonitorOutlined,
  PendingOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";

const Header = ({ handleNavClick }) => {
  const navigate = useNavigate();
  const header = useRef(null);
  const [isHeaderOutOfView, setIsHeaderOutOfView] = useState(false);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      if (header.current) {
        const rect = header.current.getBoundingClientRect();
        const isVisible = rect.bottom >= 0;
        // rect.left >= 0 &&
        // rect.bottom <=
        //   (window.innerHeight || document.documentElement.clientHeight) &&
        // rect.right <=
        //   (window.innerWidth || document.documentElement.clientWidth);
        setIsHeaderOutOfView(!isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {(isHeaderOutOfView || isMobile) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              position={"fixed"}
              top={0}
              bottom={isMobile ? "auto" : 0}
              left={0}
              right={isMobile ? 0 : "auto"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={isMobile ? "flex-start" : "center"}
            >
              <Stack
                direction={isMobile ? "row" : "column"}
                p={isMobile ? 1 : 3}
                width={isMobile ? "100%" : "auto"}
                justifyContent={"space-evenly"}
                gap={2}
                bgcolor={"primary.500"}
                alignItems={"center"}
                sx={
                  !isMobile && {
                    borderTopRightRadius: "16px",
                    borderBottomRightRadius: "16px",
                  }
                }
              >
                <Logo
                  width={"40px"}
                  height={"40px"}
                  color={"white"}
                  onClick={() => handleNavClick("/")}
                />
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                  <Tooltip title={"Web Development"} placement="right">
                    <MonitorOutlined
                      fontSize="large"
                      sx={{ cursor: "pointer", color: "white" }}
                      onClick={() => handleNavClick("/web-development")}
                    />
                  </Tooltip>
                </motion.div>
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                  <Tooltip title={"Game Development"} placement="right">
                    <SportsEsportsOutlined
                      fontSize="large"
                      sx={{ cursor: "pointer", color: "white" }}
                      onClick={() => handleNavClick("/game-development")}
                    />
                  </Tooltip>
                </motion.div>
                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                  <Tooltip title={"Miscellaneous"} placement="right">
                    <PendingOutlined
                      fontSize="large"
                      sx={{ cursor: "pointer", color: "white" }}
                      onClick={() => handleNavClick("/other-stuff")}
                    />
                  </Tooltip>
                </motion.div>
              </Stack>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {!isMobile && (
        <motion.div
          ref={header}
          initial={{ opacity: 1 }}
          animate={isHeaderOutOfView ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Stack
            direction={"row"}
            gap={5}
            alignItems={"center"}
            minHeight={"10vh"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            pt={5}
          >
            <Tooltip title={"Home"}>
              <Logo
                width={"100px"}
                height={"100px"}
                color={"#4527a0"}
                onClick={() => handleNavClick("/")}
              />
            </Tooltip>
            <Stack
              direction={"row"}
              gap={5}
              flexWrap={"wrap"}
              px={2}
              justifyContent={"center"}
            >
              <MenuItem onClick={() => handleNavClick("/web-development")}>
                WEB DEVELOPMENT
              </MenuItem>
              <MenuItem onClick={() => handleNavClick("/game-development")}>
                GAME DEVELOPMENT
              </MenuItem>
              <MenuItem onClick={() => handleNavClick("/other-stuff")}>
                MISCELLANEOUS
              </MenuItem>
            </Stack>
          </Stack>
        </motion.div>
      )}
    </>
  );
};

export default Header;
