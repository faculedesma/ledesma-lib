import React from 'react';
import './button.scss';

type ButtonTypes = 'solid' | 'outline' | 'text';
type ButtonSizes = 'small' | 'medium' | 'large';

export interface IButtonProps {
  children: JSX.Element | string;
  id?: string;
  type?: ButtonTypes;
  size?: ButtonSizes;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<IButtonProps> = ({
  children,
  id = 'button',
  type = 'solid',
  size = 'medium',
  className = '',
  disabled = false,
  onClick = undefined
}): JSX.Element => {
  return (
    <button
      id={`${id}-${type}`}
      className={`button ${type} ${size} ${className}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={`${id}-${type}`}
    >
      {children}
    </button>
  );
};

export default Button;
