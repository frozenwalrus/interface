import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import Card from '../../components/Card';

import TokenSymbol from '../../components/TokenSymbol';
import useLpStats from '../../hooks/useLpStats';
import useCashStat from '../../hooks/useCashPriceInEstimatedTWAP.ts';

const CemeteryCard = () => {
  const tombFtmLpStats = useLpStats('SNO-JOE-LP');
  const tShareFtmLpStats = useLpStats('SNOSHARE-JOE-LP');
  const snoSnoShareLpStats = useLpStats('SNO-SNOSHARE-LP');
  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const snoSnoShareLPStats = useMemo(() => (snoSnoShareLpStats ? snoSnoShareLpStats : null), [snoSnoShareLpStats]);
  const snoPrice = useCashStat();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent
            style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'center' }}
          >
            <div>
              <Typography variant="h5" component="h2">
                WLRS-UST-LP
              </Typography>
              <TokenSymbol size={60} symbol="SNO-JOE-LP" />
            </div>
            <div>
              <span style={{ fontSize: '23px' }}>
                {/* {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : '-.--'} WLRS /{' '}
                {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : '-.--'} UST */}
                0 WLRS / 0 UST
              </span>
              <Box>
                {/* ${tombLPStats?.priceOfOne ? tombLPStats.priceOfOne : '-.--'} */}
                $0
              </Box>
              <span style={{ fontSize: '12px' }}>
                {/* Liquidity: ${tombLPStats?.totalLiquidity ? tombLPStats.totalLiquidity : '-.--'} <br />
                Total supply: {tombLPStats?.totalSupply ? tombLPStats.totalSupply : '-.--'} */}
                Liquidity: $0
                <br />
                Total supply: 0
              </span>
            </div>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              component={Link}
              to={`/farms/SnoJoeLPSnoShareRewardPool/`}
              disabled
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D/0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd"
              disabled
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
                WSHARE-UST-LP
              </Typography>
              <TokenSymbol size={60} symbol="SNOSHARE-JOE-LP" />
            </div>
            <div>
              <span style={{ fontSize: '23px' }}>
                {/* {tshareLPStats?.tokenAmount ? tshareLPStats?.tokenAmount : '-.--'} WSHARE /{' '}
                {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : '-.--'} UST */}
                0 WSHARE / 0 UST
              </span>

              <Box>
                {/* ${tshareLPStats?.priceOfOne ? tshareLPStats.priceOfOne : '-.--'} */}
                $0
              </Box>
              <span style={{ fontSize: '12px' }}>
                {/* Liquidity: ${tshareLPStats?.totalLiquidity ? tshareLPStats.totalLiquidity : '-.--'}
                <br />
                Total supply: {tshareLPStats?.totalSupply ? tshareLPStats.totalSupply : '-.--'} */}
                Liquidity: $0
                <br />
                Total supply: 0
              </span>
            </div>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              component={Link}
              to={`/farms/SnoShareJoeLPSnoShareRewardPool/`}
              disabled
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875/0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd"
              disabled
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
                WLRS-WSHARE-LP
              </Typography>
              <TokenSymbol symbol="SNO-SNOSHARE-LP" size={60} />
            </div>
            <div>
              <span style={{ fontSize: '23px' }}>
                {/* {snoSnoShareLPStats?.ftmAmount ? snoSnoShareLPStats?.ftmAmount : '-.--'} WLRS /{' '}
                {snoSnoShareLPStats?.tokenAmount ? snoSnoShareLPStats?.tokenAmount : '-.--'} WSHARE */}
                0 WLRS / 0 WSHARE
              </span>
              <Box>
                {/* ${snoSnoShareLPStats?.priceOfOne ? snoSnoShareLPStats.priceOfOne : '-.--'} */}
                $0
              </Box>
              <span style={{ fontSize: '12px' }}>
                {/* Liquidity: ${snoSnoShareLPStats?.totalLiquidity ? snoSnoShareLPStats.totalLiquidity : '-.--'}
                <br />
                Total supply: {snoSnoShareLPStats?.totalSupply ? snoSnoShareLPStats.totalSupply : '-.--'} */}
                Liquidity: $0
                <br />
                Total supply: 0
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
              disabled
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D/0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875"
              disabled
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
              <Box>
                {/* ${snoPrice?.priceInDollars ? snoPrice?.priceInDollars : '-.--'} */}
                $0
              </Box>
              
              <span style={{ fontSize: '12px' }}>
                {/* Circulating Supply: ${snoPrice?.circulatingSupply ? snoPrice?.circulatingSupply : '-.--'}
                <br />
                Total supply: {snoPrice?.totalSupply ? snoPrice.totalSupply : '-.--'} */}
                Liquidity: $0
                <br />
                Total supply: 0
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
              disabled
            >
              Farm
            </Button>
            <Button
              color="primary"
              target="_blank"
              style={{ width: '150px', height: '45px', marginBottom: '5%' }}
              variant="contained"
              href="https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D"
              disabled
            >
              Buy WLRS
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CemeteryCard;
