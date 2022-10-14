import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import Nav from '../Nav';
import discordIcon from '../../assets/img/SVG_Icons_and_web_bg/discord.svg';
import youtubeIcon from '../../assets/img/SVG_Icons_and_web_bg/youtube.svg';
import telegramIcon from '../../assets/img/SVG_Icons_and_web_bg/telegram.svg';
import githubIcon from '../../assets/img/SVG_Icons_and_web_bg/github.svg';
import twitterIcon from '../../assets/img/SVG_Icons_and_web_bg/twitter.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#12141D',
  },
  footerInner: {
    padding: '40px',
    color: '#9AA4DA',
  },
  copyright: {
    color: '#FCFCFC'
  },
  bottomLine: {
    paddingLeft: '30px', 
    paddingRight: '30px'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.footerInner}>
        <Nav />
        <Box mt={3}>
          <Grid container justify="center">
            <Grid item>
              An algorithmic stablecoin on the Fantom Opera blockchain, pegged to the price of 1 FTM 3omb utilizes
              multiple bonding mechanisms at the 3DAO as well as seigniorage.
            </Grid>
          </Grid>
          <Box mt={5} className={classes.bottomLine}>
            <Grid container justify="space-between" alignContent="center" alignItems="center">
              <Grid item>
                <Grid container justify="space-between" spacing={5}>
                  <Grid item><img src={discordIcon} alt="Discord" width={40} height={40} /></Grid>
                  <Grid item><img src={youtubeIcon} alt="Youtube" width={40} height={40} /></Grid>
                  <Grid item><img src={telegramIcon} alt="Telegram" width={40} height={40} /></Grid>
                  <Grid item><img src={githubIcon} alt="Github" width={40} height={40} /></Grid>
                  <Grid item><img src={twitterIcon} alt="Twitter" width={40} height={40} /></Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.copyright}>Copyright © frozenwalrus.finance 2022</Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;
