import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, NavActions, HomeIcon, UserIcon, CartIcon } from './styled';
import logo from '../../assets/imgs/logo.png';

export default function Header() {
  return (
    <Nav>
      <h1>LOGO VEM AQUI</h1>
      <NavActions>
        <Link to='/'>
          <HomeIcon size={24} />
        </Link>
        <UserIcon size={24} />
        <Link to='cart'>
          <CartIcon size={24} />
        </Link>
      </NavActions>
    </Nav>
  );
}