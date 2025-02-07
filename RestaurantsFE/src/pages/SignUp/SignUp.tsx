import React from 'react';
import CustomButton from '../../common/CustomButton/CustomButton';
import { NavLink } from 'react-router';
import CustomInput from '../../common/CustomInput/CustomInput';
import useForm from '../../hooks/use-form';
import './SignUp.scss';
import {
  formValidations,
  ISignUpForm,
  signUpForm_initialState,
} from './variables';
const SignUp = () => {
  const { data, onChange, getFieldError, validate } = useForm<ISignUpForm>(
    signUpForm_initialState,
    formValidations
  );
  const handleOnChange = (name: string, value: string) => {
    onChange((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="sign-up">
      <h1 className="sign-up__tittle">SIGN UP</h1>
      <div className="sign-up__body">
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
      <div className="sign-up__footer">
        <CustomButton
          text="SIGN UP"
          onClick={console.log}
          className="sign-up__login-button"
        />
        <p>
          Don't have and account? <NavLink to="../Login">sign up</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
