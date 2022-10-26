import React, { useEffect, useMemo } from 'react';
import { Grid } from '@material-ui/core';
import useBank from '../../hooks/useBank';
import useWallet from 'use-wallet';
import FarmCard from './FarmCard';
import useStatsForPool from '../../hooks/useStatsForPool';

function Farms(props) {
  const { account } = useWallet();

  // WLRS USDC
  const wlrsUSDCBank = useBank('WlrsUsdcLPWShareRewardPool');
  const wlrsUSDCPoolStats = useStatsForPool(wlrsUSDCBank);

  // XWLRS
  const xWLRSBank = useBank('XWLRSShareRewardPool');
  const xWLRSBankStatsPool = useStatsForPool(xWLRSBank);

  // WSHARE-USDC earning WLRS
  const wShareUSDCEarningWLRSBank = useBank('WShareUSDCWLRSRewardPool');
  const wShareUSDCEarningWLRSStatsPool = useStatsForPool(wShareUSDCEarningWLRSBank);

  // WSHARE-USDC
  const wShareUSDCBank = useBank('WShareUsdcLPWShareRewardPool');
  const wShareUSDCPoolStats = useStatsForPool(wShareUSDCBank);

  // NRWL
  const nrwlBank = useBank('NrwlYusdLPWShareRewardPool');
  const nrwlPoolStats = useStatsForPool(nrwlBank);

  // BOND
  const bondBank = useBank('WBondWShareRewardPool');
  const bondPool = useStatsForPool(bondBank);

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <FarmCard
          bankName="WLRS-USDC.e LP"
          activesOnly={props.activesOnly}
          bank={wlrsUSDCBank}
          poolStats={wlrsUSDCPoolStats}
          account={account}
        />
        <FarmCard
          bankName="xWLRS"
          activesOnly={props.activesOnly}
          bank={xWLRSBank}
          poolStats={xWLRSBankStatsPool}
          account={account}
        />
        <FarmCard
          bankName="WSHARE-USDC.e LP (WLRS)"
          activesOnly={props.activesOnly}
          bank={wShareUSDCEarningWLRSBank}
          poolStats={wShareUSDCEarningWLRSStatsPool}
          account={account}
        />
        <FarmCard
          bankName="WSHARE-USDC.e LP"
          activesOnly={props.activesOnly}
          bank={wShareUSDCBank}
          poolStats={wShareUSDCPoolStats}
          account={account}
        />
        <FarmCard
          bankName="NRWL-YUSD LP"
          activesOnly={props.activesOnly}
          bank={nrwlBank}
          poolStats={nrwlPoolStats}
          account={account}
        />
        <FarmCard
          bankName="WBOND"
          activesOnly={props.activesOnly}
          bank={bondBank}
          poolStats={bondPool}
          account={account}
        />
      </Grid>
    </>
  );
}
export default Farms;
