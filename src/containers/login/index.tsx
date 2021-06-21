import Image from 'next/image';
import { Grid, Paper } from '@material-ui/core';
import { LoginForm } from 'components';

import logo from 'assets/images/major-logo.png';

export const Login = () => {
  const hanldeSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <Paper className='paper'>
        <Grid container justify='center'>
          <Image src={logo} alt='logo' width={540} height={540} />
        </Grid>
        <LoginForm onSubmit={hanldeSubmit} />
      </Paper>
    </>
  );
};
