import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Link } from '@material-ui/core';

import TwitterImage from '../../assets/img/twitter.svg';
import DiscordImage from '../../assets/img/discord.svg';
import MediumImage from '../../assets/img/medium.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    paddingTop: '15px',
    paddingBottom: '15px',
    width: '100%',
    backgroundColor: 'transparent',
    textAlign: 'center',
    height: '1.3rem',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  link: {
    width: '24px',
    height: '24px',
    display: 'inline',
    marginLeft: '20px',
  },

  img: {
    width: '40px',
    height: '40px',
    opacity: 0.8,
  },
  elipse: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    left: '1700px',
    top: '-100px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" component="div" align="center">
              <Link color="inherit" href="/" style={{ textDecoration: 'none' }}>
                WALRUS Finance {new Date().getFullYear()}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center', marginTop: '10px' }}>
            <a
              href="https://twitter.com/WalrusFinance"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <img alt="twitter" src={TwitterImage} className={classes.img} />
            </a>
            <a href="https://discord.gg/qZDuUBnxsT" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <img alt="discord" src={DiscordImage} className={classes.img} />
            </a>
            <a
              href="https://medium.com/@frozenwalrusfinance"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <img alt="discord" src={MediumImage} className={classes.img} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
