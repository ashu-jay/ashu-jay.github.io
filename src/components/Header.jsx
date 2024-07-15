import { Box, Stack, Tooltip, useMediaQuery } from "@mui/material";
import MenuItem from "./MenuItem";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { Close, Menu } from "@mui/icons-material";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

const Header = ({ handleNavClick }) => {
  const header = useRef(null);
  const [isHeaderOutOfView, setIsHeaderOutOfView] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));

  const drawerWidth = isMobile
    ? "100vw"
    : isMd
    ? "50vw"
    : isLg
    ? "30vw"
    : "20vw";

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

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: "0" },
  };

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
              top={isMobile ? 20 : 50}
              right={isMobile ? 35 : 75}
              width={"50px"}
              height={"50px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              onClick={() => setOpenMenu(true)}
              sx={{ cursor: "pointer" }}
            >
              <Menu sx={{ color: "primary.500", fontSize: 60 }} />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                zIndex: 100,
              }}
              onClick={() => setOpenMenu(false)}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4,
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                position: "fixed",
                top: 0,
                right: 0,
                zIndex: 101,
              }}
            >
              {!isMobile && <div className="shapedividers_com-2802"></div>}
              <Stack
                width={drawerWidth}
                height={"100vh"}
                bgcolor={"primary.500"}
                justifyContent={"center"}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -90 }}
                  exit={{ rotate: 0 }}
                  style={{
                    paddingLeft: 2,
                    paddingRight: 2,
                    width: "60px",
                    height: "60px",
                    alignSelf: isMobile ? "flex-end" : "flex-start",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  onClick={() => setOpenMenu(false)}
                >
                  <Close
                    sx={{ color: "white", fontSize: 60, cursor: "pointer" }}
                  />
                </motion.div>
                <Stack
                  gap={3}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"80vh"}
                >
                  <Logo
                    width={"100px"}
                    height={"100px"}
                    color={"white"}
                    onClick={() => handleNavClick("/")}
                  />
                  <MenuItem
                    onClick={() => handleNavClick("/web-development")}
                    side
                  >
                    WEB DEVELOPMENT
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleNavClick("/game-development")}
                    side
                  >
                    GAME DEVELOPMENT
                  </MenuItem>
                  <MenuItem onClick={() => handleNavClick("/other-stuff")} side>
                    MISCELLANEOUS
                  </MenuItem>
                </Stack>
                <Stack
                  direction={"row"}
                  gap={1}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <GitHubIcon color={"white"} />
                  <LinkedInIcon color={"white"} />
                </Stack>
              </Stack>
            </motion.div>
          </>
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
