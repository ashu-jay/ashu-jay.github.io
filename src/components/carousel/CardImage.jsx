import { Box, Skeleton, useMediaQuery } from "@mui/material";

const CardImage = ({ image }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        borderTopLeftRadius: isMobile ? "16px" : "0px",
        borderBottomRightRadius: isMobile || isMd ? "16px" : "0px",
        borderTopRightRadius: isMobile ? "16px" : "0px",
        borderBottomLeftRadius: isMobile || isMd ? "16px" : "0px",
        width: isMobile || isMd ? "100%" : "40%",
        height: isMobile || isMd ? "50vh" : "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "hidden",
      }}
    >
      {!image && (
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", height: "100%" }}
        />
      )}
      {image && (
        <Box
          component={"img"}
          width={"100%"}
          height={"100%"}
          src={image}
          sx={{ objectFit: "cover" }}
        />
      )}
    </Box>
  );
};

export default CardImage;
