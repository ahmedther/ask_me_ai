import { useTranslation } from "react-i18next";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { FadedHeading, HeroContainer } from "../styles/newConvPage/newConvHero";

export default function NewConvHero() {
  const { t } = useTranslation();
  return (
    <HeroContainer
      key="newConvHero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <IoLogoFreebsdDevil
        size={100}
        style={{ color: "grey", opacity: "0.1" }}
      />
      <FadedHeading>{t("newConvHeading")} </FadedHeading>
    </HeroContainer>
  );
}
