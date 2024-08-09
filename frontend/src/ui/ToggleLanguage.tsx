import { useTranslation } from "react-i18next";
import styles from "./ToggleLanguage.module.css";

const Toggle = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={handleLanguageChange} />
      <div className={styles.slider}>
        <span>{t("languageEN")}</span>
        <span>{t("languageAR")}</span>
      </div>
    </label>
  );
};

export default Toggle;
