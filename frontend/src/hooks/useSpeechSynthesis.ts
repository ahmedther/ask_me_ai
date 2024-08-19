/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useSpeechSynthesis = (speech: string | undefined, dontSpeak: boolean) => {
  const { i18n } = useTranslation();

  // const voice = useMemo(() => {
  //   return window.speechSynthesis
  //     .getVoices()
  //     .find(
  //       (v) =>
  //         v.name ===
  //         "Microsoft Zariyah Online (Natural) - Arabic (Saudi Arabia)"
  //     );
  // }, []);
  const voice = window.speechSynthesis
    .getVoices()
    .find(
      (v) =>
        v.name === "Microsoft Zariyah Online (Natural) - Arabic (Saudi Arabia)"
    );

  useEffect(() => {
    if (!speech || dontSpeak || !window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(speech);
    utterance.lang = i18n.language === "ar" ? "ar-SA" : "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;

    if (i18n.language === "ar" && voice) {
      utterance.voice = voice;
    }

    window.speechSynthesis.speak(utterance);
  }, [speech, dontSpeak, i18n.language]);

  return null;
};

export default useSpeechSynthesis;
