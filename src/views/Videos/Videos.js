import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
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

const Videos = () => {
  const { path } = useRouteMatch();
  const { account } = useWallet();

  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />
          {!!account ? (
            <Container maxWidth="lg">
              <h2 align="center" style={{ fontSize: '70px', marginBottom: '5%' }}>FROZEN WALRUS <br /> MEDIA</h2>
              <Grid container spacing={3} style={{ justifyContent: "center" }}>
                <Grid item xs={12} sm={4} >
                  
                </Grid>
                <Grid item xs={12} sm={4}>
                    
                </Grid> 
              </Grid>
            </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
        
      </Page>
    </Switch>
  );
};

export default Videos;
