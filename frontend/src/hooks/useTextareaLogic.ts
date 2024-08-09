import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { addQuestion, selectPendingResponce } from "../store/conversationSlice";
import { useCallback, useEffect, useRef, useState } from "react";
import useApi from "./useApi";
import useSpeechToText from "./useSpeechToText";

const useTextareaLogic = () => {
  const { t } = useTranslation();
  const isResponcePending = useSelector(selectPendingResponce);
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { reqAnswer } = useApi();

  const {
    transcript,
    listening,
    resetTranscript,
    SpeechRecognition,
    handelMicClick,
    finalTranscript,
  } = useSpeechToText(t);

  const handleChange = useCallback(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${Math.min(
      textareaRef.current.scrollHeight,
      10 * 20
    )}px`;

    textareaRef.current.style.borderRadius =
      textareaRef.current.scrollHeight > 48 ? "10px" : "20rem";
    setIsDisabled(textareaRef.current.value.trim().length < 2);
  }, []);

  const handleSendClick = useCallback(async () => {
    const question = textareaRef.current!.value.trim();
    if (!textareaRef.current || question.length < 2) return;

    SpeechRecognition.stopListening();

    const {
      payload: { id },
    } = dispatch(addQuestion(question));

    resetTranscript();
    setIsDisabled(true);
    textareaRef.current.value = "";
    handleChange();
    reqAnswer(id, question);
  }, [SpeechRecognition, dispatch, handleChange, reqAnswer, resetTranscript]);

  useEffect(() => {
    if (listening && transcript) {
      if (textareaRef.current) {
        textareaRef.current.value = transcript;
        handleChange();
      }
    }
  }, [listening, transcript, handleChange, textareaRef]);

  useEffect(() => {
    if (finalTranscript !== "") handleSendClick();
  }, [finalTranscript, handleSendClick]);

  return {
    t,
    textareaRef,
    isDisabled,
    isResponcePending,
    listening,
    handelMicClick,
    handleSendClick,
    handleChange,
  };
};

export default useTextareaLogic;
