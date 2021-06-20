import { mount } from '@cypress/react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'styles/teme';
import { LoginForm } from '.';

describe('<LoginForm>', () => {
  const loginData = {
    id: 'ghwjd7376@naver.com',
    password: '1234'
  };

  beforeEach(() => {
    mount(
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    );
  });

  it('render', () => {
    cy.get('.login-form');
  });

  it('value check', () => {
    cy.get('.input-id > input')
      .type(loginData.id)
      .should('have.value', loginData.id);
    cy.get('.input-password > input')
      .type(loginData.password)
      .should('have.value', loginData.password);
  });
});
