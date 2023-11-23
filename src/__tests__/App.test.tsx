import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from '../App';

// Tests
describe('Renders main page correctly', async () => {
  /**
   * Resets all renders after each test
   */
  afterEach(() => {
    cleanup();
  });

  it('Should render the page correctly', () => {
    // Setup
    render(<App />);
    const h2 = screen.queryByText('Home');

    // Expectations
    expect(h2).toBeInTheDocument();
  });
  it('Should render login button', () => {
    render(<App />);
    const loginLink = screen.getByRole('link', {
      name: /Login/i,
    });
    expect(loginLink).toBeInTheDocument();
  });
  it('Should render login form when login button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    const loginLink = screen.getByRole('link', {
      name: /Login/i,
    });
    expect(loginLink).toBeInTheDocument();
    await user.click(loginLink as HTMLElement);
    expect(loginLink).not.toBeInTheDocument();
    expect(loginLink).not.toBeInTheDocument();
    const loginForm = screen.getByRole('textbox');
    expect(loginForm).toBeInTheDocument();
  });
});
