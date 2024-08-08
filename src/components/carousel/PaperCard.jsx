import { Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CardImage from "./CardImage";

const PaperCard = ({ data, currentSlide, direction, slideVariants, color }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  return (
    <Paper
      elevation={isMobile ? 0 : 24}
      sx={{
        position: isMobile || isMd ? "unset" : "relative",
        overflow: isMobile || isMd ? "unset" : "hidden",
        borderRadius: "16px",
        bgcolor: { xs: "transparent", sm: color[200] },
        height: "100%",
        width: "90%",
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <Stack
          position={isMobile || isMd ? "unset" : "absolute"}
          top={0}
          left={0}
          component={motion.div}
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          width={"100%"}
          height={"100%"}
          direction={isMobile || isMd ? "column" : "row"}
          gap={isMobile || isMd ? 2 : 0.35}
          alignItems={"center"}
          justifyContent={"center"}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 35 },
            opacity: { duration: 0.2 },
          }}
        >
          {currentSlide % 2 === 1 && !isMd && !isMobile && (
            <CardImage image={data.image} />
          )}
          <Stack
            px={2}
            pt={2}
            boxSizing={"border-box"}
            direction={"column"}
            gap={2}
            width={isMobile || isMd ? "100%" : "60%"}
            height={"100%"}
            justifyContent={"space-evenly"}
            sx={{
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "8px",
                ":active": { backgroundColor: "rgba(0, 0, 0, 0.6)" },
              },
            }}
          >
            <Typography variant="h2">{data.title}</Typography>
            <Typography variant="h6">{data.description}</Typography>
          </Stack>
          {(currentSlide % 2 === 0 || isMd || isMobile) && (
            <CardImage image={data.image} video={data.video} />
          )}
        </Stack>
      </AnimatePresence>
    </Paper>
  );
};

export default PaperCard;
