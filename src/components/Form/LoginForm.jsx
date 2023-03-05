// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(logIn(user));
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <p className={css.title}>Email </p>
        <input className={css.input} type="email" name="email" required />
      </label>
      <label className={css.label}>
        <p className={css.title}>Password</p>
        <input
          className={css.input}
          type="password"
          name="password"
          minLength={7}
          maxLength={20}
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Log In
      </button>
    </form>
  );
};
