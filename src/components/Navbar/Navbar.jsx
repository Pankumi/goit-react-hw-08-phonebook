import UserNav from 'components/Navbar/UserNav';
import UserMenu from 'components/Navbar/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';
import { useAuth } from 'hooks/useAuth';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <div className={css.box}>
        <h1 className={css.title}>PhoneBook</h1>
        <div className={css.nav}>
          <NavLink className={css.navMenu} to={'/'}>
            HOME
          </NavLink>
          {isLoggedIn ? <UserNav /> : <UserMenu />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
