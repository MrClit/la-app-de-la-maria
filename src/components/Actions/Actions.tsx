import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

import classes from './Actions.module.css'
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {setOption} from "../../store/slices/appSlice.ts";

export default function Actions() {
  const dispatch = useAppDispatch();
  const {photoSelected} = useAppSelector(state => state.app)

  function handleLikeClick() {
    if (photoSelected) {
      dispatch(setOption('like'));
    }
  }

  function handleHateClick() {
    if (photoSelected) {
      dispatch(setOption('hate'));
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