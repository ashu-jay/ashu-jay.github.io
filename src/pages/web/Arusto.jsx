import { AnimatePresence } from "framer-motion";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { orange, yellow } from "@mui/material/colors";
import Background from "../../components/Background";
import arusto_logo from "../../images/arusto_logo.png";
import arusto_account from "../../images/arusto_account.png";
import arusto_tour from "../../images/arusto_tour.png";
import arusto_analytics from "../../images/arusto_analytics.png";
import Carousel from "../../components/carousel/Carousel";
import { Link, Stack, useMediaQuery } from "@mui/material";
import CarouselHeader from "../../components/carousel/CarouselHeader";

const Arusto = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMd = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

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
      title: "Arusto AI",
      description: (
        <>
          During the summer of 2024, I interned for a startup company called
          Arusto AI, aimed at spreading education through AI-based content
          creation. My work entailed completing multiple tasks involving the
          front-end structure of the product website, as well as implementing
          some back-end functions. This internship was a great opportunity for
          me to improve my skills in React, as well as introduce myself to other
          web development technologies like Next.js, Flask, FastAPI, Material UI
          and Vercel. Check out the main website{" "}
          <Link
            href="https://www.arusto.ai"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </Link>
          .
        </>
      ),
      image: arusto_logo,
    },
    {
      title: "Designing the Account Page",
      description:
        "One of my first tasks was to design the user account settings page. I was also required to make a back-end function to keep a track of how many lessons the user has created in order to show that in the account information. I was first exposed to Flask at this point, and my expertise in Python helped me complete this task with minimal hassle.",
      image: arusto_account,
    },
    {
      title: "Tour for the Creation Process",
      description: (
        <>
          Since AI might still be relatively new to educators, our product
          required a step-by-step walkthrough of how to create content. I was in
          charge of making this 'tour', which involved the use of{" "}
          <Link
            href="https://blog.shepherdpro.com/demo/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sheperd.js
          </Link>
          , making it easier to implement. This component was also used to show
          learners how lessons worked, and how to interact with the platform and
          AI.
        </>
      ),
      image: arusto_tour,
    },
    {
      title: "User Analytics",
      description: (
        <>
          We wanted users to know what topics were easy/difficult for students,
          and how much time they spent on different lessons, so that they can
          improve to make better content. So we introduced the Analytics
          section, of which I was responsible for enhancing the look of the
          charts and other data displayed - things like colors, spacing, types
          of charts, and info tips. We used{" "}
          <Link
            href="https://frappe.io/charts/docs#demo"
            target="_blank"
            rel="noreferrer noopener"
          >
            Frappe Charts
          </Link>{" "}
          to render the data.
        </>
      ),
      image: arusto_analytics,
    },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <Background bgColor={orange}>
          {(isMobile || isMd) && (
            <Header
              handleNavClick={handleNavClick}
              side
              color={orange}
              secondary={yellow}
            />
          )}
          {!isMobile && !isMd && (
            <Stack width={"100%"} height={"70vh"} alignItems={"center"}>
              <CarouselHeader color={orange} handleNavClick={handleNavClick} />
              <Carousel color={orange} data={data} />
            </Stack>
          )}
          {(isMobile || isMd) && <Carousel color={orange} data={data} />}
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Arusto;
