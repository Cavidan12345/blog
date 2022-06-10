import { IconButton, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { Close } from '@mui/icons-material';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomAlert = () => {
  const snackbarState = useTypedSelector((state) => state.snackbar);
  const removeSnackbar = useActions();

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    removeSnackbar({ variant: snackbarState.variant, message: snackbarState.message, show: false });
  };

  return (
    <Snackbar open={snackbarState.show || false} onClose={handleClose}>
      <Alert
        severity={snackbarState.variant}
        sx={{ display: 'flex' }}
        action={
          <React.Fragment>
            <IconButton aria-label="close" color="inherit" sx={{ p: 0.5 }} onClick={handleClose}>
              <Close />
            </IconButton>
          </React.Fragment>
        }>
        {snackbarState.message}
      </Alert>
    </Snackbar>
  );
};
