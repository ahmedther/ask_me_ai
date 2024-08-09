import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  color: #021526;
  text-align: center;
  padding: 10px 0;
  font-size: 0.8rem;
  overflow: hidden;
`;

const FooterText = styled.p`
  margin: 0;
`;
export default function Footer({ text }: { text: string }) {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} {text}
      </FooterText>
    </FooterContainer>
  );
}
