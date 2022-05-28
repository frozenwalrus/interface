import {Grid} from '@material-ui/core';
import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import SnoNode from '../SnowyNode';
import SnoCard from './ShareLPCard';
import FoxCard from './PegLPCard';
import { createGlobalStyle } from 'styled-components';
import MasonryImage from '../../assets/img/background.jpg';
const BackgroundImage = createGlobalStyle`
  body, html {
    background: url(${MasonryImage}) no-repeat !important;
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