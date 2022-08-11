import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent } from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import PegPoolInfo from './components/PegPoolInfo';
import usePegPool from '../../hooks/usePegPool';
import usePegPoolRewards from '../../hooks/usePegPoolRewards';
import TokenSymbol from '../../components/TokenSymbol';
import CemeteryImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const TITLE = 'ames.defi | Peg Pool';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${CemeteryImage}) no-repeat !important;
    background-size: cover !important;
  }
`;
const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};`; 

const HomeCard = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  padding: 20px; 
  box-shadow: 6px 6px 12px black; 
  color: #4b4453;
`;

const PCP: React.FC = () => {
  const { account } = useWallet();
  const { path } = useRouteMatch();
  const { pegPool } = usePegPool();
  const { rewardTokens, totalRewardValue, apr } = usePegPoolRewards(pegPool);

  return (
<Switch>
  <Page>
    <Route exact path={path}>
    <BackgroundImage />
      <div>
         <h2 style={{ textAlign: 'center', fontSize: '3rem' }}>PEG CAMPAIGN POOL</h2>
      </div>
      {!!account ? (
        <Container maxWidth="xl">
          <div></div>
          
          {pegPool && rewardTokens && (
                
<Box mt={5}>
  <HomeCard>
  <Grid container style={{ justifyContent: 'center', alignItems: 'center' }} >
        <Grid item>
          <TokenSymbol size={120} symbol={'WLRS'} />
        </Grid>
  </Grid>
  <div>
        <h2 style={{ textTransform: 'none', fontSize: '2.0rem', fontWeight: 'bold', marginTop: '20px', 
        textAlign: 'center' }}>
          WLRS Peg Campaign Pool! <br /> 
        </h2>
        <h2 style={{ textTransform: 'none', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px', 
        textAlign: 'center' }}>
        Deposit USDC.e and get WSHARE and AVAX Rewards
        </h2>

    <Grid
        container
        spacing={2}
        style={{
          marginTop: '15px',
          justifyContent: 'center' }} >               
        <Grid item>
          <TokenSymbol size={72} symbol={'WSHARE'} />
        </Grid>
        <Grid item>
          <TokenSymbol size={72} symbol={'WAVAX'} />
        </Grid>              
  </Grid>
  <h2 style={{ marginTop: '20px', textAlign: 'center'  }}>
      Withdrawal fees are based on TWAP, with fees decreasing the closer WLRS is to peg. Read about 
      the Peg Campaign Pool <StyledLink href="https://docs.frozenwalrus.finance/protocol-information/pcp-campaign">here! </StyledLink>
      </h2> {/*
  <h2 style={{ textTransform: 'capitalize', fontSize: '2rem', marginTop: '20px', textAlign: 'center' }}>
  
      Total Value Locked: ${pegPool.totalDesposits}
        </h2> */}
  </div>
  </HomeCard>
  <div
      style={{
        marginTop: '35px',}} >
      <PegPoolInfo
        pegPool={pegPool}
        rewardTokens={rewardTokens}
        totalRewardValue={totalRewardValue}
        apr={apr}
      />
    </div>
</Box>
)}
    </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
      </Page>
    </Switch>
  );
};

export default PCP;
