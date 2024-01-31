import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import css from './Contacts/Contacts.module.css';

const Login = () => {
  return (
    <div className={css.wrapper}>
      <title>Login</title>
      <LoginForm />
    </div>
  );
};

export default Login;
