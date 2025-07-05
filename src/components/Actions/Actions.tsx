import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

import classes from './Actions.module.css'
import { useAppContext } from "../../provider/AppContext";

export default function Actions() {
  const { photoSelected, setOption } = useAppContext();

  function handleLikeClick() {
    if (photoSelected) {
      setOption('like');
    }
  }

  function handleHateClick() {
    if (photoSelected) {
      setOption('hate');
    }
  }

  return (
    <div className={classes['btn-container']}>
      <IconButton>
        <FavoriteIcon
          sx={{fontSize: 100}}
          color="success"
          onClick={handleLikeClick}
        />
      </IconButton>
      <IconButton>
        <HeartBrokenIcon
          sx={{fontSize: 100}}
          color="error"
          onClick={handleHateClick}
        />
      </IconButton>
    </div>
  );
}