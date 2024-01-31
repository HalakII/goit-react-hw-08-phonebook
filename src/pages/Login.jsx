import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import css from './Contacts/Contacts.module.css';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';

const Login = () => {
  return (
    <div className={css.wrapper}>
      <SectionTitle title="Login" />
      <LoginForm />
    </div>
  );
};

export default Login;
