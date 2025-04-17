import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import es from "./lang/es.json";
import ca from "./lang/ca.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    ca: { translation: ca },
  },
  lng: "ca", // Idioma por defecto
  fallbackLng: "ca", // Idioma de respaldo
  interpolation: {
    escapeValue: false, // React ya protege de XSS
  },
});

export default i18n;
