import Image from 'next/image';
import { Paper, Grid } from '@material-ui/core';
import logo from 'assets/images/major-logo.png';
import { HTMLAttributes } from 'react';

export const MainLayout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Paper className='paper'>
      <Grid container justify='center'>
        <Image src={logo} alt='logo' width={540} height={540} />
      </Grid>
      {children}
    </Paper>
  );
};
