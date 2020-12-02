import React from 'react';
import { Link } from 'react-router-dom';

import { LogoImg, Nav, NavActions, HomeIcon, UserIcon } from './styled';
import CartResume from '../CartResume';

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
        <CartResume />
      </NavActions>
    </Nav>
  );
}