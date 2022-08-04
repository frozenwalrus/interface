import React from 'react';
import styled from 'styled-components';
import { useWallet } from 'use-wallet';
import Row from '../../components/Row';
import Column from '../../components/Column';
import { Box, Container, Typography, Grid, CardActions, CardContent, Button } from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import CemeteryImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { createGlobalStyle } from 'styled-components';
import Card from '../../components/Card';
import Countdown, { CountdownRenderProps } from 'react-countdown';


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
const LotteryText = styled.h2`
  text-align: center; 
  margin-bottom: 10%; 
  font-size: 1.8rem; 
`; 

const Lottery = () => {
  const { account } = useWallet();

return (
<Page>
<BackgroundImage />
  <Container maxWidth="xl">
    <div>
    <h2 style={{ fontSize: '70px', textAlign: 'center', marginBottom: '1%'}}>
      FROZEN WALRUS LOTTERY 
    </h2>
    <h2 style={{ fontSize: '35px', textAlign: 'center', marginBottom: '10%'}}>
      Use WLRS tokens for a chance at USDC prizes! 
    </h2>
    </div>
<Grid container spacing={3}>
      
  <Grid item xs={12} sm={4}>
    <BondCard>
      <LotteryText>
        HOW IT WORKS 
      </LotteryText>
    </BondCard> 
  </Grid>
  <Grid item xs={12} sm={4}  >
    <BondCard>
    <LotteryText style={{ marginBottom: '10%'}}>
      PRIZE TIERS 
    </LotteryText>
    </BondCard>
  </Grid>
  <Grid item xs={12} sm={4}>
    <BondCard>
    <LotteryText style={{ marginBottom: '10%'}}>
      DEADLINES
    </LotteryText>
    </BondCard>
  </Grid>
</Grid>
    
   
    
  </Container>
</Page>
);
};

export default Lottery;
