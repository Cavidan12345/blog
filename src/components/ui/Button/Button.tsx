import React from 'react';
import { SxProps, Button as MuiButton } from '@mui/material';

import { CircularProgress } from './ButtonStyled';
import { Status } from '../../../types/types';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined';
  fullWidth?: boolean;
  sx?: SxProps;
  type?: 'submit' | 'button';
  isLoading?: Status;
};

export const Button = ({
  children,
  variant,
  sx,
  fullWidth = false,
  type = 'button',
  isLoading,
}: ButtonProps) => {
  return (
    <MuiButton
      disabled={isLoading === Status.fetching ? true : false}
      fullWidth
      type={type}
      variant={variant}
      sx={sx}>
      {isLoading === Status.fetching ? <CircularProgress /> : children}
    </MuiButton>
  );
};
