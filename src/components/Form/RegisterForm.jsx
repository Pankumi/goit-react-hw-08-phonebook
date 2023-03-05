import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/user/operations';
// import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    console.log('user >>', user);
    dispatch(register(user));

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <p className={css.title}> Username</p>
        <input
          className={css.input}
          type="text"
          name="name"
          ref={nameInputRef}
          minLength={2}
          maxLength={30}
          required
        />
      </label>
      <label className={css.label}>
        <p className={css.title}>Email</p>
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
        Register
      </button>
    </form>
  );
};
