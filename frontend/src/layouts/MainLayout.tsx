import SideNavigationBar from "./SideNavigationBar";
import NewConversationLayout from "./NewConversationLayout";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    142deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(247, 247, 255, 1) 50%,
    rgba(233, 247, 255, 1) 100%
  );
`;

export default function MainLayout() {
  return (
    <Container>
      <SideNavigationBar />
      <NewConversationLayout />
    </Container>
  );
}
