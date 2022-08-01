import {Grid} from '@material-ui/core';
import React from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import Table from './Table.js';  
import Table2 from './Table2.js'; 
import './Table.css'; 
const BackgroundImage = createGlobalStyle`
  body, html {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important; } `;

    const NodeLeaderboard = () => {
  return (
<Page>
  <BackgroundImage />
    <h2 style={{fontSize: '4rem', textAlign: 'center'}}>FROZEN WALRUS <br /> NODE LEADERBOARD</h2> <br /> 
    <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '5%'}}>Leaderboard is updated weekly!</h2>  <br /> 
    <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2%'}}>UP AND COMER DIVISION: LAST WEEK  </h2>
    
    <Grid container spacing={3} item xs={12} style={{ marginTop: '0vh', justifyContent:'center'}}>
      <h2 style={{ fontSize: '1.2rem', textAlign: 'center'}}> WLRS-USDC Nodes</h2>
      <Table/>
      <h2 style={{ fontSize: '1.2rem', textAlign: 'center', marginTop: '2vh'}}> WSHARE-USDC Nodes</h2>
      <Table/>
    </Grid> 

    <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginTop: '5vh', marginBottom: '2%' }}>GOAT DIVISION: ALL-TIME</h2>
    <Grid container spacing={3} item xs={12} style={{ marginTop: '0vh', justifyContent:'center'}}>
    <h2 style={{ fontSize: '1.2rem', textAlign: 'center'}}> WLRS-USDC Nodes</h2>
      <Table2/>
      <h2 style={{ fontSize: '1.2rem', textAlign: 'center', marginTop: '2vh' }}> WSHARE-USDC Nodes</h2>
      <Table2/>
    </Grid>     
</Page>
  );
};

export default NodeLeaderboard;