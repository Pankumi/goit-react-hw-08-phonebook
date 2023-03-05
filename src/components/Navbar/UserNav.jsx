import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/user/operations';
import { selectUser } from 'redux/user/selectors';
import css from './UserNav.module.css';

const AuthNav = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
      <ul className={css.box}>
        <li className={css.link}>
          <NavLink className={css.navMenu} to={'/contacts'}>
            CONTACTS
          </NavLink>
        </li>
        <li>
          <span className={css.user}>{user.name}</span>
          <button className={css.btnLogOut} type="button" onClick={handleLogout}>
            LOG OUT
          </button>
        </li>
      </ul>
  );
};

export default AuthNav;
