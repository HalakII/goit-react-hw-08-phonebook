import css from './RegisterForm.module.css';
export const RegisterForm = () => {
  return (
    <form className={css.form} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
        />
      </label>
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please enter a valid email address"
          required
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="The password should only contain Latin letters (both large and lowercase), numbers and other characters"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
