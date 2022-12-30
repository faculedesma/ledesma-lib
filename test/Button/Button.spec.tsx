import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../src/components/Button/Button';
import '@testing-library/jest-dom/extend-expect';

const buttonLabel = 'Button Text';

describe('<Button />', () => {
  it('renders default', () => {
    render(<Button>{buttonLabel}</Button>);
    const primaryButton = screen.getByRole('button', { name: 'button-solid' });
    expect(primaryButton).toHaveClass('solid');
  });

  it('renders outline button', () => {
    render(<Button type="outline">{buttonLabel}</Button>);
    const primaryButton = screen.getByRole('button', {
      name: 'button-outline'
    });
    expect(primaryButton).toHaveClass('outline');
  });

  it('renders text button', () => {
    render(<Button type="text">{buttonLabel}</Button>);
    const primaryButton = screen.getByRole('button', {
      name: 'button-text'
    });
    expect(primaryButton).toHaveClass('text');
  });

  it('renders small button', () => {
    render(<Button size="small">{buttonLabel}</Button>);
    const primaryButton = screen.getByRole('button', { name: 'button-solid' });
    expect(primaryButton).toHaveClass('solid');
    expect(primaryButton).toHaveClass('small');
  });

  it('renders large button', () => {
    render(<Button size="large">{buttonLabel}</Button>);
    const primaryButton = screen.getByRole('button', { name: 'button-solid' });
    expect(primaryButton).toHaveClass('solid');
    expect(primaryButton).toHaveClass('large');
  });
});
