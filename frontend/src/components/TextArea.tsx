import PulseAnime from "../ui/PulseAnime";

import useTextareaLogic from "../hooks/useTextareaLogic";

import {
  IconLeft,
  IconRight,
  PulseContainer,
  StyledTextarea,
  TextAreaContainer,
} from "../styles/newConvPage/textareaStyles";

export default function TextArea() {
  const {
    t,
    textareaRef,
    isDisabled,
    isResponcePending,
    listening,
    handelMicClick,
    handleSendClick,
    handleChange,
  } = useTextareaLogic();

  return (
    <TextAreaContainer>
      <IconRight
        size={35}
        color="#1363df"
        onClick={handleSendClick}
        disabled={isDisabled || isResponcePending}
      />

      {listening ? (
        <PulseContainer>
          <PulseAnime onClick={handelMicClick} />
        </PulseContainer>
      ) : (
        <IconLeft size={40} color="#1363df" onClick={handelMicClick} />
      )}

      <StyledTextarea
        ref={textareaRef}
        onChange={handleChange}
        placeholder={t("textAreaPlaceHolder")}
        rows={1} // Start with 1 row
      />
    </TextAreaContainer>
  );
}
