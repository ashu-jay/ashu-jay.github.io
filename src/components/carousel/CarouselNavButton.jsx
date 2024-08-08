import { Button, Tooltip } from "@mui/material";

export const CarouselNavButton = ({ children, label, color, onClick }) => {
  return (
    <Tooltip title={label} placement="bottom">
      <Button
        disableRipple
        disableTouchRipple
        onClick={onClick}
        sx={{
          alignSelf: "center",
          width: "3em",
          height: "5em",
          transform: "rotateX(30deg)",
          borderRadius: "8px",
          border: `1px solid ${color[400]}`,
          boxShadow: `0 .4em 0 .2em ${color[400]}`,
          transition: "all 150ms",
          background: `linear-gradient(135deg, ${color[600]}, ${color[300]} 70%)`,
          ":hover": {
            background: `linear-gradient(315deg, ${color[600]}, ${color[300]} 70%)`,
          },
          ":active": {
            transform: "rotateX(30deg) translateY(.3em)",
            boxShadow: `0 0 0 0 ${color[400]}`,
          },
          ":disabled": {
            "::after": { color: "transparent" },
            background: "transparent",
            boxShadow: `0 0 0 0 ${color[400]}`,
            border: "none",
          },
        }}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
