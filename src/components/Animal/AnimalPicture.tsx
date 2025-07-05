import { useEffect, useRef } from "react";

import PhotoContainer from "../UI/PhotoContainer.tsx";
import { getDogs } from "./ApiService.ts";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../provider/AppContext";

type DogsApi = {
  message: string;
  status: string;
};

export default function AnimalPicture() {
  const { option, photoSelected, animalSelected, setAnimalSelected } = useAppContext();
  const intervalRef = useRef<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchedDogs() {
      if (option !== "" && photoSelected) {
        let counter = 0;
        const totalUpdates = 10;

        intervalRef.current = setInterval(async () => {
          if (counter < totalUpdates) {
            try {
              const data = (await getDogs()) as DogsApi;
              setAnimalSelected(data.message);
              counter++;
            } catch (error) {
              console.error("Error fetching dog:", error);
              clearInterval(intervalRef.current!);
            }
          } else {
            clearInterval(intervalRef.current!);
          }
        }, 100);
      }
    }

    fetchedDogs();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [option, photoSelected, setAnimalSelected]);

  return (
    <PhotoContainer
      title={t("your-animal")}
      image={animalSelected}
      placeholder={t("choose-option")}
    />
  );
}
