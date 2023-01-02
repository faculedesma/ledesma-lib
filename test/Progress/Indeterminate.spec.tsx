import React from 'react';
import { render } from '@testing-library/react';
import Indeterminate from '../../src/components/particles/progress/indeterminate';
import '@testing-library/jest-dom/extend-expect';

describe('<Indeterminate />', () => {
  it('renders default', () => {
    const { container } = render(<Indeterminate />);
    expect(container.firstChild).toHaveClass('indeterminate');
  });
});
