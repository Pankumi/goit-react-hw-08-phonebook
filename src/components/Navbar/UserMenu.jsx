import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <ul className={css.box}>
      <li className={css.link}>
        <NavLink className={css.navMenu} to={'/login'}>
          LOGIN
        </NavLink>
      </li>
      <li className={css.link}>
        <NavLink className={css.navMenu} to={'/register'}>
          REGISTER
        </NavLink>
      </li>
    </ul>
  );
}

export default UserMenu;
