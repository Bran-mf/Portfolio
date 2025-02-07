import React from 'react';
import './Login.scss';
import CustomInput from '../../common/CustomInput/CustomInput';
import CustomButton from '../../common/CustomButton/CustomButton';
import useForm from '../../hooks/use-form';
import {
  formValidations,
  ILoginForm,
  loginForm_initialState,
} from './variables';
import { NavLink } from 'react-router';
const Login = () => {
  const { data, onChange, getFieldError,validate } = useForm<ILoginForm>(
    loginForm_initialState,
    formValidations
  );
  const handleOnChange = (name: string, value: string) => {
    onChange((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="login">
      <h1 className="login__tittle">LOGIN</h1>
      <div className="login__body">
        <CustomInput
          type="email"
          name="email"
          onChange={handleOnChange}
          value={data.email}
          placeholder="Email@something.com"
          label="Email"
          error={getFieldError('email')?.message}
          onBlur={validate}

        />

        <CustomInput
          type="password"
          name="password"
          onChange={handleOnChange}
          value={data.password}
          placeholder="Password"
          label="Password"
          error={getFieldError('password')?.message}
          onBlur={validate}
        />
      </div>
      <div className="login__footer">
        <CustomButton
          text="LOGIN"
          onClick={console.log}
          className="login__login-button"
        />
        <p>
          Don't have and account? <NavLink to='../SignUp' >sign-up</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
