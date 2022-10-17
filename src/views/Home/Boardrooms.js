import React, { useMemo, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import BoardroomCard from './BaordroomCard';

import useCurrentEpochNrwl from '../../hooks/useCurrentEpochNrwl';
import useFetchMasonryAPRNrwl from '../../hooks/useFetchMasonryAPRNrwl';
import useCashPriceInEstimatedTWAPNrwl from '../../hooks/useCashPriceInEstimatedTWAPNrwl';
import useTreasuryAllocationTimesNrwl from '../../hooks/useTreasuryAllocationTimesNrwl';
import useTotalStakedOnMasonryNrwl from '../../hooks/useTotalStakedOnMasonryNrwl';

import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useFetchMasonryAPR from '../../hooks/useFetchMasonryAPR';
import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import useTotalStakedOnMasonry from '../../hooks/useTotalStakedOnMasonry';

const Boardrooms = () => {
  // WLRS
  const wlrsCurrentEpoch = useCurrentEpoch();
  const wlrsBRStat = useCashPriceInEstimatedTWAP();
  const wlrsTotalStaked = useTotalStakedOnMasonry();
  const wlrsAPR = useFetchMasonryAPR();
  const wlrsTwap = useMemo(() => (wlrsBRStat ? Number(wlrsBRStat.priceInDollars).toFixed(4) : null), [wlrsBRStat]);
  const wlrsNextEpochTimer = useTreasuryAllocationTimes();
  const wlrsNextEpochDate = useMemo(() => (wlrsNextEpochTimer ? wlrsNextEpochTimer.to : null), [wlrsNextEpochTimer]);

  // NRWL
  const nrwlCurrentEpoch = useCurrentEpochNrwl();
  const nrwlBRStat = useCashPriceInEstimatedTWAPNrwl();
  const nrwlTotalStaked = useTotalStakedOnMasonryNrwl();
  const nrwlAPR = useFetchMasonryAPRNrwl();
  const nrwlTwap = useMemo(() => (nrwlBRStat ? Number(nrwlBRStat.priceInDollars).toFixed(4) : null), [nrwlBRStat]);
  const nrwlEpochTimer = useTreasuryAllocationTimesNrwl();
  const nrwlNextEpochDate = useMemo(() => (nrwlEpochTimer ? nrwlEpochTimer.to : null), [nrwlEpochTimer]);

  return (
    <Grid container direction="column" spacing={2}>
      <BoardroomCard
        boardroomName="WLRS BOARDROOM"
        currentEpoch={Number(wlrsCurrentEpoch)}
        nextEpoch={wlrsNextEpochDate}
        twap={wlrsTwap}
        apr={wlrsAPR.toFixed(2)}
        dailyApr={(wlrsAPR / 365).toFixed(2)}
        abovePeg={1}
        totalStaked={Number(wlrsTotalStaked) / 1e18}
      />
      <BoardroomCard
        boardroomName="NRWL BOARDROOM"
        currentEpoch={Number(nrwlCurrentEpoch)}
        nextEpoch={nrwlNextEpochDate}
        twap={nrwlTwap}
        apr={nrwlAPR.toFixed(2)}
        dailyApr={(nrwlAPR / 365).toFixed(2)}
        abovePeg={2}
        totalStaked={Number(nrwlTotalStaked) / 1e18}
      />
    </Grid>
  );
};
export default Boardrooms;
