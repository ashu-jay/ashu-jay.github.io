import { Box, Stack, Tooltip, useMediaQuery } from "@mui/material";
import MenuItem from "./MenuItem";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./icons/Logo";
import { Close, Menu } from "@mui/icons-material";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import theme from "../theme";

const generateSvgUrl = (color) => {
  return `url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2.17 35.28" preserveAspectRatio="none"><path d="M1.67 0c-.55 3.07.41 9.27 0 16.14-.4 6.88-.58 13.75.1 19.14h.4V0z" fill="%23${
    color.split("#")[1]
  }"/><path d="M1.16 0c-.8 3.17.4 7.29.56 10.04C1.89 12.8.25 19.3.42 22.71c.16 3.43.84 4.65.86 7.05.03 2.4-.88 5.52-.88 5.52h1.77V0z" opacity=".5" fill="%23${
    color.split("#")[1]
  }"/><path d="M.31 0c.84 2.56.3 7.68.43 11.79.12 4.1.61 6.86.28 9.58-.33 2.73-1.18 5.61-1 8.61.19 3 .82 4.73.84 5.3h1.2V0z" opacity=".5" fill="%23${
    color.split("#")[1]
  }"/></svg>')`;
};

const Header = ({
  handleNavClick,
  side = false,
  color = theme.palette.primary,
  secondary = theme.palette.secondary,
}) => {
  const headerRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: "0" },
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY !== 0) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence>
        {(isMobile || isMd || side) && showMenu && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
            borderRadius={"8px"}
            bgcolor={color[100]}
            px={1}
            zIndex={99}
          >
            <Menu sx={{ color: color[500], fontSize: 60 }} />
          </Box>
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
                position: "fixed",
                height: "100vh",
                top: 0,
                right: 0,
                zIndex: 101,
                overflowY: "auto",
              }}
            >
              {!isMobile && (
                <div
                  className="shapedividers_com-2802"
                  style={{ backgroundImage: generateSvgUrl(color[500]) }}
                ></div>
              )}
              <Stack
                width={drawerWidth}
                bgcolor={color[500]}
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
                    sx={{ color: "#ffffff", fontSize: 60, cursor: "pointer" }}
                  />
                </motion.div>
                <Stack gap={10} justifyContent={"center"} height={"80vh"}>
                  <Stack
                    gap={3}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Logo
                      ref={headerRef}
                      width={"100px"}
                      height={"100px"}
                      color={"#ffffff"}
                      onClick={() => {
                        handleNavClick("/");
                        setOpenMenu(false);
                      }}
                    />
                    <MenuItem
                      onClick={() => {
                        handleNavClick("/web-development");
                        setOpenMenu(false);
                      }}
                      side
                      color={secondary}
                    >
                      WEB DEVELOPMENT
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleNavClick("/game-development");
                        setOpenMenu(false);
                      }}
                      side
                      color={secondary}
                    >
                      GAME DEVELOPMENT
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleNavClick("/other-stuff");
                        setOpenMenu(false);
                      }}
                      side
                      color={secondary}
                    >
                      MISCELLANEOUS
                    </MenuItem>
                  </Stack>
                  <Stack
                    direction={"row"}
                    gap={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <GitHubIcon color={"white"} hover={secondary[500]} />
                    <LinkedInIcon color={"white"} hover={secondary[500]} />
                  </Stack>
                </Stack>
              </Stack>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {!isMobile && !isMd && !side && (
        <Stack
          position={"fixed"}
          top={0}
          left={0}
          right={0}
          bgcolor={"rgba(209, 196, 233, 0.7)"}
          direction={"row"}
          gap={5}
          alignItems={"center"}
          minHeight={"5vh"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          py={2}
          zIndex={99}
          boxShadow={"0 0 5px 5px rgba(0, 0, 0, 0.3)"}
        >
          <Tooltip title={"Home"}>
            <Logo
              width={"50px"}
              height={"50px"}
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
            <Stack direction={"row"} gap={2}>
              <GitHubIcon color={"primary.500"} />
              <LinkedInIcon color={"primary.500"} />
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Header;
