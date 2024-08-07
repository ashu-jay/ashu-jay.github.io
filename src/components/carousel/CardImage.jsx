import { Close, Expand, OpenInFull } from "@mui/icons-material";
import { Box, Modal, Skeleton, useMediaQuery } from "@mui/material";
import { useState } from "react";

const CardImage = ({ image }) => {
  const [openImage, setOpenImage] = useState(false);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  return (
    <>
      <Box
        sx={{
          position: "relative",
          borderTopLeftRadius: isMobile ? "16px" : "0px",
          borderBottomRightRadius: isMobile || isMd ? "16px" : "0px",
          borderTopRightRadius: isMobile ? "16px" : "0px",
          borderBottomLeftRadius: isMobile || isMd ? "16px" : "0px",
          width: isMobile || isMd ? "100%" : "40%",
          height: isMobile || isMd ? "50vh" : "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={() => setOpenImage(true)}
      >
        {!image && (
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%", height: "100%" }}
          />
        )}
        {image && (
          <>
            <Box
              component={"img"}
              width={"100%"}
              height={"100%"}
              src={image}
              sx={{ objectFit: "cover" }}
            />
            <OpenInFull
              sx={{
                color: "#FFFFFF",
                borderRadius: "4px",
                position: "absolute",
                top: "1em",
                right: "1em",
                bgcolor: "rgba(0, 0, 0, 0.3)",
                ":hover": { bgcolor: "rgba(0, 0, 0, 0.5)" },
              }}
              onClick={() => setOpenImage(true)}
            />
          </>
        )}
      </Box>
      <Modal
        open={openImage}
        onClose={() => setOpenImage(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "items" }}
      >
        <>
          <Box
            component={"img"}
            m={5}
            width={"auto"}
            maxWidth={"100%"}
            height={"auto"}
            maxHeight={"100%"}
            src={image}
            sx={{ objectFit: "contain" }}
          />
          <Close
            sx={{
              color: "#FFFFFF",
              fontSize: isMobile ? "40px" : "70px",
              position: "fixed",
              top: isMobile ? 10 : 50,
              right: isMobile ? 10 : 50,
              cursor: "pointer",
            }}
            onClick={() => {
              setOpenImage(false);
            }}
          />
        </>
      </Modal>
    </>
  );
};

export default CardImage;
