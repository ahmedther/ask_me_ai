import styled, { css } from "styled-components";
import { IoMicCircleOutline } from "react-icons/io5";
import { BsArrowUpCircleFill } from "react-icons/bs";

export const TextAreaContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  min-width: 45rem;
  bottom: 0;
  z-index: 1;

  &:focus,
  &:hover {
    transform: translateY(-0.7rem);
  }

  @media (max-width: 900px) {
    min-width: 100%;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 45rem;
  padding: 12px 50px;
  border-radius: 20rem;
  border: none;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  resize: none; /* Disable resize handle */
  box-sizing: border-box;
  overflow-y: hidden; /* Hide vertical scrollbar */
  padding-right: 20px; /* Add some padding to compensate for the scrollbar width */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
    z-index: 1;
  }

  &::placeholder {
    letter-spacing: 2px;
    color: #ccc; /* or any other shade of grey you prefer */
  }

  &:focus,
  &:hover {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  }
`;

export const IconRight = styled(BsArrowUpCircleFill)<{ disabled: boolean }>`
  position: absolute;
  margin: 6px 5px;
  overflow: hidden;
  top: 0;
  right: 0;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  z-index: 2;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  transition: opacity 0.3s ease;

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `}
`;

export const IconLeft = styled(IoMicCircleOutline)`
  position: absolute;
  margin: 3px;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 2;
`;

export const PulseContainer = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  cursor: pointer;
  z-index: 2;
  height: 4rem;
  width: 4rem;
`;
