import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, useMediaQuery } from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import TokenSymbol from '../../components/TokenSymbol';
import CemeteryImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import usePegasaurus from '../../hooks/Pegasaurus/usePegasaurus';
import PegasaurusInfo from './components/PegasaurusInfo';
import usePegasaurusRewards from '../../hooks/Pegasaurus/usePegasaurusRewards'; 
import tvl from '../../assets/img/tvl.png'; 


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
 const Element = styled.div`
  flex-direction: column;
`; 


const Pegasaurus: React.FC = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const { account } = useWallet();
  const { path } = useRouteMatch();
  const { Pegasaurus } = usePegasaurus(); 
  const { rewardTokensPS2, totalRewardValuePS2, aprPS2 } = usePegasaurusRewards(Pegasaurus);
console.log(Pegasaurus)

  return (
<Switch>
  <Page>
    <Route exact path={path}>
    <BackgroundImage />
       
         <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>PEG DEFENDER </h2>
         
      {!!account ? (
        <Container maxWidth="xl">
          <div></div>
          
          {Pegasaurus && rewardTokensPS2 &&  (
                
<Box mt={3}>
  <HomeCard>
  <Grid container style={{ justifyContent: 'center', alignItems: 'center' }} >
        <Grid item>
          <TokenSymbol size={120} symbol={'WLRS'} />
        </Grid>
  </Grid>
  <div>
        <h2 style={{ textTransform: 'none', fontSize: '2.0rem', fontWeight: 'bold', marginTop: '10px', 
        textAlign: 'center' }}>
          WLRS Peg Defender! <br /> 
        </h2>
       
        <h2 style={{ textTransform: 'none', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px', 
        textAlign: 'center' }}>
        Deposit WLRS-USDC-LP and earn WSHARE Rewards
        </h2>

    <Grid
        container
        spacing={2}
        style={{
          marginTop: '5px',
          justifyContent: 'center' }} >               
        <Grid item>
          <TokenSymbol size={72} symbol={'WSHARE'} />
        </Grid>
                
  </Grid>
  <h2 style={{ marginTop: '20px', textAlign: 'center'  }}>
      Withdrawal fees are based on TWAP. Fees decrease the higher WLRS price goes, ceasing at 1.25 TWAP. Read about the general principles of
      the Peg Campaign Pool <StyledLink href="https://docs.frozenwalrus.finance/protocol-information/pcp-campaign">here! </StyledLink>
      </h2> 
  <h2 style={{ textTransform: 'capitalize', fontSize: '2rem', marginTop: '20px', textAlign: 'center' }}>
  
      Total Value Locked: ${Number(Pegasaurus.totalDesposits) * 10**6}
        </h2> 
  </div>
  </HomeCard>
    <div
      style={{
        marginTop: '35px',}} >
      <PegasaurusInfo
        Pegasaurus={Pegasaurus}
        rewardTokens={rewardTokensPS2}
        totalRewardValue={totalRewardValuePS2}
        apr={aprPS2}
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

export default Pegasaurus;
