import { FormEvent } from 'react';
import Link from 'next/link';
import { Button, Grid } from '@material-ui/core';
import styled from 'styled-components';
import { useHooks } from './hook';
import { GridCenterFormInput } from 'components/TestInput';

const StyledLoginForm = styled.form`
  .button-grid {
    margin-top: 20px;
  }

  .input-password-grid {
    margin-top: 20px;
  }

  .button {
    width: 540px;
    height: 5vh;
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    .button {
      font-size: 4vw;
      min-width: 220px;
    }
  }
`;

interface LoginFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export const LoginForm = (props: LoginFormProps) => {
  const { onSubmit } = props;
  const { handleSetId, handleSetPassword } = useHooks();

  return (
    <StyledLoginForm
      className='login-form'
      onSubmit={e => {
        if (onSubmit) {
          onSubmit(e);
        }
      }}
    >
      {/* <GridCenterFormInput
        gridClassName='input-id-grid'
        required={true}
        label='Email'
        className='input-id'
        type='email'
        name='email'
        onChange={e => handleSetId(e.target.value)}
      /> */}
      <GridCenterFormInput
        gridClassName='input-password-grid'
        required
        className='input-password'
        label='Password'
        type='password'
        name='password'
        onChange={e => handleSetPassword(e.target.value)}
      />
      <Grid container justify='center' className='button-grid'>
        <Button
          className='button'
          variant='contained'
          color='primary'
          type='submit'
        >
          로그인
        </Button>
      </Grid>
      <Grid container justify='center' className='button-grid'>
        <Link href='/signup' passHref>
          <Button
            className='button'
            variant='contained'
            color='primary'
            type='submit'
          >
            회원가입
          </Button>
        </Link>
      </Grid>
    </StyledLoginForm>
  );
};
