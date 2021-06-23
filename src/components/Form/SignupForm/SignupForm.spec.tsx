import { mount } from '@cypress/react';
import { SignupForm } from '.';
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'styles/teme';

describe('<SignupForm />', () => {
  beforeEach(() => {
    mount(
      <ThemeProvider theme={theme}>
        <SignupForm />
      </ThemeProvider>
    );
  });

  it('render', () => {
    cy.get('signup-form');
  });
});
