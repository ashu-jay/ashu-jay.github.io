import { motion } from "framer-motion";
import BlobBG from "../utils/BlobBG";
import { useMediaQuery } from "@mui/material";

const Background = ({ children, bgColor }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bgColor[50],
        minHeight: "100vh",
        backgroundImage: isMobile ? "unset" : `url(${BlobBG(bgColor[500])})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Background;
