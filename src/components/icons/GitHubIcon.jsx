import { Tooltip, Link } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const GitHubIcon = ({ color, hover = "none" }) => {
  return (
    <Tooltip title={"GitHub"} placement="top">
      <Link
        href={"https://github.com/ashu-jay"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <GitHub
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

export default GitHubIcon;
