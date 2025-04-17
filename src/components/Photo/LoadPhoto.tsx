import { ChangeEvent, RefObject } from "react";
import { useAppDispatch } from "../../store/hooks.ts";
import { setPhotoSelected } from "../../store/slices/appSlice.ts";

type LoadPhotoProps = {
  fileInputRef: RefObject<HTMLInputElement | null>;
};

export default function LoadPhoto({ fileInputRef }: LoadPhotoProps) {
  const dispatch = useAppDispatch();

  // Maneja la selección de archivo
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        dispatch(setPhotoSelected(reader.result as string));
      };
      reader.readAsDataURL(file); // Convierte el archivo a base64
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      ref={fileInputRef}
      style={{ display: "none" }}
      onChange={handleFileChange}
    />
  );
}
