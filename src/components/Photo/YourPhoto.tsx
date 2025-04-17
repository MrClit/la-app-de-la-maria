import { useRef, useState } from "react";

import IconButton from "@mui/material/IconButton";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Modal } from "@mui/material";

import classes from "./YourPhoto.module.css";
import CapturePhoto from "./CapturePhoto.tsx";
import { useAppSelector } from "../../store/hooks.ts";

import LoadPhoto from "./LoadPhoto.tsx";
import PhotoContainer from "../UI/PhotoContainer.tsx";
import { useTranslation } from "react-i18next";

export default function YourPhoto() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { photoSelected } = useAppSelector((state) => state.app);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const { t } = useTranslation();

  // Dispara el clic del input oculto
  const handleSelectImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <PhotoContainer
      title={t("your-photo")}
      image={photoSelected}
      placeholder={t("select-your-photo")}
    >
      <div className={classes["btn-container"]}>
        <IconButton onClick={() => setIsCameraOpen(true)}>
          <AddAPhotoOutlinedIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton onClick={handleSelectImage}>
          <AddPhotoAlternateOutlinedIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <LoadPhoto fileInputRef={fileInputRef} />
      </div>
      <Modal
        open={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        aria-labelledby="camera-modal"
        aria-describedby="webcam-capture"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(2px)",
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            },
          },
        }}
      >
        <CapturePhoto setIsCameraOpen={setIsCameraOpen} />
      </Modal>
    </PhotoContainer>
  );
}
