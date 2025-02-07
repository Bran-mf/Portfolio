import React from 'react';
import './CustomButton.scss';

interface ICustomButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  type?: 'cta' | 'primary' | 'secondary';
}
const CustomButton = ({
  onClick,
  text,
  className = '',
  type = 'primary',
}: ICustomButtonProps) => {
  return (
    <button className={`custom-button custom-button--${type} ${className} `} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
