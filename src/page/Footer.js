import React from 'react';
import { Typography, Grid } from '@material-ui/core';

function Footer() {
  return (
    <Grid
      item
      xs={12}
      style={{
        display: 'flex',
        marginRight: '5px',
        justifyContent: 'center',
        height: '4vh',
        alignItems: 'center'
      }}
    >
      <Typography style={{ color: 'white' }}>
        2022 Highradius Coporation. All rights reserved.
      </Typography>
    </Grid>
  );
}

export default Footer;