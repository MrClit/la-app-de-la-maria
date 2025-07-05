import { ChangeEvent, RefObject } from "react";
import { useAppContext } from "../../provider/AppContext";

type LoadPhotoProps = {
  fileInputRef: RefObject<HTMLInputElement | null>;
};

export default function LoadPhoto({ fileInputRef }: LoadPhotoProps) {
  const { setPhotoSelected } = useAppContext();

  // Maneja la selección de archivo
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setPhotoSelected(reader.result as string);
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
