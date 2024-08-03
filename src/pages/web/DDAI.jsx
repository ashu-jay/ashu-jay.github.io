import { Typography, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { brown, orange } from "@mui/material/colors";
import Background from "../../components/Background";

const DDAI = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));

  const padding = isMobile ? 2 : isMd ? "10%" : isLg ? "15%" : "25%";

  const handleNavClick = (url) => {
    if (url !== "/web-development/d-and-d-ai") {
      setIsExiting(true);

      setTimeout(() => {
        navigate(url);
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={brown}>
          <Header
            handleNavClick={handleNavClick}
            side
            color={brown}
            secondary={orange}
          />
          <Stack
            direction={"column"}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
            py={5}
            px={padding}
          >
            <Typography variant="h2">Dungeons and Dragons AI</Typography>
          </Stack>
        </Background>
      )}
    </AnimatePresence>
  );
};

export default DDAI;
