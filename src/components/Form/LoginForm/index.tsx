import { FormEvent, useState } from 'react';
import { Button, Input } from '@material-ui/core';
import styled from 'styled-components';

const StyledLoginFrom = styled.form``;

interface LoginFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export const LoginForm = (props: LoginFormProps) => {
  const { onSubmit } = props;
  const [id, setId] = useState('');
  const [passowrd, setPassword] = useState('');
  return (
    <StyledLoginFrom
      className='login-form'
      onSubmit={e => {
        console.log(id);
        console.log(passowrd);
        if (onSubmit) {
          onSubmit(e);
        }
      }}
    >
      <Input
        className='input-id'
        value={id}
        onChange={e => {
          setId(e.target.value);
        }}
      />
      <Input
        className='input-password'
        type='password'
        value={passowrd}
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <Button className='submit-button' type='submit'>
        Submit
      </Button>
    </StyledLoginFrom>
  );
};
