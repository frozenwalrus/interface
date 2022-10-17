import wlrsUsdcIcon from '../../assets/img/wlrs-usdc.png';
import wlrsIcon from '../../assets/img/SVG_Icons_and_web_bg/WLRS.svg';
import chevronDown from '../../assets/img/chevrondown.png';
import React, { useEffect, useMemo, useState } from 'react';
import { Box, Grid, Accordion, AccordionDetails, AccordionSummary, Slider, useMediaQuery } from '@material-ui/core';
import './Cards.css';
import { Bank, PoolStats, TokenStat } from '../../tomb-finance/types';
import useEarnings from '../../hooks/useEarnings';
import useHarvest from '../../hooks/useHarvest';
import { getDisplayBalance } from '../../utils/formatBalance';
import useGetTokenStats from '../../hooks/useGetTokenStats';
import useTokenBalance from '../../hooks/useTokenBalance';
import useStakedBalance from '../../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';

interface FarmCardProps {
  bankName: string;
  bank: Bank;
  tokenStats: TokenStat;
  poolStats: PoolStats;
  account: string;
}

const FarmCard: React.FC<FarmCardProps> = ({ bankName, bank, poolStats, account }) => {
  const widthUnder600 = useMediaQuery('(max-width:600px)');
  const [activeDetailsBoxTab, setActiveDetailsBoxTab] = useState('Deposit');
  const [expanded, setExpanded] = React.useState(false);
  // Earnings
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  // Get Earned Token
  const earnedTokenStats = useGetTokenStats(bank.earnTokenName);
  const earnedTokenPriceOfOneInDollars = useMemo(
    () => (earnedTokenStats ? Number(earnedTokenStats.priceInDollars).toFixed(2) : null),
    [earnedTokenStats],
  );
  const totalEarnedInDollars = (Number(earnedTokenPriceOfOneInDollars) * Number(getDisplayBalance(earnings))).toFixed(
    2,
  );
  const walletTokenBalance = useTokenBalance(bank.depositToken);
  const stakedBalance = useStakedBalance(bank.contract, bank.poolId);
  const stakedBalanceNumber = Number(
    getDisplayBalance(stakedBalance, bank.depositToken.decimal, bank.depositToken.decimal === 6 ? 3 : 9),
  ).toFixed(3);
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);
  const depositedTokenPriceInDollars = useMemo(
    () => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null),
    [stakedTokenPriceInDollars],
  );
  const multiplier =
    (bank.depositTokenName.includes('WLRS') || bank.depositTokenName.includes('WSHARE-USDC-LP')) &&
    !bank.depositTokenName.includes('WLRS-USDIBS-LP') &&
    !bank.depositTokenName.includes('XWLRS')
      ? 10 ** 6
      : 1;
  const depositedInDollars = (
    Number(depositedTokenPriceInDollars) *
    Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal, bank.depositToken.decimal === 6 ? 3 : 9)) *
    multiplier
  ).toFixed(2);

  const { onReward } = useHarvest(bank);

  const expand = () => {
    setExpanded(!expanded);
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

  useEffect(() => {
    if (poolStats && depositedInDollars && earnedTokenPriceOfOneInDollars) {
      const rewardsTokenInDollar = Number(depositedInDollars) * (Number(poolStats.dailyAPR) / 100);
      setRewardsPerDay(rewardsTokenInDollar / Number(earnedTokenPriceOfOneInDollars));
    }
  }, [poolStats, depositedInDollars, earnedTokenPriceOfOneInDollars]);
  
  const [rewardsPerDay, setRewardsPerDay] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  const changeSliderValue = (event: any, newValue: any) => {
    setSliderValue(newValue);
    if (activeDetailsBoxTab === 'Deposit') {
      setInputValue((Number(walletTokenBalance) / 1e18) * (newValue / 100));
    } else if (activeDetailsBoxTab === 'Withdraw') {
      setInputValue(Number(stakedBalanceNumber) * (newValue / 100));
    }
  };

  const maxClicked = () => {
    if (activeDetailsBoxTab === 'Deposit') {
      setInputValue(Number(walletTokenBalance) / 1e18);
    } else if (activeDetailsBoxTab === 'Withdraw') {
      setInputValue(Number(stakedBalanceNumber));
    }
    setSliderValue(100)
  };

  return (
    <>
      <Grid item xs={12}>
        <div className="lineItem">
          <Accordion
            expanded={expanded}
            onChange={expand}
            style={{ backgroundColor: 'transparent', padding: widthUnder600 ? '10px 0 10px 0' : '15px' }}
          >
            <AccordionSummary
              expandIcon={<img src={chevronDown} alt="down" className="dropdown" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid container justify={'space-between'} alignItems="center" className="lineItemInner">
                <Grid
                  item
                  className="lineName"
                  xs={12}
                  sm={4}
                  md={4}
                  style={{ textAlign: widthUnder600 ? 'center' : 'left' }}
                >
                  <img src={wlrsUsdcIcon} alt={bankName} className="lineLogo" />
                  {bankName}
                </Grid>
                <Grid
                  item
                  xs={3}
                  style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}
                >
                  <div className="lineLabel">APR</div>
                  <div className="lineValue">{poolStats?.yearlyAPR ? poolStats?.yearlyAPR : '--.--'}%</div>
                </Grid>
                <Grid
                  item
                  xs={3}
                  style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}
                >
                  <div className="lineLabel">TVL</div>
                  <div className="lineValue">
                    ${poolStats?.TVL ? Number(poolStats?.TVL).toLocaleString('en-US') : '--.--'}
                  </div>
                </Grid>
                <Grid
                  item
                  xs={widthUnder600 ? 3 : 2}
                  style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}
                >
                  <div className="lineLabel">Deposited</div>
                  <div className="lineValueDeposited">
                    <span style={{ color: '#fcfcfc' }}>{stakedBalanceNumber ? stakedBalanceNumber : '--.--'}</span>
                    <span style={{ marginLeft: '5px', fontSize: '14px' }}>(${depositedInDollars})</span>
                  </div>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box className="lineDetailsBox">
                    <div className="lineDetailsInner">
                      <Grid container justify="center" spacing={6}>
                        <Grid
                          item
                          className={activeDetailsBoxTab === 'Deposit' ? 'tabDetailsItemActive' : 'tabDetailsItem'}
                          onClick={() => setActiveDetailsBoxTab('Deposit')}
                        >
                          DEPOSIT
                        </Grid>
                        <Grid
                          item
                          className={activeDetailsBoxTab === 'Withdraw' ? 'tabDetailsItemActive' : 'tabDetailsItem'}
                          onClick={() => setActiveDetailsBoxTab('Withdraw')}
                        >
                          WITHDRAW
                        </Grid>
                      </Grid>
                      <div className="inputDetailsBox">
                        <div className="inputDetailsBoxInner">
                          <Grid container justify="space-between" alignItems="center" wrap="nowrap">
                            <Grid item xs={10} md={11}>
                              <input
                                type="number"
                                placeholder="Enter amount"
                                className="amount-input"
                                value={inputValue}
                              />
                            </Grid>
                            <Grid item xs={2} md={1} className="colorSecondary">
                              <div onClick={maxClicked} className="max-button">
                                MAX
                              </div>
                            </Grid>
                          </Grid>
                          <div className="balance">
                            {activeDetailsBoxTab === 'Deposit' && (
                              <span>
                                Balance: {getDisplayBalance(walletTokenBalance)} {bank.depositTokenName}
                              </span>
                            )}
                            {activeDetailsBoxTab === 'Withdraw' && (
                              <span>
                                Staked: {stakedBalanceNumber} {bank.depositTokenName}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Box mt={2}>
                        <div className="sliderValue">{sliderValue}%</div>
                        <div className="sliderBox">
                          <Slider
                            defaultValue={0}
                            onChange={changeSliderValue}
                            valueLabelDisplay={'off'}
                            marks={marks}
                            value={sliderValue}
                          />
                        </div>
                      </Box>
                      <Box mt={0}>
                        <Grid container justify="space-between" spacing={3}>
                          <Grid item xs={6}>
                            <button className="secondary-button" title="Zap">
                              Zap
                            </button>
                          </Grid>
                          <Grid item xs={6}>
                            <button className="primary-button" title="Deposit">
                              Deposit
                            </button>
                          </Grid>
                        </Grid>
                        <Box mt={3}>
                          <div className="addRemoveLiquidity colorSecondary">Add / Remove Liquidity</div>
                        </Box>
                      </Box>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Box className="lineDetailsBox">
                    <div className="lineDetailsInner">
                      <Box>
                        <div className="pendingRewards">PENDING REWARDS</div>
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
                          <Grid item className="rewardTokenAmount">
                            {getDisplayBalance(earnings)} {bank.earnTokenName}
                          </Grid>
                          <Grid item className="rewardTokenValue">
                            ${totalEarnedInDollars}
                          </Grid>
                        </Grid>
                      </Box>
                      <Box mt={2}>
                        <Grid container justify="center">
                          <Grid item xs={6}>
                            <button
                              className="primary-button"
                              title="Claim"
                              onClick={onReward}
                              disabled={earnings.eq(0)}
                            >
                              CLAIM
                            </button>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box mt={2}>
                        <div className="rewardsPerDay colorSecondary">
                          <span>
                            {rewardsPerDay.toFixed(2)} {bank.earnTokenName} per day
                            <span style={{ marginLeft: '5px', fontSize: '14px' }} className="rewardTokenValue">
                              ($
                              {(rewardsPerDay * Number(earnedTokenPriceOfOneInDollars)).toFixed(3)})
                            </span>
                          </span>
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
    </>
  );
};

export default FarmCard;
