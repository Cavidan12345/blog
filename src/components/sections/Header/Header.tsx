import { Container, Grid, Typography } from '@mui/material';

import { HeaderWrapper, NavbarLink, Navbar } from './HeaderStyles';

type LinksType = {
  path: string;
  label: string;
};

const links: LinksType[] = [
  { path: '/', label: 'Home' },
  { path: '/posts', label: 'Posts' },
  { path: '/posts/new', label: 'Create post' },
];

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Grid container>
          <Navbar item xs={9}>
            {links.map((link) => (
              <Typography>
                <NavbarLink key={link.path} to={link.path}>
                  {link.label}
                </NavbarLink>
              </Typography>
            ))}
          </Navbar>
        </Grid>
      </Container>
    </HeaderWrapper>
  );
};
