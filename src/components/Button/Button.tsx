import React from 'react';
import './button.scss';

type ButtonTypes = 'primary' | 'secondary';
type ButtonSizes = 'small' | 'medium' | 'large';

export interface IButtonProps {
  label: string;
  type: ButtonTypes;
  size: ButtonSizes;
  handleClick?: () => void;
}

const Button = ({
  label,
  type,
  size,
  handleClick
}: IButtonProps): React.ReactElement => {
  return (
    <button className={`button ${type} ${size}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
