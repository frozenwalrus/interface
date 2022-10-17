import React, { useState } from 'react';
import wlrsUsdcIcon from '../../assets/img/wlrs-usdc.png';
import wlrsIcon from '../../assets/img/SVG_Icons_and_web_bg/WLRS.svg';
import chevronDown from '../../assets/img/chevrondown.png';

import { Box, Grid, Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from '@material-ui/core';
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
    minHeight: '415px',
    backgroundColor: '#1D1F2C',
    borderRadius: '10px',
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
  pendingRewardsTitle: {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '22px',
    textAlign: 'center',
    letterSpacing: '0.05em',
    color: '#FCFCFC',
  },
  pendingRewardsValue: {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '22px',
    textAlign: 'center',
    letterSpacing: '0.05em',
    color: '#FCFCFC',
  },
  timeLeft: {
    color: '#00F0E2',
  },
  withdrawTimeLeft: {
    color: '#07C4FF',
  },
  colorSecondary: {
    color: '#9AA4DA',
  },
  lineDetailsInner: {
    padding: '35px',
    minHeight: '345px' 
  },
  balance: {
    paddingLeft: '3px'
  }
}));

const Farms = () => {
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
              <Grid container justify="space-between" className={classes.lineItemInner}>
                <Grid item className={classes.lineName} xs={12} sm={4} style={{ textAlign: widthUnder600 ? 'center' : 'left' }}>
                  <img src={wlrsUsdcIcon} alt="WLRS-USDC.E" className={classes.lineLogo} />
                  WLRS BOARDROOM
                </Grid>
                <Grid item xs={3} sm={3} style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}>
                  <div className={classes.lineLabel}>Current Epoch</div>
                  <div className={classes.lineValue}>108</div>
                </Grid>
                <Grid item xs={3} sm={3} style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}>
                  <div className={classes.lineLabel}>Next Epoch</div>
                  <div className={classes.lineValue}>05:04:02</div>
                </Grid>
                <Grid item xs={3} sm={2} style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}>
                  <div className={classes.lineLabel}>TWAP</div>
                  <div className={classes.lineValue}>0.233</div>
                </Grid>
                <Grid item xs={3} sm={4} style={{marginTop: '15px', textAlign: widthUnder600 ? 'center' : 'left'}}>
                  <div className={classes.lineLabel} style={{ paddingLeft: widthUnder600 ? '0' : '80px' }}>
                    APR
                  </div>
                  <div className={classes.lineValue} style={{ paddingLeft: widthUnder600 ? '0' : '80px' }}>
                    1112%
                  </div>
                </Grid>
                <Grid item xs={3} sm={3} style={{marginTop: '15px', textAlign: widthUnder600 ? 'center' : 'left'}}>
                  <div className={classes.lineLabel}>Daily APR</div>
                  <div className={classes.lineValue}>10.2%</div>
                </Grid>
                <Grid item xs={4} sm={3} style={{marginTop: '15px', textAlign: widthUnder600 ? 'center' : 'left'}}>
                  <div className={classes.lineLabel}>Epochs Above PEG</div>
                  <div className={classes.lineValue}>31%</div>
                </Grid>
                <Grid item xs={3} sm={2} style={{marginTop: '15px', textAlign: widthUnder600 ? 'center' : 'left'}}>
                  <div className={classes.lineLabel}>WSHARE Staked</div>
                  <div className={classes.lineValue}>2003.11</div>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box className={classes.lineDetailsBox}>
                    <div className={classes.lineDetailsInner}>
                      <Box style={{ textAlign: 'center' }}>
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
                            425 WSHARE Staked
                          </Grid>
                          <Grid item className={classes.rewardTokenValue}>
                            $2423.42
                          </Grid>
                        </Grid>
                      </Box>
                      <Box mt={2}>
                        <div className={classes.inputDetailsBoxInner}>
                        <Grid container mt={4} justify="space-between" alignItems="center" wrap='nowrap'>
                            <Grid item xs={10} md={11}>
                              <input type="number" placeholder="Enter amount" className="amount-input" />
                            </Grid>
                            <Grid item xs={2} md={1} className={classes.colorSecondary}>
                              MAX
                            </Grid>
                          </Grid>
                          <div className={classes.balance}>Balance: 0 WSHARE</div>
                        </div>
                      </Box>

                      <Box mt={2}>
                        <Grid container justify="space-between" spacing={3}>
                          <Grid item xs={6}>
                            <button className="secondary-button" title="Zap" onClick={zap}>
                              WITHDRAW
                            </button>
                          </Grid>
                          <Grid item xs={6}>
                            <button className="primary-button" title="Deposit" onClick={deposit}>
                              DEPOSIT
                            </button>
                          </Grid>
                        </Grid>
                        <Box mt={2}>
                          <div className={classes.pendingRewardsValue}>
                            Withdraw possible in: <span className={classes.withdrawTimeLeft}>11:41:21</span>
                          </div>
                        </Box>
                      </Box>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Box className={classes.lineDetailsBox}>
                    <div className={classes.lineDetailsInner}>
                      <Box style={{ textAlign: 'center' }}>
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
                            12 WLRS Earned
                          </Grid>
                          <Grid item className={classes.rewardTokenValue}>
                            $123.42
                          </Grid>
                        </Grid>
                      </Box>
                      <Box mt={8}>
                        <Grid container justify="space-between" spacing={3}>
                          <Grid item xs={6}>
                            <button className="secondary-button" title="Zap" onClick={zap}>
                              CLAIM & WITHDRAW
                            </button>
                          </Grid>
                          <Grid item xs={6}>
                            <button className="primary-button" title="Deposit" onClick={deposit}>
                              CLAIM
                            </button>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box mt={8}>
                        <div className={classes.pendingRewardsValue}>
                          Claim possible in: <span className={classes.timeLeft}>04:23:11</span>
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
  );
};
export default Farms;
