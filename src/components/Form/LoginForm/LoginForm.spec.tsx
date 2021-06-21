import React from 'react';
import { mount, mountHook } from '@cypress/react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'styles/teme';
import { LoginForm } from '.';
import { useHooks } from './hook';

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
    cy.waitForReact();
  });

  it('render', () => {
    cy.get('.login-form');
  });

  it('typing check', () => {
    cy.get('.input-id > input')
      .type(loginData.id)
      .should('have.value', loginData.id);
    cy.get('.input-password > input')
      .type(loginData.password)
      .should('have.value', loginData.password);

    cy.wait(1000);
  });

  it('hook check', () => {
    mountHook(() => useHooks()).then(res => {
      res.current.handleSetId(loginData.id);
      res.current.handleSetPassword(loginData.password);
      expect(res.current.id).to.equal(loginData.id);
      expect(res.current.password).to.equal(loginData.password);
    });
  });
});
