import styled from 'styled-components';
import { Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const PostItemWrapper = styled(Card)`
  min-height: 198px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostItemTitle = styled(Typography)`
  word-break: break-word;
`;

export const EditLink = styled(Link)`
  margin-right: 10px;
`;
