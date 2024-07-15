import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const MenuItem = ({ children, onClick, side, border }) => {
  const theme = useTheme();

  const menuItemVariants = {
    initial: {
      scale: 1,
      borderWidth: border ? 1 : 0,
      borderColor: side
        ? theme.palette.secondary[200]
        : theme.palette.primary[200],
      backgroundColor: side ? "white" : theme.palette.primary[50],
      transition: { duration: 0.1 },
    },
    hover: {
      scale: 1.1,
      borderWidth: 2,
      borderColor: side
        ? theme.palette.secondary[600]
        : theme.palette.primary[500],
      backgroundColor: side
        ? theme.palette.secondary[100]
        : theme.palette.primary[100],
      boxShadow: side ? "5px 5px 7px #ffeb3b" : "5px 5px 7px #673ab7",
      transition: { duration: 0.1 },
    },
  };

  const menuItemStyle = {
    border: "solid",
    borderRadius: "8px",
    width: "200px",
    height: "40px",
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
        whileHover={"hover"}
        variants={menuItemVariants}
      >
        <Typography
          variant="body1"
          color={theme.palette.primary[500]}
          fontFamily={"Montserrat, Arial, sans-serif"}
        >
          {children}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default MenuItem;
