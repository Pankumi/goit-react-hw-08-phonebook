import { RegisterForm } from 'components/Form/RegisterForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <section>
      <div className={css.box}>
        <h1>Register Form</h1>
        <RegisterForm />
      </div>
    </section>
  );
}
