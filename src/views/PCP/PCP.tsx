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



const TITLE = 'ames.defi | Peg Pool';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${CemeteryImage}) no-repeat !important;
    background-size: cover !important;
  }
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
                  <Grid container style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Grid item>
                      <TokenSymbol size={120} symbol={'WLRS'} />
                    </Grid>
                  </Grid>
                  
                  <div>
                    <h2
                      style={{ textTransform: 'none', fontSize: '2.0rem', fontWeight: 'bold', marginTop: '20px', 
                    textAlign: 'center' }}
                    >
                      WLRS Peg Campaign Pool! <br /> 
                      Deposit USDC.e and get WSHARE and USDC.e Rewards 
                    </h2>
                    <Grid
                    container
                    spacing={2}
                    style={{
                      marginTop: '15px',
                      justifyContent: 'center' 
                    }}
                  >
                    <Grid item>
                      <TokenSymbol size={72} symbol={'WSHARE'} />
                    </Grid>
                    <Grid item>
                      <TokenSymbol size={72} symbol={'USDC'} />
                    </Grid>              
                  </Grid>
                    <h2 style={{ marginTop: '20px', textAlign: 'center'  }}>
                      Withdrawal fees are based on TWAP, with fees decreasing the closer WLRS is to peg. 
                      </h2>

                    <h2
                      style={{ textTransform: 'capitalize', fontSize: '2rem', marginTop: '20px', textAlign: 'center' }}
                    >
                      Total Value Locked: ${pegPool.totalDesposits}
                    </h2>

                    <div
                      style={{
                        marginTop: '35px',
                      }}
                    >
                      <PegPoolInfo
                        pegPool={pegPool}
                        rewardTokens={rewardTokens}
                        totalRewardValue={totalRewardValue}
                        apr={apr}
                      />
                    </div>
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
