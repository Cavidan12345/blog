import { Container } from '@mui/material';

import { AppRoutes } from '../../routes/Routes';

import { Header } from '../../components/sections/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <AppRoutes />
      </Container>
    </>
  );
};
