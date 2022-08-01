import React from 'react';
import { useWallet } from 'use-wallet';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import Pit from '../Pit';
import NrwlBond from '../NrwlBond';
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
const BondCard = styled.div`
  background: rgba(255, 255, 255, 0.55);
  border-radius: 50px;
  padding: 20px; 
  color: #4b4453;
`;
const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};`; 

const Bonds = () => {
  const { path } = useRouteMatch();
  const { account } = useWallet();

return (
<Switch>
  <Page>
    <Route exact path={path}>
      <BackgroundImage />
      {!!account ? (
    <Container maxWidth="lg">
      <h2 align="center" style={{ fontSize: '70px', marginBottom: '5%' }}>BONDS</h2>
      
      <Grid container spacing={3} >
      <Grid item xs={12} sm={3} />
        <Grid item xs={12} sm={3} >
          <BondCard >
            <CardContent align="center">
              <h2 style={{ fontSize: '2rem', marginBottom: '2%'}} >
                WBOND
              </h2>
              <h2 style={{ fontSize: '16px', marginBottom: '10%'}} >
                Bond Token for WLRS
              </h2>
              <Box mt={2}>
                <TokenSymbol symbol="WBOND" />
              </Box>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button
                color="primary"
                style={{ 
                  width: '75%', 
                  height: '10%', 
                  marginBottom: '10%', 
                  padding: '8px', 
                  borderRadius: '12px', 
                }}
                component={Link}
                variant="#ffffff"
                to={`/bonds/wbond`}
              >
                View and Stake
              </Button>
            </CardActions>
          </BondCard>
        </Grid>
        <Grid item xs={12} sm={3}>
        <BondCard >
            <CardContent align="center">
            <h2 style={{ fontSize: '2rem', marginBottom: '2%'}} >
              NBOND 
            </h2>
            <h2 style={{ fontSize: '16px', marginBottom: '10%'}} >
                Bond Token for NRWL
            </h2>
            
              <Box mt={2}>
                <TokenSymbol symbol="NBOND" />
              </Box>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button
                color="primary"
                style={{ 
                  width: '75%', 
                  height: '10%', 
                  marginBottom: '10%', 
                  padding: '8px', 
                  borderRadius: '12px', 
                }}
                component={Link}
                variant="#ffffff"
                to={`/bonds/nbond`}
              >
                View and Stake
              </Button>
            </CardActions>
          </BondCard>
        </Grid> 
        <Grid item xs={12} sm={3} />


      </Grid>
      <h3 align="center" style={{ marginTop: '3%'}}>
      Learn About Frozen Walrus Bonds <StyledLink href='https://docs.frozenwalrus.finance/protocol-information/bonds '>Here!</StyledLink>
      </h3>
     
                 
    </Container>
  ) : (
    <UnlockWallet />
  )}
</Route>
<Route path={`${path}/wbond`}>
  <Pit />
</Route>
<Route path={`${path}/nbond`}>
  <NrwlBond />
</Route>
</Page>
</Switch>
);
};

export default Bonds;
