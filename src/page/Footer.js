import React from 'react';
import { Typography, Grid } from '@material-ui/core';

function Footer() {
  return (
    <Grid
      item
      xs={12}
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '4vh',
        alignItems: 'center',
        backgroundColor: '#2d4250'
      }}
    >
      <Typography style={{ color: 'white' }}>
        <span><a>Privacy Policy </a> | © 2022 Highradius.All Rights Reserved.</span>
      </Typography>
    </Grid>
  );
}

export default Footer;