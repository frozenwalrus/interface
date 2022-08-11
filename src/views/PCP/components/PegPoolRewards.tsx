import { Box, Button, Card, CardContent, Typography, Grid } from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import React, { useEffect, useState } from 'react';
import { PegPoolToken } from '../../../tomb-finance/types';
import TokenSymbol from '../../../components/TokenSymbol';
import usePegPoolCompound from '../../../hooks/usePegPoolCompound';
import usePegPoolRewardsClaim from '../../../hooks/usePegPoolRewardsClaim';
import usePegPoolWithdrawFee from '../../../hooks/usePegPoolWithdrawFee';
import { black } from '../../../theme/colors';
import styled from 'styled-components';

const HomeCardPurple = styled.div`
  background: rgba(214, 211, 242, 0.8);
  border-radius: 50px;
  box-shadow: 6px 6px 12px black; 
  padding: 20px; 
  color: #4b4453;
`;
const PegPoolRewards: React.FC<{
  rewardTokens: PegPoolToken[];
  totalRewardValue: string;
  apr: { daily: string; yearly: string };
  
}> = ({ rewardTokens, totalRewardValue, apr }) => {
  const [hasRewards, setHasRewards] = useState(false);
  const { doClaim } = usePegPoolRewardsClaim();
  const { onCompound } = usePegPoolCompound();
  const { withdrawFeePercent } = usePegPoolWithdrawFee();
console.log(apr); 
  const checkRewards = () => {
    let hasClaim = false;
    rewardTokens.forEach((rw) => (hasClaim = rw.pendingValueBN?.gt(0)));
    setHasRewards(hasClaim);
  };

  const handleClaim = () => {
    if (hasRewards) {
      doClaim();
    }
  };
  useEffect(() => {
    if (rewardTokens?.length) {
      checkRewards();
    }
  }, [rewardTokens]);

  return (
    <HomeCardPurple >
      <CardContent>
        <Box style={{ width: '376px' }}>
          <Grid container>
            <Grid item xs={12}>
              <h2 style={{textAlign: 'center', color: 'black',  }}>
                Your Total Rewards
              </h2>
            </Grid>
            <Grid item xs={12}>
              <h2 style={{ textAlign: 'center', fontSize: '24px', color: 'black' }} >
                ${totalRewardValue}
              </h2>
            </Grid>
          </Grid>
          
          <Grid
            container
            
            style={{
              fontWeight: 500,
              color: black, 
              marginTop: '15px',
              justifyContent:'space-between'
            }}
          >
            Daily APR:
        {/*    <Grid item>{withdrawFeePercent == 0 ? 0 : apr.daily}%</Grid> */}
        <Grid item>2.447%</Grid>
          </Grid>
          <Grid
            container
            
            style={{
              fontWeight: 500,
              marginTop: '5px',
              justifyContent:'space-between', 
              color: 'black', 
            }}
          >
            Yearly APR:
         {/*   <Grid item>{withdrawFeePercent == 0 ? 0 : apr.yearly}%</Grid> */}
         <Grid item>893.047%</Grid>
          </Grid> 
          <Grid container style={{ justifyContent:'center', alignItems:'center', marginTop: '20px' }}>
            {rewardTokens?.map((token, i) => {
              return (
                <Grid
                  container
                  key={i} 
                  style= {{justifyContent:'space-between', 
                  alignItems:'center', color: black, 
                  marginTop:'35px' }}
                >
                  <Grid item xs={1}>
                    <TokenSymbol size={45} symbol={token.name} />
                  </Grid>
                  <Grid item xs={1}>
                    <Typography
                      style={{
                        fontWeight: 700,
                        paddingTop: '5px',
                        fontSize: '18px', 
                        display: 'block',
                        color: 'black'
                      }}
                    >
                      {' '}
                      {token.name}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: '18px',
                        color: 'black'                      }}
                    >
                      {token.currentPrice}
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <h2 style={{ textAlign: 'right', fontSize: '20px' }}> {token.amount}</h2>
                    <h2  style={{ textAlign: 'right', fontSize: '20px'}}> ${token.pendingValue}</h2>
                  </Grid>
                  {token.canCompound && (
                    <Grid container  style={{ marginTop: '5px', justifyContent:'flex-end'}}>
                      <Grid item>
                        <span
                          style={{
                            display: 'inline-block',
                            margin: '4px',
                            border: '1px solid black',
                            borderRadius: '50%',
                            height: '15px',
                            width: '15px',
                            background: 'lightgray',
                            textAlign: 'center',
                            fontSize: '12px',
                            cursor: 'pointer',
                          }}
                          data-tip="*Compound deposit result subject to DEX fees/slippage"
                        >
                          !
                        </span>

                        <ReactTooltip />
                      </Grid>
                      <Grid item>
                        <Button
                          className={hasRewards ? 'shinyButtonSecondary' : 'shinyButtonDisabled'}
                          disabled={!hasRewards}
                          onClick={onCompound}
                        >
                          Compound
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              );
            })}
            <Grid container style={{ marginTop: '30px' }}>
              <Button
                className={hasRewards ? 'shinyButtonSecondary' : 'shinyButtonDisabled'}
                fullWidth={true}
                disabled={!hasRewards}
                onClick={handleClaim}
              >
                Claim All
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </HomeCardPurple>
  );
};

export default PegPoolRewards;
