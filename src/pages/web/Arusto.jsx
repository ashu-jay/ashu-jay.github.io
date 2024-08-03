import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { orange, yellow } from "@mui/material/colors";
import Background from "../../components/Background";
import aristotle from "../../images/aristotle.png";
import arusto_banner from "../../images/arusto_banner.jpeg";
import Carousel from "../../components/Carousel";

const Arusto = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (url) => {
    if (url !== "/web-development/arusto-ai") {
      setIsExiting(true);

      setTimeout(() => {
        navigate(url);
      }, 300);
    }
  };

  const data = [
    {
      title: "Arusto",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor pellentesque luctus. Nulla sodales at massa ut laoreet. Duis ut ultrices neque. Sed sed sapien ut massa maximus aliquam. Aliquam ut tortor non dolor vehicula ullamcorper tincidunt molestie mi. Quisque ut augue hendrerit, viverra augue sed, mollis mauris. Fusce vitae nibh eleifend, elementum massa id, rutrum ante. Praesent eget lacus est. Nullam nec auctor eros. Aliquam molestie tincidunt leo nec ultricies. Sed tempor blandit ante, vitae auctor neque dapibus et. Nunc vel egestas est, sed congue massa.",
      image: aristotle,
    },
    {
      title: "Maybe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor pellentesque luctus. Nulla sodales at massa ut laoreet. Duis ut ultrices neque. Sed sed sapien ut massa maximus aliquam. Aliquam ut tortor non dolor vehicula ullamcorper tincidunt molestie mi. Quisque ut augue hendrerit, viverra augue sed, mollis mauris. Fusce vitae nibh eleifend, elementum massa id, rutrum ante. Praesent eget lacus est. Nullam nec auctor eros. Aliquam molestie tincidunt leo nec ultricies. Sed tempor blandit ante, vitae auctor neque dapibus et. Nunc vel egestas est, sed congue massa.",
      image: arusto_banner,
    },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={orange}>
          <Header
            handleNavClick={handleNavClick}
            side
            color={orange}
            secondary={yellow}
          />
          <Carousel color={orange} data={data} />
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Arusto;
