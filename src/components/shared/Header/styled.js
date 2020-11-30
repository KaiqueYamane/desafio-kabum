import styled from 'styled-components';
import { FaHome, FaUserAlt, FaShoppingCart } from 'react-icons/fa';

import { primaryColor } from '../../../config/colors';
import logo from '../../../assets/imgs/logo.png';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
`;

export const NavActions = styled.div`
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeIcon = styled(FaHome)`
  color: black;
  margin: 0px 6px 0px 6px;
`;

export const CartIcon = styled(FaShoppingCart)`
  color: black;
  margin: 0px 6px 0px 6px;
`;

export const UserIcon = styled(FaUserAlt)`
  color: black;
  margin: 0px 6px 0px 6px;
`;

export const LogoImg = styled.img`
  /* width: 100%;
  max-height: 360px; */
`;

LogoImg.defaultProps = {
  src: logo
}