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
  Grid,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Popover } from '@material-ui/core';
import { ClickAwayListener } from '@material-ui/core';
import AccountButton from './AccountButton';
import logo from '../../assets/img/SVG_Icons_and_web_bg/logo.svg';
import productIcons from '../../assets/img/SVG_Icons_and_web_bg/products-icon.svg';
import farmsIcon from '../../assets/img/SVG_Icons_and_web_bg/Farms.svg';
import boardroomsIcon from '../../assets/img/SVG_Icons_and_web_bg/Boardrooms.svg';
import bondsIcon from '../../assets/img/SVG_Icons_and_web_bg/Bonds.svg';
import lotteryIcon from '../../assets/img/SVG_Icons_and_web_bg/Lottery.svg';
import nodesIcon from '../../assets/img/SVG_Icons_and_web_bg/Nodes.svg';
import rebatesIcon from '../../assets/img/SVG_Icons_and_web_bg/Rebates.svg';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  logo: {
    width: 225,
  },
  label: {
    fontSize: '22px',
    marginRight: '25px',
  },
  appBar: {
    fontSize: '18px',
    color: '#FCFCFC',
    'background-color': 'transparent',
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
    marginTop: '20px',
    marginBottom: '20px',
  },
  toolbarTitle: {
    fontSize: '30px',
  },
  tvlLabel: {
    color: '#07C4FF',
    marginRight: '8px',
  },
  wlrsLabel: {
    color: '#00F0E2',
    marginRight: '8px',
  },
  noDecoration: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  link: {
    color: '#FCFCFC',
    fontSize: '18px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  metricBox: {
    border: '1px solid #282C42',
    padding: '12px 19px',
    borderRadius: '10px',
  },
  productIcons: {
    marginTop: '4px',
    marginRight: '8px',
    height: '16px',
    width: '16px',
  },
  defiProducts: {
    cursor: 'pointer',
  },
  defiProductsTitle: {
    fontSize: '21px',
  },
  defiProductsDescription: {
    fontSize: '14px',
    color: '#9AA4DA',
    marginTop: '20px',
  },
  defiProductsModal: {
    zIndex: 10,
    position: 'absolute',
    left: '25%',
    right: '25%',
    marginTop: '60px',
    width: '60%',
    margin: 'auto',
    background: '#12141D',
    borderRadius: '20px',
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const defiProductsOpen = Boolean(anchorEl);
  const handleDefiProductsClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDefiProductsClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <ClickAwayListener onClickAway={handleDefiProductsClose}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Link to="/" className={classes.brandLink}>
                        <div
                          className={classes.label}
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <img alt="logo" className={classes.logo} src={logo} />
                          <div style={{ fontWeight: 900 }}></div>
                        </div>
                      </Link>
                    </Grid>
                    <Grid item>
                      <div className={classes.metricBox}>
                        <span className={classes.tvlLabel}>TVL</span> $76,241,122
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={classes.metricBox}>
                        <span className={classes.wlrsLabel}>WLRS</span> $12.32
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item>
                      <div
                        id="defi-products"
                        className={classes.defiProductsModal}
                        hidden={!defiProductsOpen}
                        onMouseLeave={handleDefiProductsClose}
                      >
                        <Grid container spacing={3} style={{ padding: '50px' }}>
                          <Grid item xs={6}>
                            <Link to="/farms" className={classes.noDecoration}>
                              <Grid container wrap="nowrap" spacing={3}>
                                <Grid item>
                                  <img src={farmsIcon} alt="Farms" />
                                </Grid>
                                <Grid item>
                                  <div className={classes.defiProductsTitle}>Farms</div>
                                  <div className={classes.defiProductsDescription}>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.{' '}
                                  </div>
                                </Grid>
                              </Grid>
                            </Link>
                          </Grid>
                          <Grid item xs={6}>
                            <Link to="/boardrooms" className={classes.noDecoration}>
                              <Grid container wrap="nowrap" spacing={3}>
                                <Grid item>
                                  <img src={boardroomsIcon} alt="boardrooms" />
                                </Grid>
                                <Grid item>
                                  <div className={classes.defiProductsTitle}>Boardrooms</div>
                                  <div className={classes.defiProductsDescription}>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.{' '}
                                  </div>
                                </Grid>
                              </Grid>
                            </Link>
                          </Grid>
                          <Grid item xs={6}>
                            <Link to="/bonds" className={classes.noDecoration}>
                              <Grid container wrap="nowrap" spacing={3}>
                                <Grid item>
                                  <img src={bondsIcon} alt="Bonds" />
                                </Grid>
                                <Grid item>
                                  <div className={classes.defiProductsTitle}>Bonds</div>
                                  <div className={classes.defiProductsDescription}>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.{' '}
                                  </div>
                                </Grid>
                              </Grid>
                            </Link>
                          </Grid>
                          <Grid item xs={6}>
                            <Link to="/nodes" className={classes.noDecoration}>
                              <Grid container wrap="nowrap" spacing={3}>
                                <Grid item>
                                  <img src={nodesIcon} alt="Nodes" />
                                </Grid>
                                <Grid item>
                                  <div className={classes.defiProductsTitle}>Nodes</div>
                                  <div className={classes.defiProductsDescription}>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.{' '}
                                  </div>
                                </Grid>
                              </Grid>
                            </Link>
                          </Grid>
                          <Grid item xs={6}>
                            <Link to="/rebates" className={classes.noDecoration}>
                              <Grid container wrap="nowrap" spacing={3}>
                                <Grid item>
                                  <img src={rebatesIcon} alt="Rebates" />
                                </Grid>
                                <Grid item>
                                  <div className={classes.defiProductsTitle}>Rebates</div>
                                  <div className={classes.defiProductsDescription}>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.{' '}
                                  </div>
                                </Grid>
                              </Grid>
                            </Link>
                          </Grid>
                          <Grid item xs={6}>
                            <Link to="/lottery" className={classes.noDecoration}>
                              <Grid container wrap="nowrap" spacing={3}>
                                <Grid item>
                                  <img src={lotteryIcon} alt="Lottery" />
                                </Grid>
                                <Grid item>
                                  <div className={classes.defiProductsTitle}>Lottery</div>
                                  <div className={classes.defiProductsDescription}>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.{' '}
                                  </div>
                                </Grid>
                              </Grid>
                            </Link>
                          </Grid>
                        </Grid>
                      </div>
                      <div className={classes.defiProducts} onMouseEnter={handleDefiProductsClick}>
                        <img alt="defi products" className={classes.productIcons} src={productIcons} />
                        Defi Products
                      </div>
                    </Grid>
                    <Grid item>
                      <Link to="/dashboard" className={classes.link}>
                        Dashboard
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/dashboard" className={classes.link}>
                        Docs
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/dashboard" className={classes.link}>
                        Media
                      </Link>
                    </Grid>
                    <Grid item>
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
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ClickAwayListener>
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
