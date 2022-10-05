import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  ListItem,
  Divider,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';
import logo from '../../assets/img/SVG_Icons_and_web_bg/logo-v2.svg';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  logo: {
    width: 275,
    marginRight: '5px',
  },
  label: {
    fontSize: '22px',
    marginRight: '25px',
  },
  appBar: {
    color: '#e0e3bd',
    'background-color': 'transparent',
    padding: '30px',
    // marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'nowrap',
  },
  toolbarTitle: {
    fontSize: '30px',
  },
  link: {
    color: '#161D29',
    fontSize: '18px',
    margin: '2.5%',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  brandLink: {
    textDecoration: 'none',
    color: '#4B4453',
    '&:hover': {
      textDecoration: 'none',
    },
    fontSize: 30,
    fontWeight: 900,
  },
  '@media only screen and (max-width: 1600px)': {
    link: {
      fontSize: '17px',
      margin: '3.5%',
    },
  },
  black: {
    color: '#000000 !important',
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:1000px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar} style={{ width: '100%' }}>
        {matches ? (
          <>
            <Link to="/" className={classes.brandLink}>
              <div
                className={classes.label}
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
              >
                <img alt="logo" className={classes.logo} src={logo} />
                <div style={{ fontWeight: 900 }}></div>
              </div>
            </Link>
            <Box style={{ width: 'auto !important', marginLeft: '0%' }}>
              <Link color="textPrimary" to="/" className={classes.link}>
                Home
              </Link>
              <Link color="textPrimary" to="/farms" className={classes.link}>
                Farms
              </Link>
              <Link color="textPrimary" to="/boardroom" className={classes.link}>
                Boardrooms
              </Link>
              <Link color="textPrimary" to="/bonds" className={classes.link}>
                Bonds
              </Link>
              <Link color="textPrimary" to="/rebates" className={classes.link}>
                Rebates
              </Link>
              <Link color="textPrimary" to="/nodes" className={classes.link}>
                Nodes
              </Link>
              <a
                href="https://xwlrs.frozenwalrus.finance/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                XWLRS
              </a>
              <Link color="textPrimary" to="/lottery" className={classes.link}>
                Lottery
              </Link>
              <Link color="textPrimary" to="/pcp" className={classes.link}>
                PCP
              </Link>
              <Link color="textPrimary" to="/compound" className={classes.link}>
                Compound
              </Link>
              <Link color="textPrimary" to="/media" className={classes.link}>
                Media
              </Link>
              <a
                href="https://docs.frozenwalrus.finance/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Docs
              </a>
              

              
            </Box>
            <div
              style={{
                width: 'auto',
                marginLeft: 'auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px',
              }}
            >
              <AccountButton text="Connect" />
            </div>
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              WALRUS Finance
            </Typography>

            <Drawer
              className={classes.drawer}
              onEscapeKeyDown={handleDrawerClose}
              onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <Link color="textPrimary" to="/" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>Home</div>
                </Link>
                <Link color="textPrimary" to="/farms" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>Farms</div>
                </Link>
                <Link color="textPrimary" to="/boardroom" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>Boardrooms</div>
                </Link>
                <Link color="textPrimary" to="/bonds" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>Bonds</div>
                </Link>
                <Link color="textPrimary" to="/rebates" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>Rebates</div>
                </Link>
                <Link color="textPrimary" to="/nodes" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>Nodes</div>
                </Link>
                <Link color="textPrimary" to="/pcp" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>PCP</div>
                </Link>
                <a href=" https://xwlrs.frozenwalrus.finance/" target="_blank" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>XWLRS</div>
                </a>
                <Link color="textPrimary" to="/lottery" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>Lottery</div>
                </Link>
                
                <Link color="textPrimary" to="/compound" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>Compound</div>
                </Link>
                
                <Link color="textPrimary" to="/media" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>Media</div>
                </Link>
                <a href="https://docs.frozenwalrus.finance/welcome" target="_blank" className={classes.link}>
                  <div style={{ margin: '4px 20px' }}>Docs</div>
                </a>
               

               
                <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountButton text="Connect" />
                </ListItem>
              </div>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
