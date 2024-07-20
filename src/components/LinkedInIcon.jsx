import { Tooltip, Link } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

const LinkedInIcon = ({ color, hover = "none" }) => {
  return (
    <Tooltip title={"LinkedIn"} placement="top">
      <Link
        href={"https://www.linkedin.com/in/ashwin-jayendra-610554218/"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <LinkedIn
          sx={{
            color: color,
            ":hover": { transform: "scale(1.2)", color: hover },
          }}
          fontSize="large"
        />
      </Link>
    </Tooltip>
  );
};

export default LinkedInIcon;
