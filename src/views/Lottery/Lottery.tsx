import React, { useCallback, useMemo } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import Column from '../../components/Column';
import Row from '../../components/Row';
import { Switch, useRouteMatch } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import ExchangeCard from './components/ExchangeCard';
import ExchangeCardNRWL from './components/ExchangeCardNRWL'; 
import useNrwlStats from '../../hooks/useNrwlStats';
import useTombStats from '../../hooks/useTombStats';

import styled from 'styled-components';
import useRaffleStats from '../../hooks/useRaffleBalance';
import useNRWLRaffleStats from '../../hooks/useRaffleBalanceNRWL';
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
  font-size: 2rem; 
`; 
const LotterySubText = styled.h2`
  text-align: center; 
  font-size: 0.9rem; 
`; 
const LotterySubText1 = styled.h2`
  text-align: center; 
  font-size: 1.0rem; 
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
  const nrwlRaffleAddress = '0x4b8d4EAe1Bff52113d7DA8a7103e6fF9f2611A86';
  const { account } = useWallet();
  const grapeFinance = useGrapeFinance();
  const addTransaction = useTransactionAdder();
  const raffleStats = useRaffleStats(account, raffleAddress);
  const nrwlRaffleStats= useNRWLRaffleStats(account, nrwlRaffleAddress);
  const nrwlStats = useNrwlStats();
  const tombStats = useTombStats();
  const tombPriceInDollars = useMemo(() => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null), [tombStats]);
  const nrwlPriceInDollars = useMemo(() => (nrwlStats ? Number(nrwlStats.priceInDollars).toFixed(2) : null), [nrwlStats]);
  const nrwlPriceInFTM = useMemo(() => (nrwlStats ? Number(nrwlStats.tokenInFtm).toFixed(4) : null), [nrwlStats]);
  const startTime = Number(startDate);
  const endTime = Number(endDate);
  const grapePrice = useMemo(() => (raffleStats ? Number(raffleStats.tokenInFtm).toFixed(2) : null), [raffleStats]);
  const nrwlPrice = useMemo(() => (nrwlRaffleStats ? Number(nrwlRaffleStats.tokenInFtm).toFixed(2) : null), [nrwlRaffleStats]);

  const raffleBals = useMemo(() => (raffleStats ? Number(raffleStats.totalSupply).toFixed(0) : null), [raffleStats]);
  const nrwlRaffleBals = useMemo(() => (nrwlRaffleStats ? Number(nrwlRaffleStats.totalSupply).toFixed(0) : null), [nrwlRaffleStats]);

  const userBals = useMemo(() => (raffleStats ? Number(raffleStats.priceInDollars).toFixed(0) : null), [raffleStats]);
  const nrwluserBals = useMemo(() => (nrwlRaffleStats ? Number(nrwlRaffleStats.priceInDollars).toFixed(0) : null), [nrwlRaffleStats]);

  const handleBuyBonds = useCallback(
    async (amount: string) => {
      const tx = await grapeFinance.sendTomb(amount, raffleAddress);
      addTransaction(tx, {
        summary: `SEND ${Number(amount).toFixed(2)} WLRS TO THE LOTTERY ${amount} `,
      });
    },
    [grapeFinance, addTransaction],
  );
  const handleBuyBondsNRWL = useCallback(
    async (amount: string) => {
      const tx = await grapeFinance.sendNRWL(amount, raffleAddress);
      addTransaction(tx, {
        summary: `SEND ${Number(amount).toFixed(2)} NRWL TO THE LOTTERY ${amount} `,
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
  <h2 style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1%'}}>
  FROZEN WALRUS LOTTERY 
  </h2>
  <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '5%'}}>
  Use Frozen Walrus tokens for a chance at USDC prizes! 
  </h2>
</div>

<Grid container justify="center" spacing={3}  >


<Grid alignItems='center' item xs={12} sm={9}>
    <BondCard >
      <LotteryText style={{ textAlign: 'center', marginTop: '10px', color: '#000' }}>LOTTERY STATUS </LotteryText>
              <h2 style={{ textAlign: 'center', fontSize:'1.2rem' }}>
                Deadline to purchase entry to Frozen Walrus Lottery: August 7, 2022 at 2100 UTC</h2>
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
      <h2>
      <LaunchCountdown
        deadline={endDate}
        description={''}
        descriptionLink={''}
      ></LaunchCountdown> </h2>
    )}
    </div>



         <Row>
            <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width:'25%', margin:'3%'}}>
                WLRS PRICE: 
              </LotterySubText1>
              <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width: '40%', margin: '3%'}}>
                ${tombPriceInDollars}
              </LotterySubText1>
              <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width:'25%', margin:'3%'}}>
                NRWL PRICE: 
              </LotterySubText1>
              <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width: '40%', margin: '3%'}}>
                ${nrwlPriceInDollars}
              </LotterySubText1>
        </Row>
        <Row>
        <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width:'25%', margin:'3%'}}>
                WLRS ENTERED:
            </LotterySubText1>
            <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width: '40%', margin: '3%'}}>
                {raffleBals}  
              </LotterySubText1> 
            <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width:'25%', margin:'3%'}}>
                NRWL ENTERED:
            </LotterySubText1>
            <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width: '40%', margin: '3%'}}>
                {nrwlRaffleBals}  
              </LotterySubText1> 
            
        </Row>
        <Row>
            <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width:'25%', margin:'3%'}}>
                YOUR WLRS ENTRIES: 
            </LotterySubText1>
            <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width: '40%', margin: '3%'}}>
                {userBals}
            </LotterySubText1>
            <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width:'25%', margin:'3%'}}>
                YOUR NRWL ENTRIES: 
            </LotterySubText1>
            <LotterySubText1 style={{textAlign: 'left', marginTop: '5%', width: '40%', margin: '3%'}}>
                {nrwluserBals}
            </LotterySubText1>
        </Row>
    
    <LotterySubText style={{ marginTop: '5%'}}>Your account: </LotterySubText>
    <LotterySubText style={{ fontSize: '0.8rem'}}>
    {account}
    </LotterySubText>
    </BondCard>
  </Grid>  
  

  
  <Grid item xs={12} sm={4}  style={{ height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection:'row' }}>
      <StyledCardWrapper>
        <ExchangeCard
          action="Enter Lottery"
          fromToken={grapeFinance.TOMB}
          fromTokenName="WLRS"
          toToken={grapeFinance.TBOND}
          toTokenName="TBOND"
          priceDesc="5 WLRS = 1 ENTRY"
            
          onExchange={handleBuyBonds}>
          </ExchangeCard>
      </StyledCardWrapper>
  </Grid>
  <Grid item  xs={12} sm={4}  style={{ height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <StyledCardWrapper>
        <ExchangeCardNRWL
          action="Enter Lottery"
          fromToken={grapeFinance.NRWL}
          fromTokenName="NRWL"
          toToken={grapeFinance.TBOND}
          toTokenName="TBOND"
          priceDesc="5 NRWL = 1 ENTRY"
            
          onExchange={handleBuyBondsNRWL}>
          </ExchangeCardNRWL>
      </StyledCardWrapper>
  </Grid>
  <Grid item xs={12} sm={6}   >
  <BondCard style={{ color: '#000' }}>
      <LotteryText style={{ textAlign: 'center', marginTop: '1px', color: '#000' }}>PRIZES </LotteryText>
       <Row  style={{ textAlign: 'center', alignItems: 'center', }}>
        <LotterySubText1 style={{width: '25%', margin: '3%'}}> <u>1ST PRIZE</u><br /> 2500 USDC </LotterySubText1>
        <LotterySubText1 style={{width: '25%', margin: '3%'}}> <u>2ND PRIZE</u><br /> 500 USDC </LotterySubText1>
        <LotterySubText1 style={{width: '25%', margin: '3%'}}> <u>3RD PRIZE</u><br /> 250 USDC </LotterySubText1>
      </Row>
  </BondCard>

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
