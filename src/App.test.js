import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  expect(screen.getByText(/استأجر راحتك ورفاهيتك الآن/i)).toBeInTheDocument();
});
