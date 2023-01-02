import React from 'react';
import './indeterminate.scss';

export interface IIndeterminateProps {
  id?: string;
  label?: string;
}

const Indeterminate: React.FC<IIndeterminateProps> = ({
  id = 'progress-indeterminate',
  label = ''
}): JSX.Element => {
  return (
    <div id={id} className="indeterminate">
      <div></div>
      <div></div>
      <span>{label}</span>
    </div>
  );
};

export default Indeterminate;
