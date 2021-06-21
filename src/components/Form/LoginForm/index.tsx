import { FormEvent } from 'react';
import Link from 'next/link';
import {
  Button,
  Grid,
  Input,
  InputLabel,
  InputProps,
  FormControl
} from '@material-ui/core';
import styled from 'styled-components';
import { useHooks } from './hook';

const StyledLoginForm = styled.form`
  .button-grid {
    margin-top: 20px;
  }

  .input-password-grid {
    margin-top: 20px;
  }

  .submit-button {
    width: 50%;
    height: 5vh;
    font-size: 30px;
  }
  .form-control-input {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    .submit-button {
      font-size: 4vw;
      min-width: 220px;
    }

    .form-control-input {
      min-width: 220px;
    }
  }
`;

interface LoginFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

interface GridCenteInput extends InputProps {
  gridClassName: string;
  label: string;
}

const GridCenterTextFiled = (props: GridCenteInput) => {
  const { gridClassName, required, label, ...rest } = props;
  return (
    <Grid container justify='center' className={gridClassName}>
      <FormControl className='form-control-input'>
        <InputLabel required={required}>{label}</InputLabel>
        <Input {...rest} />
      </FormControl>
    </Grid>
  );
};

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
      <GridCenterTextFiled
        gridClassName='input-id-grid'
        required={true}
        label='Email'
        className='input-id'
        type='email'
        name='email'
        onChange={e => handleSetId(e.target.value)}
      />
      <GridCenterTextFiled
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
          className='submit-button'
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
            className='submit-button'
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
