import styled from 'styled-components';
import { Box, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled(Box)`
  background-color: #0c5696;
  color: #fff;
  padding: 15px;
  margin-bottom: 30px;
`;

export const Navbar = styled(Grid)`
  display: flex;
`;

export const NavbarLink = styled(NavLink)`
  color: #fff;
  margin-left: 15px;
`;
