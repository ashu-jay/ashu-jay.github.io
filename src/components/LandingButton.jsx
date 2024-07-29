import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const LandingButton = ({ children, onClick }) => {
  const theme = useTheme();

  const menuItemVariants = {
    initial: {
      scale: 1,
      backgroundColor: theme.palette.primary[500],
      boxShadow: `5px 5px 7px ${theme.palette.primary[300]}`,
    },
    hover: {
      scale: 0.95,
      backgroundColor: theme.palette.primary[500],
      boxShadow: "none",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const menuItemStyle = {
    borderRadius: "8px",
    width: "200px",
    height: "45px",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    display: "flex",
  };

  return (
    <Box
      display={"flex"}
      width={"205px"}
      height={"45px"}
      justifyContent={"center"}
      alignItems={"center"}
      onClick={onClick}
    >
      <motion.div
        style={menuItemStyle}
        initial={"initial"}
        animate={"animate"}
        whileHover={"hover"}
        variants={menuItemVariants}
      >
        <Typography
          variant="body1"
          color={theme.palette.primary[50]}
          fontFamily={"Montserrat, Arial, sans-serif"}
        >
          {children}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default LandingButton;
