import { Box, Typography, Stack, Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Misc = () => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (url) => {
    if (url !== "/other-stuff") {
      setIsExiting(true);

      setTimeout(() => {
        navigate(url);
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Header handleNavClick={handleNavClick} />
          <Stack
            minHeight={"68vh"}
            direction={"column"}
            textAlign={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
            py={10}
            px={"20%"}
          >
            <Typography variant="h2">Other Stuff</Typography>

            <Typography variant="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor pellentesque luctus. Nulla sodales at massa ut laoreet.
              Duis ut ultrices neque. Sed sed sapien ut massa maximus aliquam.
              Aliquam ut tortor non dolor vehicula ullamcorper tincidunt
              molestie mi. Quisque ut augue hendrerit, viverra augue sed, mollis
              mauris. Fusce vitae nibh eleifend, elementum massa id, rutrum
              ante. Praesent eget lacus est. Nullam nec auctor eros. Aliquam
              molestie tincidunt leo nec ultricies. Sed tempor blandit ante,
              vitae auctor neque dapibus et. Nunc vel egestas est, sed congue
              massa.
            </Typography>
            <Typography variant="h5">
              In hac habitasse platea dictumst. Morbi sem ligula, molestie nec
              pulvinar sit amet, aliquam sed sem. Nunc efficitur quis est in
              iaculis. Curabitur eu tempor orci, non rhoncus elit. Ut
              condimentum, justo rhoncus commodo dictum, felis enim volutpat
              justo, nec sagittis elit nibh in ligula. Nunc maximus, orci a
              ornare gravida, sapien neque mollis tellus, ut facilisis nunc
              augue id massa. Nulla nec tincidunt tortor. Praesent in quam
              libero. Vivamus sed ante nibh. Ut tincidunt sollicitudin vehicula.
              Vivamus sodales dictum quam, vel molestie eros. Donec nec diam
              volutpat, rutrum tortor ac, cursus odio. Sed vel enim euismod,
              congue mauris et, aliquet lacus.
            </Typography>
            <Typography variant="h5">
              Integer nulla libero, semper a convallis vel, sollicitudin sed
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Etiam vel maximus massa. Sed
              libero turpis, pharetra eu rhoncus et, blandit id turpis. Vivamus
              ut varius felis, at scelerisque orci. Maecenas lacinia faucibus
              fermentum. Morbi lobortis nunc quis lacus mollis semper.
            </Typography>
            <Typography variant="h5">
              Vivamus egestas egestas accumsan. Mauris ex risus, euismod et erat
              sit amet, pharetra ultricies diam. Integer pharetra nulla quis
              finibus finibus. Fusce vel justo vel nisl accumsan suscipit eget
              vel velit. Quisque malesuada sapien sapien, a finibus nisi
              sollicitudin nec. Quisque eleifend libero vitae gravida
              scelerisque. Suspendisse aliquet tempor iaculis.
            </Typography>
            <Typography variant="h5">
              Pellentesque rutrum ac mi at malesuada. Morbi nibh ante, faucibus
              quis arcu et, auctor mattis nulla. Duis vel ex gravida, sagittis
              metus ut, blandit nunc. Cras non convallis urna. Curabitur nunc
              turpis, dictum eget dictum sit amet, condimentum vitae elit. Ut
              sodales mi a orci scelerisque, vel hendrerit magna rutrum. Nulla
              eu vulputate leo, in eleifend dui. Sed finibus, diam quis interdum
              molestie, turpis nisi lobortis lacus, auctor viverra metus lacus
              vitae eros. Nam mollis purus a odio lacinia, ut vestibulum sapien
              laoreet.
            </Typography>
          </Stack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Misc;
