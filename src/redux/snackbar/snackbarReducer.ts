import { AlertColor } from '@mui/material';
import { SnackbarPayload } from './snackbarActions';
import { SnackbarTypes } from './snackbarTypes';

const initialState: { show: boolean; variant: AlertColor; message: string } = {
  show: false,
  variant: 'info',
  message: '',
};

const snackbarReducer = (
  state = initialState,
  action: { type: SnackbarTypes; payload: SnackbarPayload },
) => {
  const { type, payload } = action;
  switch (type) {
    case SnackbarTypes.SET_SNACKBAR:
      return {
        ...state,
        show: payload.show,
        variant: payload.variant,
        message: payload.message,
      };
    default:
      return state;
  }
};

export default snackbarReducer;
