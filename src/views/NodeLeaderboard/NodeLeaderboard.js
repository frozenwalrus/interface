import {Grid} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import Card from '../../components/Card';
import CardContent from '../../components/CardContent';
import HomeImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const BackgroundImage = createGlobalStyle`
  body, html {
    background: url(${HomeImage}) no-repeat !important;
    background-size: cover !important; } `;


const HomeCardBlue = styled.div`
background: rgba(217, 238, 254, 0.75);
border-radius: 50px;
padding: 20px; 
color: #4b4453;
`;
const HomeCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  padding: 20px; 
  color: #4b4453;
`;
const HomeCardPurple = styled.div`
  background: rgba(214, 211, 242, 0.8);
  border-radius: 50px;
  padding: 20px; 
  color: #4b4453;
`;

const NodeLeaderboard = () => {
  return (
<Page>
  <BackgroundImage />
    <h2 style={{fontSize: '6vw', textAlign: 'center', marginBottom: '0%',}}>FROZEN WALRUS</h2> <br /> 
    <h2 style={{fontSize: '3vw', textAlign: 'center', marginBottom: '4%',}}>NODE LEADERBOARD</h2>


<Grid container spacing={3} direction="column" style={{ display: 'flex', alignItems: 'center'}} >

  <Grid  item xs={12} sm={8}>
    <HomeCardBlue>
      <CardContent>
      <h2 style={{ fontSize: '2vw', textAlign: 'center', marginBottom: '10%'}}> 
        Track the Node Leaderboard for Progress and Weekly Competition Updates! </h2>
      <h2 style={{ fontSize: '1.5vw', textAlign: 'center', marginBottom: '2%'}}>
        Each week, WSHARE rewards are given to the top creator of WLRS-USDC and WSHARE-USDC nodes. 
        WSHARE rewards are also given out randomly amongst all Node creators. 
      </h2>
      </CardContent>
    </HomeCardBlue>
  </Grid>
</Grid>

<Grid container spacing={3} direction="row" style={{ display: 'flex', justifyContent: 'center'}} >
  <Grid  item xs={12} sm={12}>
    <HomeCard>
      <CardContent>
      <h2 style={{ fontSize: '2vw', textAlign: 'center', marginBottom: '2%'}}>
       Weekly Winners! Week of July 24-31 <br /> </h2>
       <h2 style={{ fontSize: '2vw', textAlign: 'center', marginBottom: '2%'}}>
        These Frozen Walrus champions created at least one (1) WLRS-USDC or WSHARE-USDC node and 
        were randomly selected to receive one (1) WSHARE reward! 
      </h2>
      </CardContent>
   
      <Grid container spacing={3} style={{ marginBottom: '5%'}} >
        <Grid direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
        <HomeCardPurple>
          <h2 style={{ fontSize: '1.8vw', textAlign: 'center'}}><u>WLRS-USDC</u></h2>
          <h2 style={{ fontSize: '1.3vw', textAlign: 'center', }}>
              0x2c7d8fbce6ae6b71009f292ada8ef55d91c7fedc
              0x695a5bcff6db9516f379921bc2162fcc9a8e1724
              0x5e538f163ae0ecbe146c909788612971f314f8f8
              0x2a67dc2738139d6de276bf0a5cdb0f043b72a8d5
              0x01b3acdc9a4a7b3b943bfd52052eff52707b1158
              0xb4a7ebc3a8e4c4da6695a0d8508b07041e086f26
              0xb1915bea468ba8c82284295ad1b89bc5575284da
              0x9c552a53d56e7d3b5a2979d364743b8d1067cf39
              0xecb3248fce5d233cad92ffeb3f753853120682b8
              0x18eb18dfc61b1799add4a028677887d807ce8004

          </h2>
          </HomeCardPurple>

        </Grid>
        <Grid spacing={6} direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
        <HomeCardBlue>
        <h2 style={{ fontSize: '1.8vw', textAlign: 'center'}}><u>WSHARE-USDC</u></h2>
        <h2 style={{ fontSize: '1.3vw', textAlign: 'center'}}>
              0x68f077ed3a9c7c77dfbf83c8dd10f88c4d2a7443
              0x7eb99e397782e41bdd2231c149c754750820c233
              0x2d55f4cb478612e02af7c29a20d499d3265f51e0
              0x973ec591af024eace4b73f85526f6333734003d8
              0x08b4aeb2b1475214aa7a3e9acc6c5e359796f297
              0xdd0c3216d5d841301b8216e7f2546e21cbf49580
              0x7ccbc67f48a5663d1986331f2fafb3dfa032030d
              0x5be1e9f2a60e825a0e2656700598dc7c90521172
              0x35ebe8ff4e3af0c741f4f839f73ce4aa01c47a79
              0x53d5caf5521f4c54f809df2c7405deae95028116
         </h2> 
         </HomeCardBlue>
        </Grid>
      </Grid>
      <h2 style={{ fontSize: '2vw', textAlign: 'center', marginBottom: '2%'}}>
        
        These two Frozen Walrus kings/queens created the most Nodes during this week's timespan and receive five (5) WSHARE as reward!</h2>
        <Grid container spacing={6} style={{ marginBottom: '5%'}} >
        <Grid direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
        <HomeCardPurple >
          <h2 style={{ fontSize: '1.8vw', textAlign: 'center', marginTop:'10%'}}><u>WLRS-USDC</u></h2>
          <h2 style={{ fontSize: '1.3vw', textAlign: 'center', marginBottom: '15%' }}>
              0x000000000000000000000000000000000000000
            
          </h2>
          </HomeCardPurple>
        </Grid>
        <Grid spacing={6} direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
        <HomeCardBlue>
        <h2 style={{ fontSize: '1.8vw', textAlign: 'center', marginTop:'10%'}}><u>WSHARE-USDC</u></h2>
        <h2 style={{ fontSize: '1.3vw', textAlign: 'center', marginBottom: '15%' }}>
        0x000000000000000000000000000000000000000
              
         </h2> 
         </HomeCardBlue>
        </Grid>
      </Grid>
      </HomeCard>
  </Grid>
  <Grid  item xs={12} sm={12}>
    <HomeCard>
      <CardContent>
      <h2 style={{ fontSize: '2vw', textAlign: 'center', marginBottom: '2%'}}>
       All-Time Leaderboard<br /> 
        Coming soon...
      </h2>
      </CardContent>
   
      <Grid container spacing={3} >
        
        <Grid direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
        <HomeCardPurple>
          <h2 style={{ fontSize: '1.8vw', textAlign: 'center'}}><u>WLRS-USDC</u></h2>
          <h2 style={{ fontSize: '1.3vw', textAlign: 'center', }}>
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              



          </h2>
          </HomeCardPurple>

        </Grid>
        <Grid spacing={6} direction="column" item xs={6} style={{ display: 'flex', alignItems: 'center' }}> 
        <HomeCardBlue>
        <h2 style={{ fontSize: '1.8vw', textAlign: 'center'}}><u>WSHARE-USDC</u></h2>
        <h2 style={{ fontSize: '1.3vw', textAlign: 'center'}}>
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              0x0000000000000000000000000000000000000000
              

         </h2> 
         </HomeCardBlue>
        </Grid>
      </Grid>
      </HomeCard>
  </Grid>







</Grid>
    {/* <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '6%'}}>Leaderboard is updated weekly!</h2>  <br /> 
    <h2 style={{ fontSize: '2vw', textAlign: 'center', marginBottom: '3%'}}><u>UP AND COMER DIVISION: THIS WEEK (24-31 JULY)</u>  </h2>*/}


{/*
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