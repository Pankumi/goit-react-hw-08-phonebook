import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    dispatch(logIn(user));
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <p className={css.title}>Email </p>
        <input 
          className={css.input} 
          type="email" 
          name="email" 
          ref={emailInputRef}
          required />
      </label>
      <label className={css.label}>
        <p className={css.title}>Password</p>
        <input
          className={css.input}
          type="password"
          name="password"
          ref={passwordInputRef}
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
