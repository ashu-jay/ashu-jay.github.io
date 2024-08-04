import { Box, Stack } from "@mui/material";
import { CarouselNavButton } from "./CarouselNavButton";
import {
  Home,
  MonitorOutlined,
  MoreHoriz,
  SportsEsports,
} from "@mui/icons-material";

const CarouselHeader = ({ color, handleNavClick, light = false }) => {
  return (
    <Stack
      zIndex={1}
      direction={"row"}
      gap={0}
      width={"60%"}
      justifyContent={"center"}
      alignItems={"flex-end"}
      height={"auto"}
    >
      <Box
        width={"80%"}
        height={"60%"}
        sx={{
          backgroundColor: color[200],
          mask: "url(#ellipse-mask-left)",
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <mask id="ellipse-mask-left">
              <rect width="100%" height="100%" fill="white" />
              <ellipse cx="0" cy="0" rx="100%" ry="100%" fill="black" />
            </mask>
          </defs>
        </svg>
      </Box>
      <Stack
        direction={"row"}
        gap={2}
        alignItems={"flex-end"}
        bgcolor={color[200]}
        p={2}
        sx={{
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
      >
        <CarouselNavButton
          label={"Home"}
          color={color}
          onClick={() => handleNavClick("/")}
        >
          <Home
            sx={{ color: light ? "#FFFFFF" : "#000000", fontSize: "36px" }}
          />
        </CarouselNavButton>
        <CarouselNavButton
          label={"Web Development"}
          color={color}
          onClick={() => handleNavClick("/web-development")}
        >
          <MonitorOutlined
            sx={{ color: light ? "#FFFFFF" : "#000000", fontSize: "36px" }}
          />
        </CarouselNavButton>
        <CarouselNavButton
          label={"Game Development"}
          color={color}
          onClick={() => handleNavClick("/game-development")}
        >
          <SportsEsports
            sx={{ color: light ? "#FFFFFF" : "#000000", fontSize: "36px" }}
          />
        </CarouselNavButton>
        <CarouselNavButton
          label={"Miscellaneous"}
          color={color}
          onClick={() => handleNavClick("/other-stuff")}
        >
          <MoreHoriz
            sx={{ color: light ? "#FFFFFF" : "#000000", fontSize: "36px" }}
          />
        </CarouselNavButton>
      </Stack>
      <Box
        width={"80%"}
        height={"60%"}
        sx={{
          backgroundColor: color[200],
          mask: "url(#ellipse-mask-right)",
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <mask id="ellipse-mask-right">
              <rect width="100%" height="100%" fill="white" />
              <ellipse cx="100%" cy="0" rx="100%" ry="100%" fill="black" />
            </mask>
          </defs>
        </svg>
      </Box>
    </Stack>
  );
};

export default CarouselHeader;
