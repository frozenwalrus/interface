import {Grid} from '@material-ui/core';
import React from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const BackgroundImage = createGlobalStyle`
  body, html {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important; } `;

    const NodeLeaderboard = () => {
  return (
<Page>
  <BackgroundImage />
    <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '4%',}}>FROZEN WALRUS NODE LEADERBOARD</h2> <br /> 
    {/* <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '6%'}}>Leaderboard is updated weekly!</h2>  <br /> */}
    <h2 style={{ fontSize: '2.0rem', textAlign: 'center', marginBottom: '3%'}}><u>UP AND COMER DIVISION: THIS WEEK (24-31 JULY)</u>  </h2>

<Grid container spacing={3} item xs={12} style={{ marginTop: '0vh', justifyContent:'center'}}>
      <h2 style={{ fontSize: '1.8rem'}}> WLRS-USDC Nodes</h2>
      <Table>
      <Thead>
        <Tr>
          
          <Th style={{ fontSize: '1.5rem', textAlign: 'center'}}><u>Rank</u></Th>
          <Th style={{ fontSize: '1.5rem', textAlign: 'center'}}><u>Wallet</u></Th>
          <Th style={{ fontSize: '1.5rem', textAlign: 'center'}}><u>Nodes Created</u></Th>
          </Tr>
      </Thead>
      <Tbody>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>1</Td>
          <Td>0x00</Td>
          <Td>-</Td>
        </Tr>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>2 </Td>
          <Td>0x00</Td>
          <Td>- </Td>
        </Tr>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>3 </Td>
          <Td>0x00</Td>
          <Td>-</Td>
        </Tr>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>4</Td>
          <Td>0x00</Td>
          <Td>-</Td>
        </Tr>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>5</Td>
          <Td>0x00</Td>
          <Td>-</Td>
        </Tr>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>Random Winner</Td>
          <Td>0x00</Td>
          <Td>-</Td>
        </Tr>
      </Tbody>
      </Table>
</Grid>

<Grid container spacing={3} item xs={12} style={{ marginTop: '5%', justifyContent:'center'}}>
      <h2 style={{ fontSize: '1.8rem',}}> WSHARE-USDC Nodes</h2>
      <Table>
      <Thead>
        <Tr>
          <Th style={{ fontSize: '1.5rem', textAlign: 'center'}}><u>Rank</u></Th>
          <Th style={{ fontSize: '1.5rem', textAlign: 'center'}}><u>Wallet</u></Th>
          <Th style={{ fontSize: '1.5rem', textAlign: 'center'}}><u>Nodes Created</u></Th>
          </Tr>
      </Thead>
      <Tbody>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>1</Td>
          <Td>0x00</Td>
          <Td>-</Td>
        </Tr>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>2 </Td>
          <Td>0x00</Td>
          <Td>- </Td>
        </Tr>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>3 </Td>
          <Td>0x00</Td>
          <Td>-</Td>
        </Tr>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>4</Td>
          <Td>0x00</Td>
          <Td>-</Td>
        </Tr>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>5</Td>
          <Td>0x00</Td>
          <Td>-</Td>
        </Tr>
        <Tr style={{ fontSize: '1rem', textAlign: 'center'}}>
          <Td>Random Winner</Td>
          <Td>0x00</Td>
          <Td>-</Td>
        </Tr>
      </Tbody>
      </Table>
</Grid> 

    <h2 style={{ fontSize: '2.0rem', textAlign: 'center', marginTop: '5vh', marginBottom: '1%' }}><u>GOAT DIVISION: ALL-TIME</u></h2>
    <h2 style={{ fontSize: '1.2rem', textAlign: 'center', marginTop: '1vh', marginBottom: '10%' }}>Coming soon... </h2>
    {/*
    <Grid container spacing={3} item xs={12} style={{ marginTop: '0vh', justifyContent:'center'}}>
    <h2 style={{ fontSize: '1.2rem', textAlign: 'center'}}> WLRS-USDC Nodes</h2>
      <Table/>
      <h2 style={{ fontSize: '1.2rem', textAlign: 'center', marginTop: '2vh' }}> WSHARE-USDC Nodes</h2>
      <Table/>
  </Grid>     */}
</Page>
  );
};

export default NodeLeaderboard;