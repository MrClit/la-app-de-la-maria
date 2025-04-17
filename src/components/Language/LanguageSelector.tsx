import { useTranslation } from "react-i18next";
import classes from "./LanguageSelector.module.css";

const languages = [
  { code: "ca", label: "Català" },
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className={classes["language-selector"]}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={classes["language-button"]}
          onClick={() => i18n.changeLanguage(lang.code)}
          disabled={i18n.language === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
