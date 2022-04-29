import React, { useMemo } from 'react';
import Page from '../../components/Page';
import styled from 'styled-components';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import AvaxLogo from '../../assets/img/SVG_Icons_and_web_bg/UST.svg';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import TokenSymbol from '../../components/TokenSymbol';
import useTombStats from '../../hooks/useTombStats';
import useLpStats from '../../hooks/useLpStats';
import useFantomPrice from '../../hooks/useFantomPrice.js';
import useBondStats from '../../hooks/useBondStats';
import usetShareStats from '../../hooks/usetShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import { tomb as tombTesting, tShare as tShareTesting } from '../../tomb-finance/deployments/deployments.testing.json';
import { tomb as tombProd, tShare as tShareProd } from '../../tomb-finance/deployments/deployments.mainnet.json';

import { Box, Button, CardContent, Grid, Typography, useMediaQuery } from '@material-ui/core';
import Card from '../../components/Card';
import tvl from '../../assets/img/tvl.svg';

import { makeStyles } from '@material-ui/core/styles';
import useTombFinance from '../../hooks/useTombFinance';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      marginTop: '10px',
    },
    backgroundColor: '#284C7B',
  },
  tokenButton: {},
  '@media only screen and (max-width: 1200px)': {
    tokenButton: {
      fontSize: '12px',
      marginRight: '4%',
    },
  },
  flex: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  '@media only screen and (max-width: 850px)': {
    tokenButton: {
      width: '40% !important',
    },
  },
  '@media only screen and (max-width: 670px)': {
    tokenButton: {
      width: '80% !important',
    },
  },
}));

const Home = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const tombFtmLpStats = useLpStats('SNO-JOE-LP');
  const tShareFtmLpStats = useLpStats('SNOSHARE-JOE-LP');
  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const tBondStats = useBondStats();
  const tombFinance = useTombFinance();
  const { price: JOEPrice, marketCap: JOEMarketCap, priceChange: JOEPriceChange } = useFantomPrice();

  let tomb;
  let tShare;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    tomb = tombTesting;
    tShare = tShareTesting;
  } else {
    tomb = tombProd;
    tShare = tShareProd;
  }

  const buyTombAddress =
    'https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D';
  const buyTShareAddress =
    'https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875';

  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const tombPriceInDollars = useMemo(
    () => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null),
    [tombStats],
  );
  const tombPriceInFTM = useMemo(() => (tombStats ? Number(tombStats.tokenInFtm).toFixed(4) : null), [tombStats]);
  const tombCirculatingSupply = useMemo(() => (tombStats ? String(tombStats.circulatingSupply) : null), [tombStats]);
  const tombTotalSupply = useMemo(() => (tombStats ? String(tombStats.totalSupply) : null), [tombStats]);

  const tSharePriceInDollars = useMemo(
    () => (tShareStats ? Number(tShareStats.priceInDollars).toFixed(2) : null),
    [tShareStats],
  );
  const tSharePriceInFTM = useMemo(
    () => (tShareStats ? Number(tShareStats.tokenInFtm).toFixed(4) : null),
    [tShareStats],
  );
  const tShareCirculatingSupply = useMemo(
    () => (tShareStats ? String(tShareStats.circulatingSupply) : null),
    [tShareStats],
  );
  const tShareTotalSupply = useMemo(() => (tShareStats ? String(tShareStats.totalSupply) : null), [tShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInFTM = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const Row = styled.div`
    align-items: center;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    margin-bottom: 8px;
  `;

  return (
    <Page>
      <BackgroundImage />
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} style={{ display: 'flex', width: '100%' }}>
          <Typography
            variant="h1"
            style={{
              fontWeight: 900,
              textAlign: 'center',
              fontSize: 50,
              margin: 'auto',
              ...(!matches ? { fontSize: 36 } : {}),
            }}
            gutterBottom
          >
            Welcome to WALRUS
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} container direction="column" style={{ justifyContent: 'space-between' }}>
          <Card>
            <CardContent
              style={{ margin: '37px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
            >
              <div>
                <h1>Total Value Locked</h1>
                {/* <CountUp style={{ fontSize: '40px' }} end={TVL} separator="," prefix="$" /> */}
                <div style={{fontSize: 40}}>$0</div>
              </div>
              <img
                src={`${tvl}`}
                alt="tvl"
                style={!matches ? { width: 80, height: 80 } : { width: 128, height: 128 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
              <h2>WLRS-UST LP</h2>
              <div style={{ position: 'absolute', right: 5, top: 5 }}>
                <TokenSymbol size={50} symbol="SNO-JOE-LP" />
              </div>
              <Box mt={2}>
                <span style={{ fontSize: '26px' }}>
                  {/* {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : '-.--'} WLRS /{' '}
                  {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : '-.--'} UST */}
                 0 WLRS / 0 UST
                </span>
              </Box>
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
              <h2>WSHARE-UST LP</h2>
              <div style={{ position: 'absolute', right: 5, top: 5 }}>
                <TokenSymbol size={50} symbol="SNOSHARE-JOE-LP" />
              </div>
              <Box mt={2}>
                <span style={{ fontSize: '26px' }}>
                  {/* {tshareLPStats?.tokenAmount ? tshareLPStats?.tokenAmount : '-.--'} WSHARE /{' '}
                  {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : '-.--'} UST */}
                  0 WSHARE / 0 UST
                </span>
              </Box>
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
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', right: 5, top: 5 }}>
                <TokenSymbol symbol="WFTM" size={50} />
              </div>
              <h2 align="center">UST</h2>
              <p align="center">Current Price</p>
              <Box align="center">
                <span style={{ fontSize: '30px' }}>
                  {/* ${JOEPrice ? JOEPrice : '-.----'} */}
                  $0
                </span>
              </Box>
              <Box align="center" marginBottom={3}>
                &nbsp;
              </Box>
              <Row>
                <span style={{ fontSize: '14px' }}>
                  Market Cap:
                  <br />
                  24h Price Change: <br />
                  &nbsp;
                </span>
                <span style={{ fontSize: '14px', textAlign: 'right' }}>
                  {/* ${JOEMarketCap} <br />
                  {JOEPriceChange.toFixed(2)}% <br /> */}
                  $0 <br />
                  %0 <br />
                  &nbsp;
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href={'https://traderjoexyz.com/trade?outputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd#/'}
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%' }}
                  className={classes.button}
                  disabled
                >
                  Purchase
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', right: 5, top: 5 }}>
                <TokenSymbol symbol="TOMB" size={50} />
              </div>
              <h2 align="center">WLRS</h2>
              <p align="center">Current Price</p>
              <Box align="center">
                <span style={{ fontSize: '30px' }}>
                  {/* {tombPriceInFTM ? tombPriceInFTM : '-.----'}{' '} */}
                  0
                  <img alt="logo" style={{ width: '30px' }} src={AvaxLogo} />
                </span>
              </Box>
              <Box align="center" marginBottom={3}>
                <span style={{ fontSize: '16px', alignContent: 'flex-start' }}>
                  {/* ${tombPriceInDollars ? tombPriceInDollars : '-.--'} */}
                  $0
                </span>
              </Box>
              <Row>
                <span style={{ fontSize: '14px' }}>
                  Market Cap:
                  <br />
                  Circulating Supply: <br />
                  Total Supply:
                </span>
                <span style={{ fontSize: '14px', textAlign: 'right' }}>
                  {/* ${((tombCirculatingSupply - 20000) * tombPriceInDollars).toFixed(2)} <br />
                  {tombCirculatingSupply - 20000} <br />
                  {tombTotalSupply} */}
                  $0 <br />
                  0 <br />
                  0
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href={buyTombAddress}
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%' }}
                  className={classes.button}
                  disabled
                >
                  Purchase
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', right: 5, top: 5 }}>
                <TokenSymbol symbol="HSHARE" size={50} />
              </div>
              <h2 align="center">WSHARE</h2>
              <p align="center">Current Price</p>
              <Box align="center">
                <span style={{ fontSize: '30px' }}>
                  {/* {tSharePriceInFTM ? tSharePriceInFTM : '-.----'}{' '} */}
                  0
                  <img alt="logo" style={{ width: '30px' }} src={AvaxLogo} />
                </span>
              </Box>
              <Box align="center" marginBottom={3}>
                <span style={{ fontSize: '16px' }}>
                  {/* ${tSharePriceInDollars ? tSharePriceInDollars : '-.--'} */}
                  $0
                </span>
              </Box>
              <Row>
                <span style={{ fontSize: '14px' }}>
                  Market Cap: <br />
                  Circulating Supply: <br />
                  Total Supply:
                </span>
                <span style={{ fontSize: '14px', textAlign: 'right' }}>
                  {/* ${(tShareCirculatingSupply * tSharePriceInDollars).toFixed(2)} <br />
                  {tShareCirculatingSupply} <br />
                  {tShareTotalSupply} */}
                  $0 <br />
                  0 <br />
                  0
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href={buyTShareAddress}
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%' }}
                  className={classes.button}
                  disabled
                >
                  Purchase
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', right: 5, top: 5 }}>
                <TokenSymbol symbol="HBOND" size={50} />
              </div>
              <h2 align="center">WBOND</h2>
              <p align="center">Current Price</p>
              <Box align="center">
                <span style={{ fontSize: '30px' }}>
                  {/* {tBondPriceInFTM ? tBondPriceInFTM : '-.----'}{' '} */}
                  0
                  <img alt="logo" style={{ width: '30px' }} src={AvaxLogo} />
                </span>
              </Box>
              <Box align="center" marginBottom={3}>
                <span style={{ fontSize: '16px' }}>
                  {/* ${tBondPriceInDollars ? tBondPriceInDollars : '-.--'} */}
                  $0
                </span>
              </Box>
              <Row>
                <span style={{ fontSize: '14px' }}>
                  Market Cap: <br />
                  Circulating Supply: <br />
                  Total Supply:
                </span>
                <span style={{ fontSize: '14px', textAlign: 'right' }}>
                  {/* ${(tBondCirculatingSupply * tBondPriceInDollars).toFixed(2)} <br />
                  {tBondCirculatingSupply} <br />
                  {tBondTotalSupply} */}
                  $0 <br />
                  0 <br />
                  0
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href="/bonds"
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%' }}
                  className={classes.button}
                  disabled
                >
                  Bond
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
