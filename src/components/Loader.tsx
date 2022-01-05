import { motion } from "framer-motion";
import styled from "styled-components";

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${(props) => props.theme.color.main};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <span>Loading....</span>
      <br />
      <motion.div
        style={{
          height: "50px",
          background: "#aef359",
          width: "50px",
          borderRadius: "2% 50%",
        }}
        initial={{
          x: -75,
        }}
        animate={{
          rotate: 360,
          borderRadius: ["50% 50%", "2% 50%"],
          x: 75,
        }}
        transition={{
          flip: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      ></motion.div>
    </LoaderContainer>
  );
};

export default Loader;
