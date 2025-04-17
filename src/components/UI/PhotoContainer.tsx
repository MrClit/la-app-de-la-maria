import { ReactNode } from "react";

import { useAppSelector } from "../../store/hooks.ts";

import classes from "./PhotoContainer.module.css";

type PhotoContainerProps = {
  title: string;
  image: string | null;
  placeholder: string;
  children?: ReactNode;
};

export default function PhotoContainer({
  title,
  image,
  placeholder,
  children,
}: PhotoContainerProps) {
  const { option } = useAppSelector((state) => state.app);

  let highlightedClass = "";

  if (option !== "") {
    highlightedClass = `${option}-highlighted`;
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      <div
        className={`${classes["img-container"]} ${classes[highlightedClass]}`}
      >
        {image && (
          <img
            src={image}
            alt="A picture of a person who wants be compared with an animal"
            className={classes.img}
          />
        )}
        {!image && <p>{placeholder}</p>}
      </div>
      {children}
    </div>
  );
}
