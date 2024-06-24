import { Box, Typography, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box width={"100vw"} height={"100vh"}>
          <Stack
            height={"100vh"}
            direction={"column"}
            textAlign={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h2">Hello</Typography>
          </Stack>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
