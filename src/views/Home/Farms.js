import React, { useState } from 'react';
import wlrsUsdcIcon from '../../assets/img/wlrs-usdc.png';
import wlrsIcon from '../../assets/img/SVG_Icons_and_web_bg/WLRS.svg';
import chevronDown from '../../assets/img/chevrondown.png';

import { Box, Grid, Accordion, AccordionDetails, AccordionSummary, Slider } from '@material-ui/core';
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
  return (
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
                            activeDetailsBoxTab === 'Deposit' ? classes.tabDetailsItemActive : classes.tabDetailsItem
                          }
                          onClick={() => setActiveDetailsBoxTab('Deposit')}
                        >
                          DEPOSIT
                        </Grid>
                        <Grid
                          item
                          className={
                            activeDetailsBoxTab === 'Withdraw' ? classes.tabDetailsItemActive : classes.tabDetailsItem
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
                            activeDetailsBoxTab === 'Deposit' ? classes.tabDetailsItemActive : classes.tabDetailsItem
                          }
                          onClick={() => setActiveDetailsBoxTab('Deposit')}
                        >
                          DEPOSIT
                        </Grid>
                        <Grid
                          item
                          className={
                            activeDetailsBoxTab === 'Withdraw' ? classes.tabDetailsItemActive : classes.tabDetailsItem
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
  );
};
export default Farms;
