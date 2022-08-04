import React, { useCallback, useMemo } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import Column from '../../components/Column';
import Row from '../../components/Row';
import { Switch, useRouteMatch } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import ExchangeCard from './components/ExchangeCard';
import styled from 'styled-components';
import useRaffleStats from '../../hooks/useRaffleBalance';
import useGrapeFinance from '../../hooks/useTombFinance';
import { useTransactionAdder } from '../../state/transactions/hooks';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { Card, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LaunchCountdown from '../../components/LaunchCountdown';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
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
  margin-bottom: 2%; 
  font-size: 1.8rem; 
`; 
const LotterySubText = styled.h2`
  text-align: center; 
  font-size: 0.9rem; 
`; 
const LotterySubText1 = styled.h2`
  text-align: center; 
  font-size: 1.2rem; 
`; 
const LotterySubText2 = styled.h2`
  text-align: justify; 
  font-size: 1.2rem; 
`; 

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    paddingTop: '15px',
    paddingBottom: '15px',
    width: '100%',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    height: '1.3rem',
    fontFamily: 'superstar',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  link: {
    width: '24px',
    height: '24px',
    display: 'inline',
    marginLeft: '20px',
  },

  img: {
    width: '24px',
    height: '24px',
  },
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const Lottery: React.FC = () => {
  const startDate = new Date('2022-8-2 21:00:00Z');
  const endDate = new Date('2022-8-8 21:00:00Z');
  const raffleAddress = '0x4b8d4EAe1Bff52113d7DA8a7103e6fF9f2611A86';
  const { account } = useWallet();
  const grapeFinance = useGrapeFinance();
  const addTransaction = useTransactionAdder();
  const raffleStats = useRaffleStats(account, raffleAddress);
  const startTime = Number(startDate);
  const endTime = Number(endDate);
  const grapePrice = useMemo(() => (raffleStats ? Number(raffleStats.tokenInFtm).toFixed(2) : null), [raffleStats]);
  const raffleBals = useMemo(() => (raffleStats ? Number(raffleStats.totalSupply).toFixed(0) : null), [raffleStats]);
  const userBals = useMemo(() => (raffleStats ? Number(raffleStats.priceInDollars).toFixed(0) : null), [raffleStats]);
  const handleBuyBonds = useCallback(
    async (amount: string) => {
      const tx = await grapeFinance.sendTomb(amount, raffleAddress);
      addTransaction(tx, {
        summary: `SEND ${Number(amount).toFixed(2)} WLRS TO THE LOTTERY ${amount} `,
      });
    },
    [grapeFinance, addTransaction],
  );

  return (
    <Switch>
      <Page>
        <BackgroundImage />
        {!!account ? (
          <>
<div>
  <h2 style={{ fontSize: '70px', textAlign: 'center', marginBottom: '1%'}}>
  FROZEN WALRUS LOTTERY 
  </h2>
  <h2 style={{ fontSize: '35px', textAlign: 'center', marginBottom: '5%'}}>
  Use WLRS tokens for a chance at USDC prizes! 
  </h2>
</div>

<Grid container justify="center" spacing={3}  >

  <Grid xs={3} />
  <Grid item xs={6}   >
<div>        {/*      {Date.now() > endTime ? (
               <h2 style={{ fontSize: '3rem', textAlign: 'center' }}>Lottery Closed</h2>
              ) : (
                <h2 style={{ fontSize: '3rem', textAlign: 'center' }}>Lottery Open</h2>
              )}  */}
              {Date.now() < startTime ? (
      <LaunchCountdown
        deadline={startDate}
        description={'Lottery Starts In'}
        descriptionLink={''}
      ></LaunchCountdown>
    ) : (
      <LaunchCountdown
        deadline={endDate}
        description={'Lottery Closes On August 7 at 21:00 UTC'}
        descriptionLink={''}
      ></LaunchCountdown>
    )}
  </div>
</Grid>
<Grid xs={3} />

  <Grid item xs={12} sm={12} lg={6} style={{ height: '100%'}}>
    <BondCard style={{ color: '#000' }}>
      <LotteryText style={{ textAlign: 'center', marginTop: '10px', color: '#000' }}>LOTTERY STATUS </LotteryText>
      <Box style={{ margin: 'auto'}}>
        <LotterySubText1>
            
            1ST PRIZE: 2500 USDC <br /> 
            2ND PRIZE: 500 USDC <br /> 
            3RD PRIZE: 250 USDC <br />
          </LotterySubText1>
          <LotterySubText1 style={{textAlign: 'center', marginTop: '5%'}}>
            PRICE OF WLRS: ${grapePrice} <br /> 
            WLRS ENTERED: {raffleBals} <br /> 
            YOUR ENTRIES: {userBals}
          </LotterySubText1>
      
    
    <LotterySubText style={{ marginTop: '10%'}}>Your account: {account}</LotterySubText>
    </Box>
    </BondCard>
  </Grid>
  <Grid item xs={12} sm={12} lg={6} style={{ height: '100%'}}>
      <StyledCardWrapper>
        <ExchangeCard
          action="Enter Lottery"
          fromToken={grapeFinance.TOMB}
          fromTokenName="WLRS"
          toToken={grapeFinance.TBOND}
          toTokenName="TBOND"
          priceDesc={
            Date.now() < endTime && Date.now() > startTime
              ? 'LOTTERY IS OPEN! 5 WLRS = 1 ENTRY'
              : 'LOTTERY IS PRESENTLY CLOSED'
          }
          disabled={Date.now() < endTime && Date.now() > startTime ? false : true}
          onExchange={handleBuyBonds}>
          </ExchangeCard>
      </StyledCardWrapper>
  </Grid>
</Grid>
          </>
        ) : (
          <UnlockWallet />
        )}
      </Page>
    </Switch>
  );
};

const StyledBond = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default Lottery;
