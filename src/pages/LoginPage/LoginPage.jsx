import { LoginForm } from 'components/Form/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <>
      <section>
        <div className={css.box}>
          <h1>Log in</h1>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
