import styled from "styled-components";
import { motion } from "framer-motion";

export const AvatarImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: #1363df solid 2px;
`;

export const SideNavContainer = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  background-color: rgba(19, 101, 223, 0.027);
  width: 25%;
  min-width: 15rem;
  max-width: 15rem;
  padding: 1rem;
  border-right: #4993fa26 solid 0.5px;
  list-style: none;

  @media (max-width: 882px) {
    display: none;
  }

  &.overlay {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      196deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(223, 236, 255, 1) 35%,
      rgba(198, 220, 255, 1) 100%
    );
  }
`;

export const ToggleIconContainer = styled.div`
  display: none;

  @media (max-width: 882px) {
    display: block;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 11;
  }
`;

export const Hero = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #47b5ff 0%, #4c3bcf 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroHeading = styled.h3`
  letter-spacing: 5px;
  text-transform: uppercase;
`;

export const ListIems = styled.li`
  > a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 400;
  }

  &:hover {
    background-color: rgba(19, 101, 223, 0.1);
    border-radius: 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 900;
    text-decoration: underline;
    transform: translateX(0.5rem);

    > a {
      font-weight: 600;
    }
  }
`;

export const variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
