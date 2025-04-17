import classes from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../Language/LanguageSelector.tsx";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <LanguageSelector />
      <p>{t("footer")}</p>
    </footer>
  );
}
