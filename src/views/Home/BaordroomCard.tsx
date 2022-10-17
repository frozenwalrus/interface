import wlrsUsdcIcon from '../../assets/img/wlrs-usdc.png';
import xWlrsIcon from '../../assets/img/xWLRS.png';
import wShareUSDC from '../../assets/img/WSHARE-USDC.E.png';
import nrwlYusd from '../../assets/img/nrwlYusd.png';
import wlrsIcon from '../../assets/img/SVG_Icons_and_web_bg/WLRS.svg';
import wshareIcon from '../../assets/img/wshare.png';

import moment from 'moment';
import ProgressCountdown from '../Masonry/components/ProgressCountdown';

import chevronDown from '../../assets/img/chevrondown.png';
import React, { useState } from 'react';
import { Box, Grid, Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from '@material-ui/core';

interface BoardroomCardProps {
  boardroomName: string;
  currentEpoch: number;
  nextEpoch: Date;
  twap: number;
  apr: number;
  dailyApr: number;
  abovePeg: number;
  totalStaked: number;
}

const BoardroomCard: React.FC<BoardroomCardProps> = ({ boardroomName, currentEpoch, nextEpoch, twap, apr, dailyApr, abovePeg, totalStaked }) => {
  const widthUnder600 = useMediaQuery('(max-width:600px)');
  const [expanded, setExpanded] = useState(false);
  const expand = () => {
    setExpanded(!expanded);
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
              <Grid container justify="space-between" className="lineItemInner">
                <Grid item className="lineName" xs={12} sm={4} style={{ textAlign: widthUnder600 ? 'center' : 'left' }}>
                  <img src={wlrsUsdcIcon} alt="WLRS-USDC.E" className="lineLogo" />
                  {boardroomName}
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={3}
                  style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}
                >
                  <div className="lineLabel">Current Epoch</div>
                  <div className="lineValue">{currentEpoch}</div>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={3}
                  style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}
                >
                  <div className="lineLabel">Next Epoch</div>
                  <div className="lineValue">
                    <ProgressCountdown
                      base={moment().toDate()}
                      hideBar={true}
                      deadline={nextEpoch}
                      description="Next Epoch"
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={2}
                  style={{ marginTop: widthUnder600 ? '15px' : '0', textAlign: widthUnder600 ? 'center' : 'left' }}
                >
                  <div className="lineLabel">TWAP</div>
                  <div className="lineValue">{twap}</div>
                </Grid>
                <Grid item xs={3} sm={4} style={{ marginTop: '15px', textAlign: widthUnder600 ? 'center' : 'left' }}>
                  <div className="lineLabel" style={{ paddingLeft: widthUnder600 ? '0' : '80px' }}>
                    APR
                  </div>
                  <div className="lineValue" style={{ paddingLeft: widthUnder600 ? '0' : '80px' }}>
                    {apr}%
                  </div>
                </Grid>
                <Grid item xs={3} sm={3} style={{ marginTop: '15px', textAlign: widthUnder600 ? 'center' : 'left' }}>
                  <div className="lineLabel">Daily APR</div>
                  <div className="lineValue">{dailyApr}%</div>
                </Grid>
                <Grid item xs={4} sm={3} style={{ marginTop: '15px', textAlign: widthUnder600 ? 'center' : 'left' }}>
                  <div className="lineLabel">Epochs Above PEG</div>
                  <div className="lineValue">{abovePeg}%</div>
                </Grid>
                <Grid item xs={3} sm={2} style={{ marginTop: '15px', textAlign: widthUnder600 ? 'center' : 'left' }}>
                  <div className="lineLabel">WSHARE Staked</div>
                  <div className="lineValue">{totalStaked}</div>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box className="lineDetailsBox">
                    <div className="line-details-inner">
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
                          <Grid item className="rewardTokenAmount">
                            425 WSHARE Staked
                          </Grid>
                          <Grid item className="rewardTokenValue">
                            $2423.42
                          </Grid>
                        </Grid>
                      </Box>
                      <Box mt={2}>
                        <div className="inputDetailsBoxInner">
                          <Grid
                            container
                            style={{ marginTop: '40px' }}
                            justify="space-between"
                            alignItems="center"
                            wrap="nowrap"
                          >
                            <Grid item xs={10} md={11}>
                              <input type="number" placeholder="Enter amount" className="amount-input" />
                            </Grid>
                            <Grid item xs={2} md={1} className="color-secondary">
                              MAX
                            </Grid>
                          </Grid>
                          <div className="balance">Balance: 0 WSHARE</div>
                        </div>
                      </Box>

                      <Box mt={2}>
                        <Grid container justify="space-between" spacing={3}>
                          <Grid item xs={6}>
                            <button className="secondary-button" title="Zap">
                              WITHDRAW
                            </button>
                          </Grid>
                          <Grid item xs={6}>
                            <button className="primary-button" title="Deposit">
                              DEPOSIT
                            </button>
                          </Grid>
                        </Grid>
                        <Box mt={2}>
                          <div className="pendingRewardsValue">
                            Withdraw possible in: <span className="withdrawTimeLeft">11:41:21</span>
                          </div>
                        </Box>
                      </Box>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Box className="lineDetailsBox">
                    <div className="line-details-inner">
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
                          <Grid item className="reward-token-amount">
                            12 WLRS Earned
                          </Grid>
                          <Grid item className="reward-token-value">
                            $123.42
                          </Grid>
                        </Grid>
                      </Box>
                      <Box mt={8}>
                        <Grid container justify="space-between" spacing={3}>
                          <Grid item xs={6}>
                            <button className="secondary-button" title="Zap">
                              CLAIM & WITHDRAW
                            </button>
                          </Grid>
                          <Grid item xs={6}>
                            <button className="primary-button" title="Deposit">
                              CLAIM
                            </button>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box mt={8}>
                        <div className="pending-rewards-value">
                          Claim possible in: <span className="time-left">04:23:11</span>
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

export default BoardroomCard;
