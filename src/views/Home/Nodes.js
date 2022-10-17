import React, { useState } from 'react';
import wlrsUsdcIcon from '../../assets/img/wlrs-usdc.png';
import wlrsIcon from '../../assets/img/SVG_Icons_and_web_bg/WLRS.svg';
import chevronDown from '../../assets/img/chevrondown.png';

import { Box, Grid, Accordion, AccordionDetails, AccordionSummary, Slider, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  lineItem: {
    background: '#12141D',
    borderRadius: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  lineItemInner: {},
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
  statBox: {
    minHeight: '60px',
    backgroundColor: '#1D1F2C',
    borderRadius: '10px',
  },
  statBoxInner: {
    padding: '15px',
    fontSize: '14px',
  },
  lineDetailsBox: {
    minHeight: '330px',
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
    minHeight: '345px',
  },
  balance: {
    paddingLeft: '3px',
  },
  sliderValue: {
    color: '#FCFCFC',
    fontWeight: '900',
    fontSize: '16px',
    lineHeight: '22px',
  },
  sliderBox: {
    paddingLeft: '5px',
    paddingRight: '5px',
  },
}));

const Nodes = () => {
  const classes = useStyles();

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

  const widthUnder600 = useMediaQuery('(max-width:600px)');

  const [sliderValue, setSliderValue] = useState(0);
  const changeSliderValue = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <div className={classes.lineItem}>
          <Accordion
            expanded={expanded === 'farms'}
            onChange={handleChange('farms')}
            style={{ backgroundColor: 'transparent', padding: widthUnder600 ? '10px 0 10px 0' : '15px' }}
          >
            <AccordionSummary
              expandIcon={<img src={chevronDown} alt="down" className={classes.dropdown} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid container justify="space-between" alignItems="center" className={classes.lineItemInner}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={classes.lineName}
                  style={{ textAlign: widthUnder600 ? 'center' : 'left' }}
                >
                  <img src={wlrsUsdcIcon} alt="WLRS-USDC.E" className={classes.lineLogo} />
                  WLRS-USDC.E NODE
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={4}
                  style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}
                >
                  <div className={classes.lineLabel}>DAILY APR</div>
                  <div className={classes.lineValue}>1.5%</div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={2}
                  style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}
                >
                  <div className={classes.lineLabel}>YEARLY APR</div>
                  <div className={classes.lineValue}>322%</div>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Grid container spacing={1} justify="space-between">
                    <Grid item xs={4} sm={4} md={4} lg={2}>
                      <div className={classes.statBox}>
                        <div className={classes.statBoxInner}>
                          <div className={classes.lineLabel}>Your Nodes | TVL</div>
                          <div className={classes.lineValue}>321 | $3,113</div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={2}>
                      <div className={classes.statBox}>
                        <div className={classes.statBoxInner}>
                          <div className={classes.lineLabel}>APR | Daily APR</div>
                          <div className={classes.lineValue}>321% | 1.5%</div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={2}>
                      <div className={classes.statBox}>
                        <div className={classes.statBoxInner}>
                          <div className={classes.lineLabel}>Amount Claimed</div>
                          <div className={classes.lineValue}>321,111</div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={2}>
                      <div className={classes.statBox}>
                        <div className={classes.statBoxInner}>
                          <div className={classes.lineLabel}>Max Possible Pay</div>
                          <div className={classes.lineValue}>421,331</div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={2}>
                      <div className={classes.statBox}>
                        <div className={classes.statBoxInner}>
                          <div className={classes.lineLabel}>Total Nodes</div>
                          <div className={classes.lineValue}>211,333</div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={2}>
                      <div className={classes.statBox}>
                        <div className={classes.statBoxInner}>
                          <div className={classes.lineLabel}>TVL</div>
                          <div className={classes.lineValue}>$3,113</div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
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
                              <Grid container mt={4} justify="space-between" alignItems="center" wrap="nowrap">
                                <Grid item xs={10} md={11}>
                                  <input type="number" placeholder="Enter amount of Nodes" className="amount-input" />
                                </Grid>
                                <Grid item xs={2} md={1} className={classes.colorSecondary}>
                                  MAX
                                </Grid>
                              </Grid>
                              <div className={classes.balance}>Balance: 0 WLRS-USDC.E</div>
                            </div>
                          </div>
                          <Box mt={2}>
                            <div className={classes.sliderValue}>{sliderValue}%</div>
                            <div className={classes.sliderBox}>
                              <Slider
                                defaultValue={0}
                                onChange={changeSliderValue}
                                valueLabelDisplay={'off'}
                                marks={marks}
                              />
                            </div>
                          </Box>
                          <Box mt={0}>
                            <Grid container justify="center" spacing={3}>
                              <Grid item xs={6}>
                                <button className="primary-button" title="Deposit" onClick={deposit}>
                                  Create Nodes
                                </button>
                              </Grid>
                            </Grid>
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
                            <Grid container justify="space-between" spacing={3}>
                              <Grid item xs={6}>
                                <button className="primary-button" title="Claim" onClick={zap}>
                                  Claim
                                </button>
                              </Grid>
                              <Grid item xs={6}>
                                <button className="secondary-button" title="Compound" onClick={deposit}>
                                  Compound
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
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid>
    </Grid>
  );
};
export default Nodes;
