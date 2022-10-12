import React, { useMemo, useState } from 'react';
import Page from '../../components/Page';
import styled from 'styled-components';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import AvaxLogo from '../../assets/img/USDC.png';
import yusdLogo from '../../assets/img/yusd.png';
import wlrsUsdcIcon from '../../assets/img/wlrs-usdc.png';
import wlrsIcon from '../../assets/img/SVG_Icons_and_web_bg/WLRS.svg';

import chevronUp from '../../assets/img/chevronup.png';
import chevronDown from '../../assets/img/chevrondown.png';
import montainsImg from '../../assets/img/montains.png';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import TokenSymbol from '../../components/TokenSymbol';
import useTombStats from '../../hooks/useTombStats';
import useLpStats from '../../hooks/useLpStats';
import useLpStatsNrwl from '../../hooks/useLpStatsNrwl';
import useFantomPrice from '../../hooks/useFantomPrice.js';
import useBondStats from '../../hooks/useBondStats';
import usetShareStats from '../../hooks/usetShareStats';
import useNrwlStats from '../../hooks/useNrwlStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';

import {
  Box,
  Button,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,
} from '@material-ui/core';
import Card from '../../components/Card';
// import tvl from '../../assets/img/tvl.svg';
import tvl from '../../assets/img/TVL-Icon.png';
import { makeStyles } from '@material-ui/core/styles';
import useTombFinance from '../../hooks/useTombFinance';
import useTokenBalance from '../../hooks/useTokenBalance';
import { getDisplayBalance } from '../../utils/formatBalance';
import Label from '../../components/Label';

const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};
`;

const HomeCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  padding: 20px;
  box-shadow: 6px 6px 12px black;
  color: #4b4453;
`;
const HomeCardBlue = styled.div`
  background: rgba(217, 238, 254, 0.75);
  border-radius: 50px;
  box-shadow: 6px 6px 12px black;
  padding: 20px;
  color: #4b4453;
`;
const HomeCardPurple = styled.div`
  background: rgba(214, 211, 242, 0.6);
  border-radius: 50px;
  box-shadow: 6px 6px 12px black;
  padding: 20px;
  color: #4b4453;
`;
const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      marginTop: '10px',
    },
    backgroundColor: '#284C7B',
  },
  bannerMountains: {
    width: '100%',
  },
  topBanner: {
    zIndex: 10,
    height: '352px',
    backgroundImage: 'url(' + require('../../assets/img/montains.png') + ')',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  innerBanner: {
    zIndex: 10,
    paddingLeft: '60px',
    paddingTop: '90px',
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: '36px',
    lineHeight: '66px',
  },
  bannerDescription: {
    color: '#282C42',
    fontSize: '20px',
    lineHeight: '28px',
  },
  bannerFooter: {
    color: '#282C42',
    fontSize: '20px',
    marginTop: '30px',
    zIndex: 10,
  },
  tokenButton: {},
  '@media only screen and (max-width: 1200px)': {
    tokenButton: {
      fontSize: '0.8rem',
      marginRight: '4%',
      padding: '5px',
      borderRadius: '12px !important',
    },
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  tabs: {
    fontWeight: '700',
    fontSize: '18px',
  },
  tabItem: {
    cursor: 'pointer',
    color: '#9AA4DA',
    fontWeight: '700',
    fontSize: '18px',
  },
  tabItemActive: {
    textDecoration: 'underline',
    textUnderlineOffset: '10px',
    color: '#FCFCFC',
  },
  tabDetailsItem: {
    cursor: 'pointer',
    color: '#9AA4DA',
    fontWeight: '700',
    fontSize: '16px',
  },
  tabDetailsItemActive: {
    fontWeight: '700',
    textDecoration: 'underline',
    textUnderlineOffset: '10px',
    color: '#FCFCFC',
  },
  flex: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  lineItem: {
    background: '#12141D',
    borderRadius: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  lineItemInner: {
    paddingRight: '50px',
  },
  lineLogo: {
    verticalAlign: 'middle',
    marginRight: '20px',
  },
  lineLabel: {
    color: '#9AA4DA',
    fontSize: '14px',
    marginBottom: '10px',
  },
  lineValue: {
    color: '#FCFCFC',
    fontSize: '18px',
  },
  dropdown: {
    cursor: 'pointer',
  },
  lineName: {
    fontSize: '18px',
  },
  lineDetailsBox: {
    minHeight: '405px',
    backgroundColor: '#1D1F2C',
    borderRadius: '10px',
  },
  inputDetailsBox: {
    marginTop: '50px',
  },
  inputDetailsBoxInner: {
    padding: '16px',
    backgroundColor: '#282C42',
    borderRadius: '10px',
  },
  lineValueDeposited: {
    color: '#07C4FF',
    fontSize: '18px',
  },
  rewardTokenAmount: {
    fontWeight: '700',
    fontSize: '21px',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#FCFCFC',
  },
  rewardTokenValue: {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#07C4FF',
  },
  addRemoveLiquidity: {
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '22px',
    textAlign: 'center',
    letterSpacing: '0.05em',
  },
  pendingRewards: {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '22px',
    textAlign: 'center',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: '#FCFCFC',
  },
  colorSecondary: {
    color: '#9AA4DA',
  },
  lineDetailsInner: {
    padding: '35px',
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
  const isDesktop = useMediaQuery('(min-width:1000px)');
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const tombFtmLpStats = useLpStats('WLRS-USDC-LP');
  const tShareFtmLpStats = useLpStats('WSHARE-USDC-LP');
  const nrwlLpStats = useLpStatsNrwl('NRWL-YUSD-LP');
  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const nrwlStats = useNrwlStats();
  const tBondStats = useBondStats();
  const tombFinance = useTombFinance();
  const { price: JOEPrice, marketCap: JOEMarketCap, priceChange: JOEPriceChange } = useFantomPrice();

  // let tomb;
  // let tShare;
  // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  //   tomb = tombTesting;
  //   tShare = tShareTesting;
  // } else {
  //   tomb = tombProd;
  //   tShare = tShareProd;
  // }

  const buyTombAddress =
    'https://app.bogged.finance/avax/swap?tokenIn=0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664&tokenOut=0x395908aeb53d33A9B8ac35e148E9805D34A555D3';
  const buyTShareAddress =
    'https://app.bogged.finance/avax/swap?tokenIn=0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664&tokenOut=0xe6d1aFea0B76C8f51024683DD27FA446dDAF34B6';
  const buyNrwlAddress = `https://www.swapsicle.io/swap?inputCurrency=0x111111111111ed1D73f860F57b2798b683f2d325&outputCurrency=0x501012893eE88976AB8B5289B7a78E307d5d9DCb`;

  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const nrwlLPStats = useMemo(() => (nrwlLpStats ? nrwlLpStats : null), [nrwlLpStats]);
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

  const nrwlPriceInDollars = useMemo(
    () => (nrwlStats ? Number(nrwlStats.priceInDollars).toFixed(2) : null),
    [nrwlStats],
  );
  const nrwlPriceInFTM = useMemo(() => (nrwlStats ? Number(nrwlStats.tokenInFtm).toFixed(4) : null), [nrwlStats]);
  const nrwlCirculatingSupply = useMemo(() => (nrwlStats ? String(nrwlStats.circulatingSupply) : null), [nrwlStats]);
  const nrwlTotalSupply = useMemo(() => (nrwlStats ? String(nrwlStats.totalSupply) : null), [nrwlStats]);

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

  const tombBalance = useTokenBalance(tombFinance.TOMB);
  const displayTombBalance = useMemo(() => getDisplayBalance(tombBalance), [tombBalance]);
  const tombBalanceInDollars =
    tombPriceInDollars && tombBalance
      ? (Number(tombPriceInDollars) * tombBalance.div('1000000000000000000').toNumber()).toFixed(2)
      : null;

  const tShareBalance = useTokenBalance(tombFinance.TSHARE);
  const displayTShareBalance = useMemo(() => getDisplayBalance(tShareBalance), [tShareBalance]);
  const tShareBalanceInDollars =
    tSharePriceInDollars && tShareBalance
      ? (Number(tSharePriceInDollars) * tShareBalance.div('1000000000000000000').toNumber()).toFixed(2)
      : null;

  const nrwlBalance = useTokenBalance(tombFinance.NRWL);
  const displayNrwlBalance = useMemo(() => getDisplayBalance(nrwlBalance), [nrwlBalance]);
  const nrwlBalanceInDollars =
    nrwlPriceInDollars && nrwlBalance
      ? (Number(nrwlPriceInDollars) * nrwlBalance.div('1000000000000000000').toNumber()).toFixed(2)
      : null;

  const tBondBalance = useTokenBalance(tombFinance.TBOND);
  const displayTBondBalance = useMemo(() => getDisplayBalance(tBondBalance), [tBondBalance]);
  const tBondBalanceInDollars =
    tBondPriceInDollars && displayTBondBalance
      ? (Number(tBondPriceInDollars) * tBondBalance.div('1000000000000000000').toNumber()).toFixed(2)
      : null;

  const Row = styled.div`
    align-items: center;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    margin-bottom: 8px;
  `;

  const [activeTab, setActiveTab] = useState('Farms');
  const [activeDetailsBoxTab, setActiveDetailsBoxTab] = useState('Deposit');

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 25,
      label: '25%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 75,
      label: '75%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  const zap = () => {
    console.log('zap');
  };

  const deposit = () => {
    console.log('deposit');
  };

  return (
    <Page>
      <Box>
        <div className={classes.topBanner}>
          <div className={classes.innerBanner}>
            <div className={classes.bannerTitle} style={{ fontWeight: 'bold' }}>
              Welcome to FrozenWalrus
            </div>
            <div className={classes.bannerDescription} style={{ fontWeight: 'bold' }}>
              <div>The advanced protocol</div>
              <div>based on Leverage Yield Farming.</div>
            </div>
            <div className={classes.bannerFooter}>
              If you want to know more,{' '}
              <a style={{ fontWeight: 'bold' }} href="#">
                check this website
              </a>
            </div>
          </div>

          {/* <img src={montainsImg} className={classes.bannerMountains} alt="Mountains" /> */}
        </div>
      </Box>

      <Box>
        <Grid container justify="center" spacing={6} className={`${classes.tabs} ${classes.uppercase}`}>
          <Grid
            item
            className={activeTab === 'Farms' ? classes.tabItemActive : classes.tabItem}
            onClick={() => setActiveTab('Farms')}
          >
            Farms
          </Grid>
          <Grid
            item
            className={activeTab === 'Boardrooms' ? classes.tabItemActive : classes.tabItem}
            onClick={() => setActiveTab('Boardrooms')}
          >
            Boardrooms
          </Grid>
          <Grid
            item
            className={activeTab === 'Nodes' ? classes.tabItemActive : classes.tabItem}
            onClick={() => setActiveTab('Nodes')}
          >
            Nodes
          </Grid>
          <Grid
            item
            className={activeTab === 'Rebates' ? classes.tabItemActive : classes.tabItem}
            onClick={() => setActiveTab('Rebates')}
          >
            Rebates
          </Grid>
        </Grid>
      </Box>

      <Box hidden={activeTab !== 'Farms'} mt={4}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <div className={classes.lineItem}>
              <Accordion
                expanded={expanded === 'farms'}
                onChange={handleChange('farms')}
                style={{ backgroundColor: 'transparent', padding: '15px' }}
              >
                <AccordionSummary
                  expandIcon={<img src={chevronDown} alt="down" className={classes.dropdown} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Grid container justify="space-between" alignItems="center" className={classes.lineItemInner}>
                    <Grid item className={classes.lineName}>
                      <img src={wlrsUsdcIcon} alt="WLRS-USDC.E" className={classes.lineLogo} />
                      WLRS-USDC.E
                    </Grid>
                    <Grid item>
                      <div className={classes.lineLabel}>APR</div>
                      <div className={classes.lineValue}>1112%</div>
                    </Grid>
                    <Grid item>
                      <div className={classes.lineLabel}>TVL</div>
                      <div className={classes.lineValue}>$3,121,244</div>
                    </Grid>
                    <Grid item>
                      <div className={classes.lineLabel}>Deposited</div>
                      <div className={classes.lineValueDeposited}>$2,211</div>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box className={classes.lineDetailsBox}>
                        <div className={classes.lineDetailsInner}>
                          <Grid container justify="center" spacing={6}>
                            <Grid
                              item
                              className={
                                activeDetailsBoxTab === 'Deposit'
                                  ? classes.tabDetailsItemActive
                                  : classes.tabDetailsItem
                              }
                              onClick={() => setActiveDetailsBoxTab('Deposit')}
                            >
                              DEPOSIT
                            </Grid>
                            <Grid
                              item
                              className={
                                activeDetailsBoxTab === 'Withdraw'
                                  ? classes.tabDetailsItemActive
                                  : classes.tabDetailsItem
                              }
                              onClick={() => setActiveDetailsBoxTab('Withdraw')}
                            >
                              WITHDRAW
                            </Grid>
                          </Grid>
                          <div className={classes.inputDetailsBox}>
                            <div className={classes.inputDetailsBoxInner}>
                              <Grid container mt={4} justify="space-between" alignItems="center">
                                <Grid item>
                                  <input type="number" placeholder="Enter amount" />
                                </Grid>
                                <Grid item className={classes.colorSecondary}>
                                  MAX
                                </Grid>
                              </Grid>
                              <div>Balance: 0</div>
                            </div>
                          </div>
                          <Box mt={3}>
                            <Slider
                              aria-label="Restricted values"
                              defaultValue={0}
                              valueLabelFormat={valueLabelFormat}
                              getAriaValueText={valuetext}
                              step={null}
                              valueLabelDisplay="auto"
                              marks={marks}
                            />
                          </Box>
                          <Box mt={2}>
                            <Grid container justify="space-between" spacing={3}>
                              <Grid item xs={6}>
                                <button className="secondary-button" title="Zap" onClick={zap}>
                                  Zap
                                </button>
                              </Grid>
                              <Grid item xs={6}>
                                <button className="primary-button" title="Deposit" onClick={deposit}>
                                  Deposit
                                </button>
                              </Grid>
                            </Grid>
                            <Box mt={3}>
                              <div className={`${classes.addRemoveLiquidity} ${classes.colorSecondary}`}>
                                Add / Remove Liquidity
                              </div>
                            </Box>
                          </Box>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box className={classes.lineDetailsBox}>
                        <div className={classes.lineDetailsInner}>
                          <Box>
                            <div className={classes.pendingRewards}>PENDING REWARDS</div>
                          </Box>
                          <Box style={{ textAlign: 'center' }} mt={6}>
                            <img src={wlrsIcon} width={82} height={82} alt="Walrus" />
                          </Box>
                          <Box mt={2}>
                            <Grid
                              container
                              direction="column"
                              spacing={0}
                              justify="center"
                              alignContent="center"
                              alignItems="center"
                            >
                              <Grid item className={classes.rewardTokenAmount}>
                                12 WLRS
                              </Grid>
                              <Grid item className={classes.rewardTokenValue}>
                                $123.42
                              </Grid>
                            </Grid>
                          </Box>
                          <Box mt={2}>
                            <Grid container justify="center">
                              <Grid item xs={12} sm={8} md={6}>
                                <button className="primary-button" title="Deposit" onClick={deposit}>
                                  CLAIM
                                </button>
                              </Grid>
                            </Grid>
                          </Box>
                          <Box mt={2}>
                            <div className={`${classes.addRemoveLiquidity} ${classes.colorSecondary}`}>
                              You will receive 12 WLRS per day
                            </div>
                          </Box>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.lineItem}>
              <Accordion
                expanded={expanded === 'farms'}
                onChange={handleChange('farms')}
                style={{ backgroundColor: 'transparent', padding: '15px' }}
              >
                <AccordionSummary
                  expandIcon={<img src={chevronDown} alt="down" className={classes.dropdown} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Grid container justify="space-between" alignItems="center" className={classes.lineItemInner}>
                    <Grid item className={classes.lineName}>
                      <img src={wlrsUsdcIcon} alt="WLRS-USDC.E" className={classes.lineLogo} />
                      WLRS-USDC.E
                    </Grid>
                    <Grid item>
                      <div className={classes.lineLabel}>APR</div>
                      <div className={classes.lineValue}>1112%</div>
                    </Grid>
                    <Grid item>
                      <div className={classes.lineLabel}>TVL</div>
                      <div className={classes.lineValue}>$3,121,244</div>
                    </Grid>
                    <Grid item>
                      <div className={classes.lineLabel}>Deposited</div>
                      <div className={classes.lineValueDeposited}>$2,211</div>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box className={classes.lineDetailsBox}>
                        <div className={classes.lineDetailsInner}>
                          <Grid container justify="center" spacing={6}>
                            <Grid
                              item
                              className={
                                activeDetailsBoxTab === 'Deposit'
                                  ? classes.tabDetailsItemActive
                                  : classes.tabDetailsItem
                              }
                              onClick={() => setActiveDetailsBoxTab('Deposit')}
                            >
                              DEPOSIT
                            </Grid>
                            <Grid
                              item
                              className={
                                activeDetailsBoxTab === 'Withdraw'
                                  ? classes.tabDetailsItemActive
                                  : classes.tabDetailsItem
                              }
                              onClick={() => setActiveDetailsBoxTab('Withdraw')}
                            >
                              WITHDRAW
                            </Grid>
                          </Grid>
                          <div className={classes.inputDetailsBox}>
                            <div className={classes.inputDetailsBoxInner}>
                              <Grid container mt={4} justify="space-between" alignItems="center">
                                <Grid item>
                                  <input type="number" placeholder="Enter amount" />
                                </Grid>
                                <Grid item className={classes.colorSecondary}>
                                  MAX
                                </Grid>
                              </Grid>
                              <div>Balance: 0</div>
                            </div>
                          </div>
                          <Box mt={3}>
                            <Slider
                              aria-label="Restricted values"
                              defaultValue={0}
                              valueLabelFormat={valueLabelFormat}
                              getAriaValueText={valuetext}
                              step={null}
                              valueLabelDisplay="auto"
                              marks={marks}
                            />
                          </Box>
                          <Box mt={2}>
                            <Grid container justify="space-between" spacing={3}>
                              <Grid item xs={6}>
                                <button className="secondary-button" title="Zap" onClick={zap}>
                                  Zap
                                </button>
                              </Grid>
                              <Grid item xs={6}>
                                <button className="primary-button" title="Deposit" onClick={deposit}>
                                  Deposit
                                </button>
                              </Grid>
                            </Grid>
                            <Box mt={3}>
                              <div className={`${classes.addRemoveLiquidity} ${classes.colorSecondary}`}>
                                Add / Remove Liquidity
                              </div>
                            </Box>
                          </Box>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box className={classes.lineDetailsBox}>
                        <div className={classes.lineDetailsInner}>
                          <Box>
                            <div className={classes.pendingRewards}>PENDING REWARDS</div>
                          </Box>
                          <Box style={{ textAlign: 'center' }} mt={6}>
                            <img src={wlrsIcon} width={82} height={82} alt="Walrus" />
                          </Box>
                          <Box mt={2}>
                            <Grid
                              container
                              direction="column"
                              spacing={0}
                              justify="center"
                              alignContent="center"
                              alignItems="center"
                            >
                              <Grid item className={classes.rewardTokenAmount}>
                                12 WLRS
                              </Grid>
                              <Grid item className={classes.rewardTokenValue}>
                                $123.42
                              </Grid>
                            </Grid>
                          </Box>
                          <Box mt={2}>
                            <Grid container justify="center">
                              <Grid item xs={12} sm={8} md={6}>
                                <button className="primary-button" title="Deposit" onClick={deposit}>
                                  CLAIM
                                </button>
                              </Grid>
                            </Grid>
                          </Box>
                          <Box mt={2}>
                            <div className={`${classes.addRemoveLiquidity} ${classes.colorSecondary}`}>
                              You will receive 12 WLRS per day
                            </div>
                          </Box>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box hidden={activeTab !== 'Boardrooms'}>
        <Grid container direction="column" spacing={2}>
          <Grid item className="">
            BR
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={3} style={{ marginTop: '500px' }}>
        <Grid item sm={12} md={6}>
          <HomeCard>
            <CardContent style={{ position: 'relative' }}>
              <h1
                style={{
                  textAlign: 'center',
                  marginBottom: '4%',
                  marginTop: '2%',
                  ...(isDesktop ? { fontSize: '2.5vw' } : { fontSize: '2.5rem' }),
                }}
              >
                My Balances
              </h1>
              <Balances>
                <StyledBalanceWrapper>
                  <TokenSymbol symbol="TOMB" />
                  <StyledBalance>
                    <StyledValue>{displayTombBalance}</StyledValue>
                    <h2
                      style={{
                        marginLeft: '2%',
                        fontWeight: '900',
                        ...(isDesktop ? { fontSize: '1.3rem' } : { fontSize: '1.5rem' }),
                      }}
                    >
                      WLRS
                    </h2>
                    <span
                      style={{
                        fontWeight: '400',
                        marginLeft: '2%',
                        ...(isDesktop ? { fontSize: '1.1rem' } : { fontSize: '1.2rem' }),
                      }}
                    >
                      (${tombBalanceInDollars ? tombBalanceInDollars : '-.----'})
                    </span>
                    <div className={classes.flex}>
                      <Button
                        color="primary"
                        target="_blank"
                        href={buyTombAddress}
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Buy
                      </Button>
                      <Button
                        color="primary"
                        target="_blank"
                        href="https://dexscreener.com/avalanche/0x82845B52b53c80595bbF78129126bD3E6Fc2C1DF"
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Chart
                      </Button>
                      <Button
                        color="primary"
                        target="_blank"
                        href="https://snowtrace.io/address/0x395908aeb53d33A9B8ac35e148E9805D34A555D3#code"
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Contract
                      </Button>
                    </div>
                  </StyledBalance>
                </StyledBalanceWrapper>
                <StyledBalanceWrapper>
                  <TokenSymbol symbol="WSHARE" />
                  <StyledBalance>
                    <StyledValue>{displayTShareBalance}</StyledValue>
                    <h2
                      style={{
                        marginLeft: '2%',
                        fontWeight: '900',
                        ...(isDesktop ? { fontSize: '1.3rem' } : { fontSize: '1.5rem' }),
                      }}
                    >
                      {' '}
                      WSHARE{' '}
                    </h2>
                    <span
                      style={{
                        fontWeight: '400',
                        marginLeft: '2%',
                        ...(isDesktop ? { fontSize: '1.1rem' } : { fontSize: '1.2rem' }),
                      }}
                    >
                      (${tShareBalanceInDollars ? tShareBalanceInDollars : '-.----'})
                    </span>
                    <div className={classes.flex}>
                      <Button
                        color="primary"
                        target="_blank"
                        href={buyTShareAddress}
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Buy
                      </Button>
                      <Button
                        color="primary"
                        target="_blank"
                        href="https://dexscreener.com/avalanche/0x03d15E0451e54Eec95ac5AcB5B0a7ce69638c62A"
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Chart
                      </Button>
                      <Button
                        color="primary"
                        target="_blank"
                        href="https://snowtrace.io/address/0xe6d1aFea0B76C8f51024683DD27FA446dDAF34B6#code"
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Contract
                      </Button>
                    </div>
                  </StyledBalance>
                </StyledBalanceWrapper>
                <StyledBalanceWrapper>
                  <TokenSymbol symbol="NRWL" />
                  <StyledBalance>
                    <StyledValue>{displayNrwlBalance}</StyledValue>
                    <h2
                      style={{
                        marginLeft: '2%',
                        fontWeight: '900',
                        ...(isDesktop ? { fontSize: '1.3rem' } : { fontSize: '1.5rem' }),
                      }}
                    >
                      {' '}
                      NRWL{' '}
                    </h2>
                    <span
                      style={{
                        fontWeight: '400',
                        marginLeft: '2%',
                        ...(isDesktop ? { fontSize: '1.1rem' } : { fontSize: '1.2rem' }),
                      }}
                    >
                      (${nrwlBalanceInDollars ? nrwlBalanceInDollars : '-.----'})
                    </span>
                    <div className={classes.flex}>
                      <Button
                        color="primary"
                        target="_blank"
                        href={buyNrwlAddress}
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Buy
                      </Button>
                      <Button
                        color="primary"
                        target="_blank"
                        href={`https://dexscreener.com/avalanche/${tombFinance.config.externalTokens['NRWL-YUSD-LP'][0]}`}
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Chart
                      </Button>
                      <Button
                        color="primary"
                        target="_blank"
                        href={`https://snowtrace.io/address/${tombFinance.NRWL.address}#code`}
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Contract
                      </Button>
                    </div>
                  </StyledBalance>
                </StyledBalanceWrapper>
                <StyledBalanceWrapper>
                  <TokenSymbol symbol="WBOND" />
                  <StyledBalance>
                    <StyledValue>{displayTBondBalance}</StyledValue>
                    <h2
                      style={{
                        marginLeft: '2%',
                        fontWeight: '900',
                        ...(isDesktop ? { fontSize: '1.3rem' } : { fontSize: '1.5rem' }),
                      }}
                    >
                      {' '}
                      WBOND{' '}
                    </h2>
                    <span
                      style={{
                        fontWeight: '400',
                        marginLeft: '2%',
                        ...(isDesktop ? { fontSize: '1.1rem' } : { fontSize: '1.2rem' }),
                      }}
                    >
                      (${tBondBalanceInDollars ? tBondBalanceInDollars : '-.----'})
                    </span>
                    <div className={classes.flex}>
                      <Button
                        color="primary"
                        href="/bonds"
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Bond
                      </Button>
                      <Button
                        color="primary"
                        target="_blank"
                        href="https://snowtrace.io/address/0xa8cFe8b4e8632cF551692Ddf78B97Ff4784dF14a#code"
                        variant="contained"
                        style={{
                          marginTop: '10px',
                          borderRadius: '10px',
                          width: '27%',
                          marginRight: '5%',
                          boxShadow: '4px 4px 12px black',
                        }}
                        className={classes.tokenButton}
                      >
                        Contract
                      </Button>
                    </div>
                  </StyledBalance>
                </StyledBalanceWrapper>
              </Balances>
            </CardContent>
            <Typography
              variant="h1"
              style={{
                fontWeight: 700,
                textAlign: 'center',
                fontSize: '1.0rem',
                ...(isDesktop ? { fontSize: '1.1rem' } : { fontSize: '2.5vw' }),
              }}
              gutterBottom
            >
              Utilize the Buy links here to avoid front-running bots.
            </Typography>
          </HomeCard>
        </Grid>

        <Grid item sm={12} md={6} container direction="column" style={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h1"
            style={{
              fontWeight: 900,
              textAlign: 'center',
              ...(isDesktop ? { fontSize: '4vw' } : { fontSize: '6vw' }),
            }}
            gutterBottom
          >
            Welcome to Frozen Walrus!
          </Typography>
          {/* <h2 style={{ textAlign: 'center', marginBottom: '5%', marginTop: '5%', 
      ...(isDesktop ? { fontSize: '1.8rem' } : { fontSize: '1.5rem'}) }}>
        The Peg Campaign Pool is now <StyledLink href="http://app.frozenwalrus.finance/pcp">open</StyledLink>! </h2>
      
       */}
          <HomeCard>
            <CardContent
              style={{ margin: '37px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
            >
              <div>
                <h1 style={{ fontSize: '2.0rem' }}>Total Value Locked</h1>
                <CountUp style={{ fontSize: '2.0rem' }} end={TVL} separator="," prefix="$" />
              </div>
              <img
                src={`${tvl}`}
                alt="tvl"
                style={!matches ? { width: 80, height: 80 } : { width: 128, height: 128 }}
              />
            </CardContent>
          </HomeCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <HomeCardBlue>
            <CardContent align="center">
              <h2 style={{ fontSize: '1.8rem' }}>WLRS-USDC.e LP</h2>
              <div style={{ position: 'relative', right: 5, top: 5 }}>
                <TokenSymbol size={50} symbol="WLRS-USDC-LP" />
              </div>
              <Box mt={2}>
                <span style={{ fontSize: '1.2rem' }}>
                  {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : '-.--'} WLRS /{' '}
                  {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : '-.--'} USDC.e <br />$
                  {tombLPStats?.priceOfOne ? tombLPStats.priceOfOne : '-.--'}
                </span>
              </Box>
              <Box></Box>
              <span style={{ fontSize: '0.9rem' }}>
                Liquidity: ${tombLPStats?.totalLiquidity ? tombLPStats.totalLiquidity : '-.--'} <br />
                Total supply:{' '}
                {tombLPStats?.totalSupply
                  ? Number(tombLPStats.totalSupply) < 1 / 10 ** 4
                    ? (Number(tombLPStats.totalSupply) * 10 ** 6).toFixed(4) + 'µ'
                    : tombLPStats.totalSupply
                  : '-.--'}
              </span>
            </CardContent>
          </HomeCardBlue>
        </Grid>
        <Grid item xs={12} sm={4}>
          <HomeCardBlue>
            <CardContent align="center">
              <h2 style={{ fontSize: '1.8rem' }}>WSHARE-USDC.e LP</h2>
              <div style={{ position: 'relative', right: 5, top: 5 }}>
                <TokenSymbol size={50} symbol="WSHARE-USDC-LP" />
              </div>
              <Box mt={2}>
                <span style={{ fontSize: '1.2rem' }}>
                  {tshareLPStats?.tokenAmount ? tshareLPStats?.tokenAmount : '-.--'} WSHARE /{' '}
                  {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : '-.--'} USDC.e <br />$
                  {tshareLPStats?.priceOfOne ? tshareLPStats.priceOfOne : '-.--'}
                </span>
              </Box>

              <span style={{ fontSize: '0.9rem' }}>
                Liquidity: ${tshareLPStats?.totalLiquidity ? tshareLPStats.totalLiquidity : '-.--'}
                <br />
                Total supply:{' '}
                {tshareLPStats?.totalSupply
                  ? Number(tshareLPStats.totalSupply) < 1 / 10 ** 4
                    ? (Number(tshareLPStats.totalSupply) * 10 ** 6).toFixed(4) + 'µ'
                    : tshareLPStats.totalSupply
                  : '-.--'}
              </span>
            </CardContent>
          </HomeCardBlue>
        </Grid>
        <Grid item xs={12} sm={4}>
          <HomeCardBlue>
            <CardContent align="center">
              <h2 style={{ fontSize: '1.8rem' }}>NRWL-YUSD LP</h2>
              <div style={{ position: 'relative', right: 5, top: 5 }}>
                <TokenSymbol size={60} symbol="NRWL-YUSD-LP" />
              </div>
              <Box mt={2}>
                <span style={{ fontSize: '1.2rem' }}>
                  {nrwlLPStats?.tokenAmount ? nrwlLPStats?.tokenAmount : '-.--'} NRWL /{' '}
                  {nrwlLPStats?.ftmAmount ? nrwlLPStats?.ftmAmount : '-.--'} YUSD <br />$
                  {nrwlLPStats?.priceOfOne ? nrwlLPStats.priceOfOne : '-.--'}
                </span>
              </Box>

              <span style={{ fontSize: '0.9rem' }}>
                Liquidity: ${nrwlLPStats?.totalLiquidity ? nrwlLPStats.totalLiquidity : '-.--'}
                <br />
                Total supply:{' '}
                {nrwlLPStats?.totalSupply
                  ? Number(nrwlLPStats.totalSupply) < 1 / 10 ** 4
                    ? (Number(nrwlLPStats.totalSupply) * 10 ** 6).toFixed(4) + 'µ'
                    : nrwlLPStats.totalSupply
                  : '-.--'}
              </span>
            </CardContent>
          </HomeCardBlue>
        </Grid>

        <Grid item xs={12} sm={3}>
          <HomeCardPurple>
            <CardContent style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', right: 2, top: 5 }}>
                <TokenSymbol symbol="USDC" size={50} />
              </div>
              <h2 align="center" style={{ fontSize: '1.8rem' }}>
                USDC.e
              </h2>
              <p align="center" style={{ fontSize: '1.2rem' }}>
                Current Price
              </p>
              <Box align="center">
                <span style={{ fontSize: '1.8rem' }}>${JOEPrice ? JOEPrice : '-.----'}</span>
              </Box>
              <Box align="center" marginBottom={3}>
                &nbsp;
              </Box>
              <Row>
                <span style={{ fontSize: '0.9rem' }}>
                  Market Cap:
                  <br />
                  24h Price Change: <br />
                  &nbsp;
                </span>
                <span style={{ fontSize: '0.9rem', textAlign: 'right' }}>
                  ${JOEMarketCap} <br />
                  {JOEPriceChange.toFixed(2)}% <br />
                  &nbsp;
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href={'https://traderjoexyz.com/trade?outputCurrency=0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664#/'}
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%', boxShadow: '4px 4px 12px black' }}
                  className={classes.button}
                >
                  Purchase
                </Button>
              </Box>
            </CardContent>
          </HomeCardPurple>
        </Grid>
        <Grid item xs={12} sm={3}>
          <HomeCardPurple>
            <CardContent style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', right: 2, top: 5 }}>
                <TokenSymbol symbol="TOMB" size={50} />
              </div>
              <h2 align="center" style={{ fontSize: '1.8rem' }}>
                WLRS
              </h2>
              <p style={{ fontSize: '1.2rem' }} align="center">
                Current Price
              </p>
              <Box align="center">
                <span style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {tombPriceInFTM ? tombPriceInFTM : '-.----'}{' '}
                  <img alt="logo" style={{ width: '30px', marginLeft: '6px' }} src={AvaxLogo} />
                </span>
              </Box>
              <Box align="center" marginBottom={3}>
                <span style={{ fontSize: '16px', alignContent: 'flex-start' }}>
                  ${tombPriceInDollars ? tombPriceInDollars : '-.--'}
                </span>
              </Box>
              <Row>
                <span style={{ fontSize: '0.8rem' }}>
                  Market Cap:
                  <br />
                  Circulating Supply: <br />
                  Total Supply:
                </span>
                <span style={{ fontSize: '0.8rem', textAlign: 'right' }}>
                  ${(tombCirculatingSupply * tombPriceInDollars).toFixed(2)} <br />
                  {tombCirculatingSupply} <br />
                  {tombTotalSupply}
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href={buyTombAddress}
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%', boxShadow: '4px 4px 12px black' }}
                  className={classes.button}
                >
                  Purchase
                </Button>
              </Box>
            </CardContent>
          </HomeCardPurple>
        </Grid>
        <Grid item xs={12} sm={3}>
          <HomeCardPurple>
            <CardContent style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', right: 0, top: 5 }}>
                <TokenSymbol symbol="WSHARE" size={50} />
              </div>
              <h2 style={{ fontSize: '1.7rem', marginRight: '10%' }} align="center">
                WSHARE
              </h2>
              <p style={{ fontSize: '1.2rem' }} align="center">
                Current Price
              </p>
              <Box align="center">
                <span style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {tSharePriceInFTM ? tSharePriceInFTM : '-.----'}{' '}
                  <img alt="logo" style={{ width: '30px', marginLeft: '6px' }} src={AvaxLogo} />
                </span>
              </Box>
              <Box align="center" marginBottom={3}>
                <span style={{ fontSize: '0.9rem' }}>${tSharePriceInDollars ? tSharePriceInDollars : '-.--'}</span>
              </Box>
              <Row>
                <span style={{ fontSize: '0.8rem' }}>
                  Market Cap: <br />
                  Circulating Supply: <br />
                  Total Supply:
                </span>
                <span style={{ fontSize: '0.8rem', textAlign: 'right' }}>
                  ${(tShareCirculatingSupply * tSharePriceInDollars).toFixed(2)} <br />
                  {tShareCirculatingSupply} <br />
                  {tShareTotalSupply}
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href={buyTShareAddress}
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%', boxShadow: '4px 4px 12px black' }}
                  className={classes.button}
                >
                  Purchase
                </Button>
              </Box>
            </CardContent>
          </HomeCardPurple>
        </Grid>
        <Grid item xs={12} sm={3}>
          <HomeCardPurple>
            <CardContent style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', right: 2, top: 5 }}>
                <TokenSymbol symbol="NRWL" size={50} />
              </div>
              <h2 style={{ fontSize: '1.8rem' }} align="center">
                NRWL
              </h2>
              <p style={{ fontSize: '1.2rem' }} align="center">
                Current Price
              </p>
              <Box align="center">
                <span style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {nrwlPriceInFTM ? nrwlPriceInFTM : '-.----'}{' '}
                  <img alt="logo" style={{ width: '30px', marginLeft: '6px' }} src={yusdLogo} />
                </span>
              </Box>
              <Box align="center" marginBottom={3}>
                <span style={{ fontSize: '0.9rem' }}>${nrwlPriceInDollars ? nrwlPriceInDollars : '-.--'}</span>
              </Box>
              <Row>
                <span style={{ fontSize: '0.8rem' }}>
                  Market Cap: <br />
                  Circulating Supply: <br />
                  Total Supply:
                </span>
                <span style={{ fontSize: '0.8rem', textAlign: 'right' }}>
                  ${(nrwlCirculatingSupply * nrwlPriceInDollars).toFixed(2)} <br />
                  {nrwlCirculatingSupply} <br />
                  {nrwlTotalSupply}
                </span>
              </Row>
              <Box>
                <Button
                  color="primary"
                  target="_blank"
                  href={buyNrwlAddress}
                  variant="contained"
                  style={{ marginTop: '10px', borderRadius: '10px', width: '100%', boxShadow: '4px 4px 12px black' }}
                  className={classes.button}
                >
                  Purchase
                </Button>
              </Box>
            </CardContent>
          </HomeCardPurple>
        </Grid>
        {/* <Grid item xs={12} sm={3}>
      <HomeCard>
        <CardContent style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', right: 5, top: 5 }}>
            <TokenSymbol symbol="WBOND" size={50} />
          </div>
          <h2 align="center">WBOND</h2>
          <p align="center">Current Price</p>
          <Box align="center">
            <span style={{ fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {tBondPriceInFTM ? tBondPriceInFTM : '-.----'}{' '}
              <img alt="logo" style={{ width: '30px', marginLeft: '6px' }} src={AvaxLogo} />
            </span>
          </Box>
          <Box align="center" marginBottom={3}>
            <span style={{ fontSize: '16px' }}>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}</span>
          </Box>
          <Row>
            <span style={{ fontSize: '14px' }}>
              Market Cap: <br />
              Circulating Supply: <br />
              Total Supply:
            </span>
            <span style={{ fontSize: '14px', textAlign: 'right' }}>
              ${(tBondCirculatingSupply * tBondPriceInDollars).toFixed(2)} <br />
              {tBondCirculatingSupply} <br />
              {tBondTotalSupply}
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
            >
              Bond
            </Button>
          </Box>
        </CardContent>
      </HomeCard>
    </Grid> */}
      </Grid>
    </Page>
  );
};

const StyledValue = styled.div`
  //color: ${(props) => props.theme.color.grey[300]};
  font-size: 30px;
  font-weight: 700;
`;

const StyledBalance = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 1%;
  margin-bottom: 3%;
`;

export default Home;
