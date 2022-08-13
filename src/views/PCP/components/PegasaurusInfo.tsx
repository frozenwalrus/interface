import React from 'react';
import { Box, Button, Grid, Card, CardContent, Typography } from '@material-ui/core';
import useModal from '../../../hooks/useModal';
import DepositModal from '../../Bank/components/DepositModal';
import useTokenBalance from '../../../hooks/useTokenBalance';
import usePegPoolDeposit from '../../../hooks/usePegPoolDeposit';
import { Pegasaurus, PegasaurusToken, PegPool, PegPoolToken } from '../../../tomb-finance/types';
import { ApprovalState } from '../../../hooks/useApprove';
import PegPoolRewards from './PegPoolRewards';
import usePegPoolApprove from '../../../hooks/usePegPoolApproval';
import TokenSymbol from '../../../components/TokenSymbol';
import usePegPoolWithdrawFee from '../../../hooks/usePegPoolWithdrawFee';
import { Skeleton } from '@material-ui/lab';
import usePegPoolWithdraw from '../../../hooks/usePegPoolWithdraw';
import WithdrawModal from '../../Bank/components/WithdrawModal';
import { useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { formatEther } from 'ethers/lib/utils';


const HomeCardBlue = styled.div`
  background: rgba(217, 238, 254, 0.95);
  border-radius: 50px;
  box-shadow: 6px 6px 12px black; 
  padding: 20px; 
  color: #4b4453;
   
`;
const PegasaurusInfo: React.FC<{
  Pegasaurus: Pegasaurus;
  rewardTokens: PegasaurusToken[];
  totalRewardValue: string;
  apr: { daily: string; yearly: string };
}> = ({ Pegasaurus, rewardTokens, totalRewardValue, apr }) => {
  const tokenBalance = useTokenBalance(Pegasaurus.depositToken);
  const { onDeposit } = usePegPoolDeposit(Pegasaurus);
  const { onWithdraw } = usePegPoolWithdraw(Pegasaurus);
  const [approveStatus, approve] = usePegPoolApprove(Pegasaurus);
  const { withdrawFeePercent } = usePegPoolWithdrawFee();
 // console.log(pegPool.depositToken)
  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      decimals={Pegasaurus.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onDeposit(amount);
        onDismissDeposit();
      }}
      tokenName={Pegasaurus.depositTokenName}
    />,
  );
  
  const useStyles = makeStyles((theme) => ({
    tokenButton: {
        fontSize: '1.2rem',
        padding: '5px', 
        borderRadius: '12px !important', 
      },
  }));

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={Pegasaurus.userInfo.amountDepositedBN}
      decimals={Pegasaurus.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onWithdraw(amount);
        onDismissWithdraw();
      }}
      tokenName={Pegasaurus.depositTokenName}
    />,
  );

  return (
    <Grid container style={{ justifyContent: 'space-evenly' }}>
      <Grid item>
        <HomeCardBlue >
          <CardContent>
            <Box style={{ width: '376px' }}>
              <Grid container style={{ marginTop: '1px',  justifyContent:'space-between' }}>
                <Grid item xs={6}>
                    
                    <TokenSymbol size={60} symbol={'USDC'} />
                     
                </Grid>
                <Grid item xs={6}>
                <h2 style={{ textAlign: 'center', }}> Your Deposits:</h2>
                  <h2 style={{ textAlign: 'right' }} > {Pegasaurus.userInfo?.amountDeposited}</h2>
                </Grid>
              </Grid>
              <Grid container  style={{ marginTop: '20px', justifyContent:'center', alignItems: 'center' }}>
                {approveStatus != ApprovalState.APPROVED ? (
                 
                  <Button
                    color="primary"
                    
                    disabled={!Pegasaurus.depositsEnabled}
                    onClick={approve}
                    fullWidth={true}
                  >
                    Approve
                  </Button>
                ) : (
                  <Button
                    className="tokenButton"
                     
                   disabled={!Pegasaurus.depositsEnabled}
                    onClick={onPresentDeposit}
                    fullWidth={true}
                  >
                    {Pegasaurus.depositsEnabled ? 'Deposit' : 'Above Peg'}
                  </Button>
                )}
              </Grid>

              <Grid container style={{ marginTop: '20px', justifyContent:'center'  }}>
                <h2 style={{ fontSize:'14px'}}>
                  Current TWAP withdraw fee ={' '}
                  {withdrawFeePercent || withdrawFeePercent == 0 ? withdrawFeePercent : <Skeleton />}%
                </h2>

                <Button
                  className={Pegasaurus.userInfo?.isDeposited ? 'shinyButtonSecondary' : 'shinyButtonDisabled'}
                  fullWidth={true}
                  
                  disabled={!Pegasaurus.userInfo?.isDeposited}
                  onClick={onPresentWithdraw}
                >
                  Withdraw
                </Button>
                <h2 style={{ fontSize:'14px', textAlign: 'center', marginTop: '10%'}}>
                  You will receive WLRS-USDC.e LP tokens when you withdraw
                </h2>
              </Grid>
            </Box>
          </CardContent>
        </HomeCardBlue>
      </Grid>

      <Grid item>
        {rewardTokens && <PegPoolRewards rewardTokens={rewardTokens} totalRewardValue={totalRewardValue} apr={apr} />}
      </Grid>
    </Grid>
  );
};

export default PegasaurusInfo;
