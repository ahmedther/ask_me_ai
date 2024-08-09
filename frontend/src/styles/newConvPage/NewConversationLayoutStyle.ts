import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  max-height: 10%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  align-items: center;
  justify-content: flex-end;
  backdrop-filter: blur(1px); /* Add a backdrop filter */
`;

export const ScrollableContainer = styled.div`
  flex: 1; /* This allows the container to grow and fill the available space */
  max-height: calc(
    100vh - 5%
  ); /* Limits the height to the viewport height minus the BottomContainer */
  overflow-y: auto; /* Enables vertical scrolling */
  box-sizing: border-box; /* Ensures padding does not affect the width */
  padding-bottom: 5rem;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 1500px) {
  }
  @media (max-width: 1400px) {
  }
  @media (max-width: 1250px) {
    min-width: 99%;
  }
`;

export const ScrollableInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
  padding: 1rem; /* Optional: add padding for better content spacing */
  max-width: calc(100vw - 60%);
  margin-left: 25%;

  @media (max-width: 1500px) {
    margin-left: 20%;
  }
  @media (max-width: 1250px) {
    margin-left: 5%;
    min-width: 88%;
  }
`;

export const BottomLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 47rem;
  background: transparent;
`;

export const ChatBubbleContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  justify-content: end;
  align-items: flex-start;
  min-width: 40vw;
  margin: 0.5rem 0;

  @media (max-width: 1250px) {
    min-width: 99%;
  }
`;

export const ChatBubble = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 1rem;
  margin-left: 5rem;
`;

export const AiResponseContainer = styled.div`
  margin: 3rem 0;
  padding-right: 7rem;
  min-width: "40%";

  @media (max-width: 1250px) {
    min-width: 99%;
  }
`;

export const Disclaimer = styled.p`
  margin: 0;
  margin-top: 0.3rem;
  font-size: 0.8rem;
  font-weight: 400;
`;

export const Anchor = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
`;
