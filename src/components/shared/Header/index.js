import React from 'react';
import { Link } from 'react-router-dom';

import { LogoImg, Nav, NavActions, HomeIcon, UserIcon, CartIcon } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to='/home'>
        <LogoImg />
      </Link>
      <NavActions>
        <Link to='/home'>
          <HomeIcon size={24} />
        </Link>
        <UserIcon size={24} />
        <Link to='/cart'>
          <CartIcon size={24} />
        </Link>
      </NavActions>
    </Nav>
  );
}