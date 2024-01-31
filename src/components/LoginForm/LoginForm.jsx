import React from 'react';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdMailUnread } from 'react-icons/io';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form
      className={css.form_wrapper}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        <IoMdMailUnread className={css.iconMail} />
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
          // title="Please enter a valid email address"
          // required
        />
      </label>
      <label className={css.label}>
        <RiLockPasswordFill className={css.iconPassword} />
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          // pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\\]{}|:<>/?]+$"
          // title="The password should only contain Latin letters (both large and lowercase), numbers and other characters"
          // required
        />
      </label>
      <button className={css.button_add} type="submit">
        Log In
      </button>
    </form>
  );
};