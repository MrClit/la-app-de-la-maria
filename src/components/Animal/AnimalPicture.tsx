import { useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { setAnimalSelected } from "../../store/slices/appSlice.ts";
import PhotoContainer from "../UI/PhotoContainer.tsx";

import { getDogs } from "./ApiService.ts";
import { useTranslation } from "react-i18next";

type DogsApi = {
  message: string;
  status: string;
};

export default function AnimalPicture() {
  const dispatch = useAppDispatch();
  const { option, photoSelected, animalSelected } = useAppSelector(
    (state) => state.app,
  );
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
              dispatch(setAnimalSelected(data.message));
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

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }

    fetchedDogs();
  }, [option, photoSelected]);

  return (
    <PhotoContainer
      title={t("your-animal")}
      image={animalSelected}
      placeholder={t("choose-option")}
    />
  );
}
