import { Button } from "@mui/material";

export const CarouselButton = ({ pos, currentSlide, dataLength, paginate }) => {
  return (
    <Button
      disabled={
        pos === "left" ? currentSlide === 0 : currentSlide === dataLength - 1
      }
      disableRipple
      disableTouchRipple
      onClick={() => paginate(pos === "left" ? -1 : 1)}
      sx={{
        alignSelf: "center",
        width: "3em",
        height: "5em",
        transform: "rotateX(30deg)",
        borderRadius: "8px",
        border: "1px solid #525252",
        boxShadow: "0 .4em 0 .2em #525252",
        transition: "all 150ms",
        bgcolor: "#333333",
        ":hover": { bgcolor: "#333333" },
        "::after": {
          content: pos === "left" ? '"<"' : '">"',
          padding: ".2em",
          textAlign: "center",
          fontSize: "40px",
          color: "#FFFFFF",
        },
        ":active": {
          transform: "rotateX(30deg) translateY(.3em)",
          boxShadow: "0 0 0 0 #525252",
          backgroundColor: "#525252",
        },
        ":disabled": {
          "::after": { color: "transparent" },
          backgroundColor: "transparent",
          boxShadow: "0 0 0 0 #525252",
          border: "none",
        },
      }}
    />
  );
};
