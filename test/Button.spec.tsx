import React from 'react';
import { render } from '@testing-library/react';
import Button from '../src/components/Button/Button';
import '@testing-library/jest-dom/extend-expect';

const buttonLabel = 'Button Text';

describe('Button', () => {
  it('renders default', () => {
    const { queryAllByText, container } = render(
      <Button>{buttonLabel}</Button>
    );
    expect(queryAllByText(buttonLabel)).toHaveLength(1);
    expect(container.firstChild).toHaveClass('solid');
    expect(container.firstChild).toHaveClass('medium');
  });

  it('renders outline button', () => {
    const { queryAllByText, container } = render(
      <Button type="outline">{buttonLabel}</Button>
    );
    expect(queryAllByText(buttonLabel)).toHaveLength(1);
    expect(container.firstChild).toHaveClass('outline');
  });

  it('renders text button', () => {
    const { queryAllByText, container } = render(
      <Button type="text">{buttonLabel}</Button>
    );
    expect(queryAllByText(buttonLabel)).toHaveLength(1);
    expect(container.firstChild).toHaveClass('text');
  });

  it('renders small button', () => {
    const { queryAllByText, container } = render(
      <Button size="small">{buttonLabel}</Button>
    );
    expect(queryAllByText(buttonLabel)).toHaveLength(1);
    expect(container.firstChild).toHaveClass('solid');
    expect(container.firstChild).toHaveClass('small');
  });

  it('renders large button', () => {
    const { queryAllByText, container } = render(
      <Button size="large">{buttonLabel}</Button>
    );
    expect(queryAllByText(buttonLabel)).toHaveLength(1);
    expect(container.firstChild).toHaveClass('solid');
    expect(container.firstChild).toHaveClass('large');
  });
});
