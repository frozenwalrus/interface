import React from 'react';
import { Box, Button, Card, CardActions, CardContent } from '@material-ui/core';
import useRebateTreasury from '../../hooks/useRebateTreasury';
import useApprove, { ApprovalState } from '../../hooks/useApprove';
import useModal from '../../hooks/useModal';
import useRebates from '../../hooks/useRebates';
import useTokenBalance from '../../hooks/useTokenBalance';
import DepositModal from './components/DepositModal';
import useTombFinance from '../../hooks/useTombFinance';
import TokenSymbol from '../../components/TokenSymbol';
import Web3 from 'web3';
import { makeStyles } from '@material-ui/core/styles';

const web3 = new Web3();
const BN = (n) => new web3.utils.BN(n);

const useStyles = makeStyles((theme) => ({
  black: {
    color: '#000000 !important',
  },
}));

const CemeteryCard = ({ bank }) => {
  const { onBond } = useRebates();
  const tombFinance = useTombFinance();
  const classes = useStyles();

  const rebateStats = useRebateTreasury();

  const [approveStatus, approve] = useApprove(
    tombFinance.externalTokens[bank.depositTokenName],
    '0xB1c1bb7Ed164127Aee8c1690A70922d12FF0A737',
  );

  const tokenBalance = useTokenBalance(tombFinance.externalTokens[bank.depositTokenName]);

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={async (value) => {
        if (!window.ethereum) return;
        const account = tombFinance.myAccount; //(await window.ethereum.request({ method: 'eth_accounts' }))[0];
        if (!account) return;

        const amount = BN(Math.floor(value * 10000 * 10**12)).mul(BN(10).pow(BN(14))).div(BN(10).pow(BN(12))).toString();
        onBond(tombFinance.externalTokens[bank.depositTokenName].address, amount);
        // console.log(account, tombFinance.externalTokens[bank.depositTokenName].address, rebateStats.RebateTreasury._address);
        // window.ethereum.request({
        //   method: 'eth_sendTransaction',
        //   params: [
        //     {
        //       from: account,
        //       to: rebateStats.RebateTreasury._address,
        //       data: rebateStats.RebateTreasury.methods
        //         .bond(
        //           tombFinance.externalTokens[bank.depositTokenName].address,
        //           BN(Math.floor(value * 10000 * 10**12)).mul(BN(10).pow(BN(14))).div(BN(10).pow(BN(12))),
        //         )
        //         .encodeABI(),
        //     },
        //   ],
        // });
      }}
      tokenName={bank.depositTokenName}
      token={rebateStats.assets.find(
        (token) => token.token === tombFinance.externalTokens[bank.depositTokenName].address,
      )}
    />,
  );

  return (
    <Card>
      <CardContent>
        <Box style={{ position: 'relative' }}>
          <Box
            style={{
              position: 'absolute',
              right: '0px',
              top: '-5px',
              height: '48px',
              width: '48px',
              borderRadius: '40px',
              backgroundColor: 'transparent',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              color: '#000000 !important',
            }}
          >
            <TokenSymbol size={50} symbol={bank.depositTokenName} />
          </Box>
          {/* <div className={classes.black}>
            {bank.depositTokenName.replace('USDC', 'USDC.e')}
          </div> */}
          <div className={classes.black}>
            Bond&nbsp;{bank.depositTokenName.replace('USDC', 'USDC.e')}
            <br />
            Earn WLRS
          </div>
        </Box>
      </CardContent>
      <CardActions>
        {approveStatus !== ApprovalState.APPROVED ? (
          <Button
            disabled={approveStatus !== ApprovalState.NOT_APPROVED}
            variant="contained"
            color="primary"
            onClick={approve}
          >
            Approve{' '}
            {bank.depositTokenName === 'WSHARE-USDC-LP'
              ? 'WSHARE-USDC.e LP'
              : bank.depositTokenName === 'WLRS-USDC-LP'
              ? 'WLRS-USDC.e LP'
              : ''}
          </Button>
        ) : (
          <Button color="primary" size="small" variant="contained" onClick={onPresentDeposit}>
            Bond
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CemeteryCard;
