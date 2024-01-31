import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';
import css from './Contacts/Contacts.module.css';
const Register = () => {
  return (
    <div className={css.wrapper}>
      <title>Registration</title>
      <RegisterForm />
    </div>
  );
};

export default Register;
