import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const FadedHeading = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.8;
  letter-spacing: 0.5rem;
  background: rgb(222, 222, 222);
  background: linear-gradient(
    142deg,
    rgba(222, 222, 222, 1) 0%,
    rgba(191, 199, 210, 1) 50%,
    rgba(179, 190, 207, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
