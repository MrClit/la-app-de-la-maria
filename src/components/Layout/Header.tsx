import classes from "./Header.module.css";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={classes.title}>{t("title")}</h1>
    </>
  );
}
