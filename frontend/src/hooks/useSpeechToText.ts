import { useCallback } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { TFunction } from "i18next";

const useSpeechToText = (t: TFunction<"translation", undefined>) => {
  const {
    transcript,
    listening,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
    finalTranscript,
  } = useSpeechRecognition();

  const handelMicClick = useCallback(async () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Sorry, your browser doesn't support speech recognition.");
      return;
    }

    if (!isMicrophoneAvailable) {
      alert("Microphone is Not Available.");
      return;
    }

    const { state } = await navigator.permissions.query({
      name: "microphone" as PermissionDescriptor["name"],
    });

    if (state === "denied") {
      alert(
        "Microphone Permission Denied. Please grant your microphone access."
      );
      return;
    }

    const devices = await navigator.mediaDevices.enumerateDevices();
    const hasMic = devices.some((device) => device.kind === "audioinput");

    if (!hasMic) {
      alert("Microphone not found.");
      return;
    }

    try {
      if (!listening) {
        SpeechRecognition.startListening({
          continuous: false,
          language: t("languageToListen"),
        });
      }
      if (listening) {
        SpeechRecognition.stopListening();
      }
    } catch (error: unknown) {
      alert(
        "Please allow access to your microphone or check if it's connected."
      );

      console.error(error);
    }
  }, [browserSupportsSpeechRecognition, isMicrophoneAvailable, listening, t]);

  return {
    transcript,
    listening,
    resetTranscript,
    SpeechRecognition,
    handelMicClick,
    finalTranscript,
  };
};

export default useSpeechToText;
