import Image from 'next/image';
import { Paper, Grid } from '@material-ui/core';
import logo from 'assets/images/major-logo.png';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledMainLayout = styled(Paper)`
  @media screen and (max-width: 768px) {
    .logo img {
      min-width: 220px;
    }
  }
`;

export const MainLayout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Paper className='paper'>
      <Grid container justify='center'>
        <Image
          className='logo'
          src={logo}
          alt='logo'
          width={540}
          height={540}
        />
      </Grid>
      {children}
    </Paper>
  );
};
