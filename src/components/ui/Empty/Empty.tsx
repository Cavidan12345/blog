import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { EmptyWrapper } from './EmptyStyles';

type EmptyProps = {
  src: string;
  text: string;
  goBackBtn?: boolean;
  height?: number;
};

export const Empty = ({ src, text, goBackBtn, height }: EmptyProps) => {
  const navigate = useNavigate();
  return (
    <EmptyWrapper
      className="center"
      sx={{ width: '100%', flexDirection: 'column', height: height || 'auto' }}>
      <img src={src} alt="not-found" />
      <Typography variant="body2">{text}</Typography>
      {goBackBtn && (
        <Button variant="contained" onClick={() => navigate(-1)}>
          Go back
        </Button>
      )}
    </EmptyWrapper>
  );
};
