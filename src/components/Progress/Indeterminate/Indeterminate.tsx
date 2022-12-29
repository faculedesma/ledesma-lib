import React from 'react';
import './indeterminate.scss';

export interface IIndeterminateProps {
  label?: string;
}

const Indeterminate = ({ label = '' }: IIndeterminateProps): JSX.Element => {
  return (
    <div className="indeterminate">
      <div></div>
      <div></div>
      <span>{label}</span>
    </div>
  );
};

export default Indeterminate;
