import { AlertColor } from '@mui/material';
import { Dispatch } from 'redux';
import { SnackbarTypes } from './snackbarTypes';

export type SnackbarPayload = {
  message: string;
  variant: AlertColor;
  show: boolean;
};

export const showSnackbar =
  ({ variant, message, show }: SnackbarPayload) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: SnackbarTypes.SET_SNACKBAR,
      payload: {
        variant: variant,
        message: message,
        show: show,
      },
    });

    // setTimeout(() => {
    //   dispatch({
    //     type: SnackbarTypes.REMOVE_SNACKBAR,
    //     payload: {
    //       show: false,
    //     },
    //   });
    // }, 5000);
  };
