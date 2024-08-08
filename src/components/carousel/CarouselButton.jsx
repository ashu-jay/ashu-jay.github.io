import { Button, Tooltip } from "@mui/material";

const CarouselButton = ({ pos, currentSlide, dataLength, paginate }) => {
  const disabled =
    pos === "left" ? currentSlide === 0 : currentSlide === dataLength - 1;
  return (
    <Tooltip
      title={disabled ? "" : pos === "left" ? "Previous" : "Next"}
      placement="top"
    >
      <span>
        <Button
          disabled={disabled}
          disableRipple
          disableTouchRipple
          onClick={() => paginate(pos === "left" ? -1 : 1)}
          sx={{
            alignSelf: "center",
            width: "3em",
            height: "5em",
            transform: "rotateX(30deg)",
            borderRadius: "8px",
            border: "1px solid #333333",
            boxShadow: "0 .4em 0 .2em #333333",
            transition: "all 150ms",
            background: "linear-gradient(135deg, #000000, #444444 70%)",
            ":hover": {
              background: "linear-gradient(315deg, #000000, #444444 70%)",
            },
            "::after": {
              content: pos === "left" ? '"<"' : '">"',
              padding: ".2em",
              textAlign: "center",
              fontSize: "40px",
              color: "#FFFFFF",
            },
            ":active": {
              transform: "rotateX(30deg) translateY(.3em)",
              boxShadow: "0 0 0 0 #333333",
            },
            ":disabled": {
              "::after": { color: "transparent" },
              background: "transparent",
              boxShadow: "0 0 0 0 #333333",
              border: "none",
            },
          }}
        />
      </span>
    </Tooltip>
  );
};

export default CarouselButton;
