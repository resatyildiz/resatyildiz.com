import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import Index from './page';

describe('Index page for EN', () => {
  describe('Render method', () => {
    it('should have h1 tag in en locale', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <Index />
        </NextIntlClientProvider>,
      );

      const heading = screen.getByRole('heading', {
        name: 'Who am I?',
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
