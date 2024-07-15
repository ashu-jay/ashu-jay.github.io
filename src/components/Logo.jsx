import { Box, Tooltip } from "@mui/material";

const Logo = ({ width, height, color, onClick }) => {
  return (
    <Tooltip title={"Home"} followCursor placement="right">
      <Box
        component="svg"
        viewBox="0 0 512.000000 512.000000"
        sx={{
          width: width,
          height: height,
          objectFit: "cover",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path
            d="M1741 4558 c-118 -309 -852 -2185 -876 -2241 -66 -151 -153 -260
   -242 -299 -38 -17 -43 -23 -43 -51 l0 -32 370 -2 370 -1 0 33 0 33 -76 11
   c-192 28 -266 112 -250 284 10 106 32 183 119 420 l80 217 407 0 407 0 126
   -347 c70 -192 131 -370 136 -398 22 -118 -21 -157 -201 -180 -46 -6 -48 -8
   -48 -38 l0 -33 565 0 565 0 0 32 c0 28 -5 33 -44 48 -59 23 -119 82 -155 154
   -22 43 -796 2023 -923 2360 l-19 52 -130 0 c-125 0 -130 -1 -138 -22z m54
   -1045 c98 -269 180 -494 183 -500 3 -10 -76 -13 -373 -13 l-377 0 6 23 c11 43
   371 977 377 977 3 0 85 -219 184 -487z"
          />
          <path
            d="M3230 4533 c0 -30 2 -32 48 -38 136 -18 179 -39 210 -103 16 -34 17
   -124 17 -1282 0 -1157 -1 -1251 -18 -1335 -32 -162 -75 -265 -142 -342 -44
   -52 -155 -109 -242 -125 l-63 -12 0 -38 0 -38 88 6 c328 22 556 114 732 295
   142 146 200 298 231 604 7 79 13 421 15 1010 5 1210 6 1223 27 1262 33 61 79
   84 200 98 56 6 57 7 57 38 l0 32 -580 0 -580 0 0 -32z"
          />
          <path
            d="M464 915 c-15 -23 -15 -27 0 -50 l16 -25 2080 0 2080 0 16 25 c15 23
   15 27 0 50 l-16 25 -2080 0 -2080 0 -16 -25z"
          />
        </g>
      </Box>
    </Tooltip>
  );
};

export default Logo;
