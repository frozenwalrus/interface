import React, { useMemo, useState } from 'react';
import Page from '../../components/Page';
import { Box, Button, CardContent, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import montainsImg from '../../assets/img/hero-banner-moutains.png';

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      marginTop: '10px',
    },
    backgroundColor: '#284C7B',
  },
  bannerMountains: {
    width: '100%',
    marginBottom: '-5px',
    borderBottomRightRadius: '20px',
  },
  topBanner: {
    background: 'linear-gradient(129.61deg, #07C4FF 14.12%, #00F0E2 88.39%)',
    borderRadius: '20px',
  },
  innerBanner: {},
  bannerTitle: {
    color: '#FFF',
    fontSize: '36px',
    lineHeight: '66px',
  },
  bannerDescription: {
    color: '#282C42',
    fontSize: '20px',
    lineHeight: '28px',
  },
  bannerFooter: {
    color: '#282C42',
    fontSize: '20px',
    marginTop: '30px',
    zIndex: 10,
  },
  welcomeBox: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingBottom: '10px',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page>
      <Box className={classes.topBanner} mt={5}>
        <div className={classes.innerBanner}>
          <Grid container alignItems="flex-end">
            <Grid item xs={12} sm={8} md={6}>
              <div className={classes.welcomeBox}>
                <div className={classes.bannerTitle} style={{ fontWeight: 'bold' }}>
                  Welcome to FrozenWalrus
                </div>
                <div className={classes.bannerDescription} style={{ fontWeight: 'bold' }}>
                  <div>The advanced protocol</div>
                  <div>based on Leverage Yield Farming.</div>
                </div>
                <div className={classes.bannerFooter}>
                  If you want to know more,{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 'bold' }}
                    href="https://docs.frozenwalrus.finance/welcome"
                  >
                    check this website
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <img src={montainsImg} className={classes.bannerMountains} alt="Mountains" />
            </Grid>
          </Grid>
        </div>
      </Box>

      <Box mt={2}>
        <Grid container spacing={3} justify="center" alignItems='center'>
          <Grid item xs={12}>Dash 1</Grid>
          <Grid item xs={12} md={6}>Dash 2</Grid>
          <Grid item xs={12} md={6}>Dash 3</Grid>
          <Grid item xs={12}>Dash 4</Grid>
          <Grid item xs={12}>Dash 5</Grid>
          <Grid item xs={12} md={6}>Dash 6</Grid>
          <Grid item xs={12} md={6}>Dash 7</Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Dashboard;
