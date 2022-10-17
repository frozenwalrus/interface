import React, { useEffect, useMemo } from 'react';
import { Grid } from '@material-ui/core';
import useBank from '../../hooks/useBank';
import useWallet from 'use-wallet';
import FarmCard from './FarmCard';
import useLpStats from '../../hooks/useLpStats';
import useStatsForPool from '../../hooks/useStatsForPool';

const Farms = () => {
  const { account } = useWallet();

  // WLRS USDC
  const wlrsUSDCBank = useBank('WlrsUsdcLPWShareRewardPool');
  const wlrsUSDCPoolStats = useStatsForPool(wlrsUSDCBank);

  // BOND
  const bondBank = useBank('WBondWShareRewardPool');
  const bondPool = useStatsForPool(bondBank);

  return (
    <Grid container direction="column" spacing={2}>
      <FarmCard bankName="WLRS-USDC.e LP" bank={wlrsUSDCBank} poolStats={wlrsUSDCPoolStats} account={account} />
      <FarmCard bankName="WBOND" bank={bondBank} poolStats={bondPool} account={account} />
    </Grid>
  );
};
export default Farms;
