import { useDispatch } from 'react-redux';
import { register } from 'redux/user/operations';
// import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
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
          minLength={2}
          maxLength={30}
          required
        />
      </label>
      <label className={css.label}>
        <p className={css.title}>Email</p>
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
        Register
      </button>
    </form>
  );
};
