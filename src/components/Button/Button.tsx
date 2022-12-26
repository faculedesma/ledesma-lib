import React from 'react';
import './button.scss';

type ButtonTypes = 'solid' | 'outline' | 'text';
type ButtonSizes = 'small' | 'medium' | 'large';
type SVGInHTML = HTMLElement & SVGElement;

export interface IButtonProps {
  children: string | SVGInHTML;
  type?: ButtonTypes;
  size?: ButtonSizes;
  className?: string;
  startIcon?: SVGElement;
  endIcon?: SVGElement;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  type = 'solid',
  size = 'medium',
  className = '',
  startIcon = undefined,
  endIcon = undefined,
  disabled = false,
  onClick = undefined
}: IButtonProps): JSX.Element => {
  const hasIcon = Boolean(startIcon) || Boolean(startIcon);
  return (
    <button
      className={`button ${type} ${size} ${className} ${
        hasIcon ? 'with-icon' : ''
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      <>
        {startIcon}
        {children}
        {endIcon}
      </>
    </button>
  );
};
