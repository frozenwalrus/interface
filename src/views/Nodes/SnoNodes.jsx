import {Grid} from '@material-ui/core';
import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import SnoNode from '../SnowyNode';
import SnoCard from './ShareLPCard';
import FoxCard from './PegLPCard';
import GrapeLPCard from './GrapeLPCard';
import NrwlLPCard from './NrwlLPCard';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const leaderboard =
'https://app.frozenwalrus.finance/leaderboard'

const BackgroundImage = createGlobalStyle`
  body, html {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const useStyles = makeStyles((theme) => ({
  
  leaderboardbutton: {},
  '@media only screen and (max-width: 1000px)': {
    leaderboardbutton: {
      fontSize: '1.5rem',
      padding: '10px', 
      borderRadius: '20px',  
      minWidth: '25%'
    },
  },
  '@media only screen and (min-width: 1001px)': {
    leaderboardbutton: {
      fontSize: '1.5rem',
      padding: '10px', 
      borderRadius: '20px',  
      minWidth: '25%'
    },
  },
}));
 
const SnoNodes = () => {
  const {path} = useRouteMatch();
  const classes = useStyles();
  return (
    <Page>
         <BackgroundImage />
      <Switch>
        <Route exact path={path}>
        <h2 style={{fontSize: '5vw', textAlign: 'center'}}>NODES</h2>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button
          color="primary"
          target="_blank"
          href={leaderboard}
          variant="contained"
          style={{ marginTop: '5%' }}
          className={classes.leaderboardbutton}
        >
          Go To Leaderboard!
        </Button>
          </div>
          <Grid container spacing={3} style={{marginTop: '20px'}}>
            <FoxCard />
            <SnoCard /> 
            <NrwlLPCard />   
            <GrapeLPCard />     
          </Grid>
        </Route>
        <Route path={`${path}/:bankId`}>
          <SnoNode />
        </Route>
      </Switch>
    </Page>
  );
};

export default SnoNodes;