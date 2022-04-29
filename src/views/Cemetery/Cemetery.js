import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Bank from '../Bank';

import { Alert } from '@material-ui/lab';
import { Box, Container, Typography, Grid } from '@material-ui/core';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import CemeteryCard from './CemeteryCard';
import CemeteryImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { createGlobalStyle } from 'styled-components';

import useBanks from '../../hooks/useBanks';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${CemeteryImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const Cemetery = () => {
  const [banks] = useBanks();
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const activeBanks = banks.filter((bank) => !bank.finished);
  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />
          {!!account ? (
            <Container maxWidth="lg">
              <Typography color="primary.dark" align="center" variant="h2" style={{ marginTop: '-30px' }}>
                Farms
              </Typography>

              <Box mt={5}>
                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 2).length === 0}>
                  <Typography
                    color="primary.dark"
                    align="center"
                    variant="h4"
                    gutterBottom
                    style={{ marginTop: '-25px', marginBottom: '35px' }}
                  >
                    WSHARE Pools
                  </Typography>
                  <Alert variant="filled" severity="info" style={{ marginTop: '-25px', marginBottom: '35px' }}>
                    All below pools have ended. Please unstake and stake at{' '}
                    <a style={{ color: '#fff' }} href="https://arctic-fox.finance/farms">
                      Arctic Fox.
                    </a>
                  </Alert>
                  <Grid container spacing={3}>
                    <CemeteryCard />
                  </Grid>
                </div>
              </Box>
            </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
        <Route path={`${path}/:bankId`}>
          <BackgroundImage />
          <Bank />
        </Route>
      </Page>
    </Switch>
  );
};

export default Cemetery;
