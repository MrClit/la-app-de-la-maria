import classes from "./CapturePhoto.module.css";
import Webcam from "react-webcam";
import {useCallback, useRef} from "react";

import {
  CameraAlt as CameraIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import IconButton from "@mui/material/IconButton";
import {setPhotoSelected} from "../../store/slices/appSlice.ts";
import {useAppDispatch} from "../../store/hooks.ts";

type CapturePhotoProps = {
  setIsCameraOpen: (isCameraOpen: boolean) => void;
}

export default function CapturePhoto({ setIsCameraOpen}: CapturePhotoProps) {
  const webcamRef = useRef<Webcam | null>(null);
  const dispatch = useAppDispatch();


  // Configuración de la cámara
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user" // Cambia a "environment" para usar la cámara trasera
  }

  // Capturar foto desde la cámara
  const capturePhoto = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(setPhotoSelected(imageSrc))
      setIsCameraOpen(false); // Cierra la cámara después de capturar
    }
  }, [dispatch, setIsCameraOpen]);

  return (
    <div className={classes["camera-container"]}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className={classes.webcam}
        style={{
          border: "3px solid #e0e0e0", // Borde destacado
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      />
      <div className={classes["controls-container"]}>
        <IconButton
          onClick={capturePhoto}
          color="primary"
          size="large"
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          <CameraIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>

        <IconButton
          onClick={() => setIsCameraOpen(false)}
          color="secondary"
          size="large"
          sx={{
            border: "1px solid #ff1744",
            "&:hover": { backgroundColor: "#ffebee" },
          }}
        >
          <CloseIcon fontSize="large" sx={{ color: "#d32f2f" }} />
        </IconButton>
      </div>
    </div>
  );
}