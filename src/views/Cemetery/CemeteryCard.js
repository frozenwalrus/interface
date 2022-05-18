import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import Card from '../../components/Card';

import TokenSymbol from '../../components/TokenSymbol';
import useLpStats from '../../hooks/useLpStats';
import useBank from '../../hooks/useBank';
import useStatsForPool from '../../hooks/useStatsForPool';
// import useCashStat from '../../hooks/useCashPriceInEstimatedTWAP.ts';

const CemeteryCard = () => {
  const tombFtmLpStats = useLpStats('WLRS-USDC-LP');
  const tShareFtmLpStats = useLpStats('WSHARE-USDC-LP');
  // const snoSnoShareLpStats = useLpStats('SNO-SNOSHARE-LP');
  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);

  const tombBank = useBank('WlrsUsdcLPWShareRewardPool');
  const tombStatsOnPool = useStatsForPool(tombBank);

  const tShareBank = useBank('WShareUsdcLPWShareRewardPool');
  const tShareStatsOnPool = useStatsForPool(tShareBank);

  // const snoSnoShareLPStats = useMemo(() => (snoSnoShareLpStats ? snoSnoShareLpStats : null), [snoSnoShareLpStats]);
  // const snoPrice = useCashStat();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent
            style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'center' }}
          >
            <div>
              <Typography variant="h5" component="h2">
                WLRS-USDC.e LP
              </Typography>
              <TokenSymbol size={60} symbol="WLRS-USDC-LP" />
            </div>
            <div>
              <span style={{ fontSize: '23px' }}>
                {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : '-.--'} WLRS /{' '}
                {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : '-.--'} USDC.e
              </span>
              <Box>${tombLPStats?.priceOfOne ? tombLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Liquidity: ${tombLPStats?.totalLiquidity ? tombLPStats.totalLiquidity : '-.--'} <br />
                Total supply: {tombLPStats?.totalSupply ? (Number(tombLPStats.totalSupply) < 1/10**4 ? (Number(tombLPStats.totalSupply) * 10**6).toFixed(4) + 'µ' : tombLPStats.totalSupply) : '-.--'} <br />
                APR: {tombStatsOnPool?.yearlyAPR ? tombStatsOnPool?.yearlyAPR : '----.--'}%
              </span>
            </div>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              component={Link}
              to={`/farms/WlrsUsdcLPWShareRewardPool/`}
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664/0x395908aeb53d33A9B8ac35e148E9805D34A555D3#/"
            >
              Add Liquidity
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent
            style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'center' }}
          >
            <div>
              <Typography variant="h5" component="h2">
                WSHARE-USDC.e LP
              </Typography>
              <TokenSymbol size={60} symbol="WSHARE-USDC-LP" />
            </div>
            <div>
              <span style={{ fontSize: '23px' }}>
                {tshareLPStats?.tokenAmount ? tshareLPStats?.tokenAmount : '-.--'} WSHARE /{' '}
                {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : '-.--'} USDC.e
              </span>

              <Box>${tshareLPStats?.priceOfOne ? tshareLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Liquidity: ${tshareLPStats?.totalLiquidity ? tshareLPStats.totalLiquidity : '-.--'} <br />
                Total supply: {tshareLPStats?.totalSupply ? (Number(tshareLPStats.totalSupply) < 1/10**4 ? (Number(tshareLPStats.totalSupply) * 10**6).toFixed(4) + 'µ' : tshareLPStats.totalSupply) : '-.--'} <br />
                APR: {tShareStatsOnPool?.yearlyAPR ? tShareStatsOnPool?.yearlyAPR : '----.--'}%
              </span>
            </div>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              component={Link}
              to={`/farms/WShareUsdcLPWShareRewardPool/`}
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664/0xe6d1aFea0B76C8f51024683DD27FA446dDAF34B6#/"
            >
              Add Liquidity
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <Card>
          <CardContent
            style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'center' }}
          >
            <div>
              <Typography variant="h5" component="h2">
                WLRS-WSHARE-LP
              </Typography>
              <TokenSymbol symbol="WLRS-WSHARE-LP" size={60} />
            </div>
            <div>
              <span style={{ fontSize: '23px' }}>
                {snoSnoShareLPStats?.ftmAmount ? snoSnoShareLPStats?.ftmAmount : '-.--'} WLRS /{' '}
                {snoSnoShareLPStats?.tokenAmount ? snoSnoShareLPStats?.tokenAmount : '-.--'} WSHARE
              </span>
              <Box>${snoSnoShareLPStats?.priceOfOne ? snoSnoShareLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Liquidity: ${snoSnoShareLPStats?.totalLiquidity ? snoSnoShareLPStats.totalLiquidity : '-.--'}
                <br />
                Total supply: {snoSnoShareLPStats?.totalSupply ? snoSnoShareLPStats.totalSupply : '-.--'}
              </span>
            </div>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              component={Link}
              to={`/farms/SnoSnoShareLPSnoShareRewardPool/`}
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D/0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875"
            >
              Add Liquidity
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent
            style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'center' }}
          >
            <div>
              <Typography variant="h5" component="h2">
                WLRS
              </Typography>
              <TokenSymbol symbol="SNO" size={60} />
            </div>
            <div>
              SINGLE STAKE
              <Box>${snoPrice?.priceInDollars ? snoPrice?.priceInDollars : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Circulating Supply: ${snoPrice?.circulatingSupply ? snoPrice?.circulatingSupply : '-.--'}
                <br />
                Total supply: {snoPrice?.totalSupply ? snoPrice.totalSupply : '-.--'}
              </span>
            </div>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              component={Link}
              to={`/farms/SnoSnoShareRewardPool/`}
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D"
            >
              Buy WLRS
            </Button>
          </CardActions>
        </Card>
      </Grid> */}
    </Grid>
  );
};

export default CemeteryCard;
