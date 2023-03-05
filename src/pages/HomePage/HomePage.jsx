import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/user/selectors';
import css from './HomePage.module.css';

export default function HomePage() {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <section>
      <div className={css.box}>
        <h1>PhoneBook</h1>
        <p> A reliable place for your contacts! </p>
        <div>
          {isLogin ? (
            <button className={css.btn} type="button">
              <NavLink className={css.btnLink} to={'/contacts'}>
                Contacts
              </NavLink>
            </button>
          ) : (
            <div>
              <button className={css.btn} type="button">
                <NavLink className={css.btnLink} to={'/login'}>
                  Login
                </NavLink>
              </button>
              <button className={css.btn} type="button">
                <NavLink className={css.btnLink} to={'/register'}>
                  Register
                </NavLink>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
