import React from 'react';
import './CustomInput.scss';
interface IinputProps {
  type: 'text' | 'email' | 'password' | 'number';
  value: string;
  onChange: (name: string, value: string) => void;
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  onBlur?: (name:string) => void;
}
const CustomInput = ({
  placeholder,
  label,
  name,
  onChange,
  type,
  value,
  onBlur,
  error = '',
}: IinputProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  const errorClass = error ? 'custom-input__input--invalid' : '';
  return (
    <div className="custom-input">
      <label className={'custom-input__label'}>{label}</label>
      <input
        className={`custom-input__input ${errorClass}`}
        type={type}
        name={name}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        onBlur={()=>onBlur?.(name)}
      />
      <small className="custom-input__error">{error}</small>
    </div>
  );
};

export default CustomInput;
