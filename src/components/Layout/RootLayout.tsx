import classes from "./RootLayout.module.css";
import Header from "./Header.tsx";
import YourPhoto from "../Photo/YourPhoto.tsx";
import Actions from "../Actions/Actions.tsx";
import AnimalPicture from "../Animal/AnimalPicture.tsx";
import Footer from "./Footer.tsx";

export default function RootLayout() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Header/>
      </header>
      <main className={classes.main}>
        <div className={classes["your-picture"]}>
          <YourPhoto/>
        </div>
        <div className={classes["magic-area"]}>
          <Actions/>
        </div>
        <div className={classes["your-animal"]}>
          <AnimalPicture/>
        </div>
      </main>
      <footer className={classes.footer}>
        <Footer/>
      </footer>
    </div>
  );
}