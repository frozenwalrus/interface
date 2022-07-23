import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import Masonry from '../Masonry';
import NrwlBoardroom from '../NrwlBoardroom';

import TokenSymbol from '../../components/TokenSymbol';
import Card from '../../components/Card';
import { Box, Container, Typography, Grid, CardActions, CardContent, Button } from '@material-ui/core';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import CemeteryImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { createGlobalStyle } from 'styled-components';



const BackgroundImage = createGlobalStyle`
  body {
    background: url(${CemeteryImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const Boardroom = () => {
  const { path } = useRouteMatch();
  const { account } = useWallet();

  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />
          {!!account ? (
            <Container maxWidth="lg">
              <Typography align="center" variant="h2" style={{ marginTop: '10px', marginBottom: '30px' }}>
                Boardrooms
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <Card>
                    <CardContent align="center">
                      <Typography variant="h5" component="h2">
                        WLRS
                      </Typography>
                      <Box mt={2}>
                        <TokenSymbol symbol="WLRS" />
                      </Box>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                      <Button
                        color="primary"
                        size="small"
                        style={{ width: '200px', height: '40px', marginBottom: '10%' }}
                        variant="contained"
                        component={Link}
                        to={`/boardroom/wlrs`}
                      >
                        View and Stake
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Card>
                    <CardContent align="center">
                      <Typography variant="h5" component="h2">
                        NRWL
                      </Typography>
                      <Box mt={2}>
                        <TokenSymbol symbol="NRWL" />
                      </Box>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                      <Button
                        color="primary"
                        size="small"
                        style={{ width: '200px', height: '40px', marginBottom: '10%' }}
                        variant="contained"
                        component={Link}
                        to={`/boardroom/nrwl`}
                      >
                        View and Stake
                      </Button>
                    </CardActions>
                  </Card>
                </Grid> 
              </Grid>
            </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
        <Route path={`${path}/wlrs`}>
          <Masonry />
        </Route>
        <Route path={`${path}/nrwl`}>
          <NrwlBoardroom />
        </Route>
      </Page>
    </Switch>
  );
};

export default Boardroom;
