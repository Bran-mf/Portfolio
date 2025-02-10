import React from 'react';
import './CustomInput.scss';
interface IinputProps {
  type: 'text' | 'email' | 'password' | 'number';
  value: any;
  onChange: (name: string, value: any) => void;
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  onBlur?: (name: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
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
  onKeyDown,
}: IinputProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fixedValue = type === 'number' ? Number(value) : value;
    onChange(name, fixedValue);
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
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        onBlur={() => onBlur?.(name)}
      />
      <small className="custom-input__error">{error}</small>
    </div>
  );
};

export default CustomInput;
