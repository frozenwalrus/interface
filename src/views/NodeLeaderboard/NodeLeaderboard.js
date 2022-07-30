import {Grid} from '@material-ui/core';
import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';

const BackgroundImage = createGlobalStyle`
  body, html {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important;
  }
`;
const NodeLeaderboard = () => {
  return (
    <Page>
         <BackgroundImage />
            <h2 style={{fontSize: '80px', textAlign: 'center'}}>NODE LEADERBOARD</h2> <br /> 
            <h2 style={{ fontSize: '40px', textAlign: 'center'}}>UPDATED WEEKLY!</h2>       
    </Page>
  );
};

export default NodeLeaderboard;