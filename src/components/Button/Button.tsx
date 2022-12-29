import React from 'react';
import './button.scss';

type ButtonTypes = 'solid' | 'outline' | 'text';
type ButtonSizes = 'small' | 'medium' | 'large';

export interface IButtonProps {
  children: JSX.Element | string;
  type?: ButtonTypes;
  size?: ButtonSizes;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

const Button = ({
  children,
  type = 'solid',
  size = 'medium',
  className = '',
  disabled = false,
  onClick = undefined
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={`button ${type} ${size} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
