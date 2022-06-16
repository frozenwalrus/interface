import {Grid} from '@material-ui/core';
import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import SnoNode from '../SnowyNode';
import SnoCard from './ShareLPCard';
import FoxCard from './PegLPCard';
import GrapeLPCard from './GrapeLPCard';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';

const BackgroundImage = createGlobalStyle`
  body, html {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const SnoNodes = () => {
  const {path} = useRouteMatch();
  return (
    <Page>
         <BackgroundImage />
      <Switch>
        <Route exact path={path}>
          <h2 style={{fontSize: '80px', textAlign: 'center'}}>NODES</h2>
          <Grid container spacing={3} style={{marginTop: '20px'}}>
            <FoxCard />
            <SnoCard />   
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