import { useContext } from "react";
import { TranslationContext } from "../../../service/traslationContext/TranslationContext";
import { dictionaryTranslations } from "./translationDiccionary";

const useTranslation = () => {
  const { language } = useContext(TranslationContext);

  return (key) => {
    // Obtener traducción para el idioma actual, o inglés si no se encuentra
    const translation =
      dictionaryTranslations[language]?.find((t) => t.key === key)?.value ||
      dictionaryTranslations["en"]?.find((t) => t.key === key)?.value;
      
    //console.log(`Translation for "${key}" in "${language}":`, translation);
    // Si no se encuentra ninguna traducción, retorna la clave misma
    return translation || key;
  };
};

export default useTranslation;
