import { Close, OpenInFull } from "@mui/icons-material";
import { Box, Modal, Skeleton, useMediaQuery } from "@mui/material";
import { useState } from "react";

const CardImage = ({ image, video }) => {
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
        {!image && !video && (
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%", height: "100%" }}
          />
        )}
        {(image || video) && (
          <>
            <Box
              component={video ? "video" : "img"}
              width={"100%"}
              height={"100%"}
              src={video ? video : image}
              sx={{ objectFit: "cover" }}
              autoPlay={video && !isMobile ? true : undefined}
              loop={video ? true : undefined}
              muted={video && !isMobile ? true : undefined}
              controls={isMobile ? true : undefined}
            />
            {((!video && isMobile) || !isMobile) && (
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
            )}
          </>
        )}
      </Box>
      <Modal
        open={video && isMobile ? false : openImage}
        onClose={() => setOpenImage(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "items",
          bgcolor: isMobile || isMd ? "#FFFFFF" : undefined,
        }}
      >
        <>
          <Box
            component={video ? "video" : "img"}
            m={5}
            width={"auto"}
            maxWidth={"100%"}
            height={"auto"}
            maxHeight={"100%"}
            src={video ? video : image}
            sx={{ objectFit: "contain" }}
            autoPlay={video ? true : undefined}
            loop={video ? true : undefined}
            muted={video ? true : undefined}
            controls={video ? true : undefined}
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
