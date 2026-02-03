import { en } from "../translations/en";
import { fr } from "../translations/fr";

export const getTranslations = (language) => {
  return language === "en" ? en : fr;
};
