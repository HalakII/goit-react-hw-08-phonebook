import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from '../../redux/auth/operations';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.elements.name.value);
    console.log(form.elements.email.value);
    console.log(form.elements.password.value);

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Za-яА-Я]+(([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces"
          // required
        />
      </label>
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
          // title="Please enter a valid email address"
          // required
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          // required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
