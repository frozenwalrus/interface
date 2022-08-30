import React, { useMemo } from 'react';
import Page from '../../components/Page';
import styled from 'styled-components';
import Collapsible from 'react-collapsible'; 
import AvaxLogo from '../../assets/img/USDC.png';
import yusdLogo from '../../assets/img/yusd.png';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import TokenSymbol from '../../components/TokenSymbol';
import useTombStats from '../../hooks/useTombStats';
import useLpStats from '../../hooks/useLpStats';
import useLpStatsNrwl from '../../hooks/useLpStatsNrwl';
import useFantomPrice from '../../hooks/useFantomPrice.js';
import useBondStats from '../../hooks/useBondStats';
import usetShareStats from '../../hooks/usetShareStats';
import useNrwlStats from '../../hooks/useNrwlStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import { Box, Button, CardContent, Grid, Typography, useMediaQuery,  } from '@material-ui/core';
import Card from '../../components/Card';
// import tvl from '../../assets/img/tvl.svg';
import tvl from '../../assets/img/TVL-Icon.png';
import { makeStyles } from '@material-ui/core/styles';
import useTombFinance from '../../hooks/useTombFinance';
import useTokenBalance from '../../hooks/useTokenBalance';
import { getDisplayBalance } from '../../utils/formatBalance';
import Label from '../../components/Label';
// import HeaderCard from './Components/HeaderCard';
import mountainbanner from '../../assets/New/hero-banner-moutains.png'; 
import MetamaskFox from '../../assets/New/plus.png'; 
import compound from '../../assets/New/compound.png'; 
import rebates from '../../assets/New/Rebates.png'; 
import lottery from '../../assets/New/Lottery.png'; 
import dashboardwalrus from '../../assets/New/dashboardwalrus.png'; 
// import Collapsible1 from './Components/Collapsible/Collapsible';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import Tabz from '../../components/Tabz/Tabz';

const Background = createGlobalStyle`
  body {
    background-color: #030306;
    background-size: cover !important;
  }
`;
const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: white`; 

const FarmCard = styled.div`
  background: #12141D;
  display: flex;
  flex-direction: column;
  gap: 23px;
  color: #ffffff; 
  padding: 10px 18px 10px 18px; 
  border-radius: 10px;
`;
const YeahCard = styled.div`
  background: #12141D;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  gap: 16px;
  padding: 24px 32px; 
  color: #ffffff; 
  border-radius: 20px;
`;
const DashboardCard = styled.div`
  background: #282C42;
  display: flex;
  text-align: center; 
  flex-direction: column;
  padding: 24px 32px; 
  color: #ffffff; 
  border-radius: 20px 0px 0px 20px;
`;
const WalrusCard = styled.div`
  background: #12141D;
  display: flex;
  text-align: center; 
  flex-direction: row;
  padding: 24px 32px; 
  color: #ffffff; 
  border-radius: 0px 20px 20px 0px;
`;
const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      marginTop: '10px',
    },
    backgroundColor: '#284C7B',
  },
  tokenTitle: {
    fontSize:'1.7rem', 
    textAlign: 'left', 
    },
 
  currentprice: {
    fontSize:'1.2rem', 
    color:'#9AA4DA', 
    textAlign: 'center', 
    fontWeight:'500', 
    },
  dollars: {
    fontSize:'1.4rem', 
    color:'#FCFCFC', 
    fontWeight:'700', 
    textAlign: 'center'
    },
  dashboardwalrusimg:{
    height: '100%', 

  }, 
  cents: {
    fontSize:'1.2rem', 
    color:'#07C4FF', 
    fontWeight:'500', 
    textAlign: 'center'
    },
  marketcap: {
      fontSize:'1.0rem', 
      color:'#FCFCFC', 
      fontWeight:'400', 
      textAlign: 'left', 
      },
  cardstats: {
    fontSize:'1.2rem', 
    color:'#FCFCFC', 
    fontWeight:'700', 
    textAlign: 'right'
    },
  buybutton: {
    padding: '12px', 
    backgroundColor: '#282C42', // hilight grey 
  //  border :1px solid rgba(255, 255, 255, 0.52);  
    borderRadius: '10px', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: '10px', 
    width: '100%', 
    gap: '10px', 
  }, 
  tokenButton: {},
  '@media only screen and (max-width: 1200px)': {
    tokenButton: {
      fontSize: '0.8rem',
      marginRight: '4%',
      padding: '5px', 
      borderRadius: '12px !important', 
    },
  },
  flex: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  '@media only screen and (max-width: 850px)': {
    tokenButton: {
      width: '40% !important',
    },
  },
  '@media only screen and (max-width: 670px)': {
    tokenButton: {
      width: '80% !important',
    },
  },
}));

const Home = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const isDesktop = useMediaQuery('(min-width:1000px)');
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const tombFtmLpStats = useLpStats('WLRS-USDC-LP');
  const tShareFtmLpStats = useLpStats('WSHARE-USDC-LP');
  const nrwlLpStats = useLpStatsNrwl('NRWL-YUSD-LP'); 
  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const nrwlStats = useNrwlStats();
  const tBondStats = useBondStats();
  const tombFinance = useTombFinance();
  const { price: JOEPrice, marketCap: JOEMarketCap, priceChange: JOEPriceChange } = useFantomPrice();
  const buyTombAddress =
    'https://app.bogged.finance/avax/swap?tokenIn=0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664&tokenOut=0x395908aeb53d33A9B8ac35e148E9805D34A555D3';
  const buyTShareAddress =
    'https://app.bogged.finance/avax/swap?tokenIn=0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664&tokenOut=0xe6d1aFea0B76C8f51024683DD27FA446dDAF34B6';
  const buyNrwlAddress =
    `https://www.swapsicle.io/swap?inputCurrency=0x111111111111ed1D73f860F57b2798b683f2d325&outputCurrency=0x501012893eE88976AB8B5289B7a78E307d5d9DCb`;
  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const nrwlLPStats = useMemo(() => (nrwlLpStats ? nrwlLpStats : null), [nrwlLpStats]);
  const tombPriceInDollars = useMemo(() => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null), [tombStats]);
  const tombPriceInFTM = useMemo(() => (tombStats ? Number(tombStats.tokenInFtm).toFixed(4) : null), [tombStats]);
  const tombCirculatingSupply = useMemo(() => (tombStats ? String(tombStats.circulatingSupply) : null), [tombStats]);
  const tombTotalSupply = useMemo(() => (tombStats ? String(tombStats.totalSupply) : null), [tombStats]);
  const tSharePriceInDollars = useMemo(() => (tShareStats ? Number(tShareStats.priceInDollars).toFixed(2) : null), [tShareStats]);
  const tSharePriceInFTM = useMemo(() => (tShareStats ? Number(tShareStats.tokenInFtm).toFixed(4) : null), [tShareStats]);
  const tShareCirculatingSupply = useMemo(() => (tShareStats ? String(tShareStats.circulatingSupply) : null), [tShareStats]);
  const tShareTotalSupply = useMemo(() => (tShareStats ? String(tShareStats.totalSupply) : null), [tShareStats]);
  const nrwlPriceInDollars = useMemo(() => (nrwlStats ? Number(nrwlStats.priceInDollars).toFixed(2) : null), [nrwlStats]);
  const nrwlPriceInFTM = useMemo(() => (nrwlStats ? Number(nrwlStats.tokenInFtm).toFixed(4) : null), [nrwlStats]);
  const nrwlCirculatingSupply = useMemo(() => (nrwlStats ? String(nrwlStats.circulatingSupply) : null), [nrwlStats]);
  const nrwlTotalSupply = useMemo(() => (nrwlStats ? String(nrwlStats.totalSupply) : null), [nrwlStats]);
  const tBondPriceInDollars = useMemo(() => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null), [tBondStats]);
  const tBondPriceInFTM = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(() => (tBondStats ? String(tBondStats.circulatingSupply) : null), [tBondStats]);
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);
  const tombBalance = useTokenBalance(tombFinance.TOMB);
  const displayTombBalance = useMemo(() => getDisplayBalance(tombBalance), [tombBalance]);
  const tombBalanceInDollars = tombPriceInDollars && tombBalance ? (Number(tombPriceInDollars) * tombBalance.div('1000000000000000000').toNumber()).toFixed(2) : null;
  const tShareBalance = useTokenBalance(tombFinance.TSHARE);
  const displayTShareBalance = useMemo(() => getDisplayBalance(tShareBalance), [tShareBalance]);
  const tShareBalanceInDollars = tSharePriceInDollars && tShareBalance ? (Number(tSharePriceInDollars) * tShareBalance.div('1000000000000000000').toNumber()).toFixed(2) : null;
  const nrwlBalance = useTokenBalance(tombFinance.NRWL);
  const displayNrwlBalance = useMemo(() => getDisplayBalance(nrwlBalance), [nrwlBalance]);
  const nrwlBalanceInDollars = nrwlPriceInDollars && nrwlBalance ? (Number(nrwlPriceInDollars) * nrwlBalance.div('1000000000000000000').toNumber()).toFixed(2) : null;
  const tBondBalance = useTokenBalance(tombFinance.TBOND);
  const displayTBondBalance = useMemo(() => getDisplayBalance(tBondBalance), [tBondBalance]);
  const tBondBalanceInDollars = tBondPriceInDollars && displayTBondBalance ? (Number(tBondPriceInDollars) * tBondBalance.div('1000000000000000000').toNumber()).toFixed(2) : null;

  const Row = styled.div`
    align-items: center;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    margin-bottom: 8px;
  `;

  return (
<div>
<Page>
  <Background />
  <div className="mt-3">
    <div className="container rounded-xl">
      <div className="grid grid-cols-1 w-full 
      relative overflow-visible
      bg-gradient-to-r from-teal1 to-teal2 rounded-t-3xl rounded-l-3xl
      ">
        <div className="">
            <img src={mountainbanner}  />
        </div>
            <div className="absolute 
            top-12
            xl:top-100
            left-0
            px-4
            py-2">
              <p className="
              text-white
              text-5xl
              font-black
              tracking-tighter
              w-[900px]
              h-[66px]" >
                Welcome to Frozen Walrus
              </p>
              <p className="
              mt-4
              text-darkblue
              text-3xl
              font-black
              tracking-tighter
             
              " >
                The advanced protocol <br />based on Leveraged Yield Farming
              </p>
  
            </div>
      </div>
    </div>
  </div>
  <Grid container spacing={0} style={{ marginTop: '5%'}}>
    <Grid item xs={12}>
     {/* <Tabz>

  </Tabz> */}
    </Grid>
    </Grid>


<Grid container spacing={3} style={{ marginTop: '5%'}}>
    <Grid item xs={12} sm={4} >
      <YeahCard>
        <Row>
          <img src={compound} />
        </Row>
        <h2 className={classes.tokenTitle}>
          Compound
        </h2>
        <h2 className={classes.currentprice} style={{ textAlign: 'left' }}>
          Aw yeah 
        </h2>
      </YeahCard>
    </Grid>
    <Grid item xs={12} sm={4} >
      <YeahCard>
        <Row>
          <img src={rebates} />
        </Row>
        <h2 className={classes.tokenTitle}>
          Rebates
        </h2>
        <h2 className={classes.currentprice} style={{ textAlign: 'left' }}>
          what up 
        </h2>
      </YeahCard>
    </Grid>
    <Grid item xs={12} sm={4} >
      <YeahCard>
        <Row>
          <img src={lottery} />
        </Row>
        <h2 className={classes.tokenTitle}>
          Lottery
        </h2>
        <h2 className={classes.currentprice} style={{ textAlign: 'left' }}>
          woooo  
        </h2>
      </YeahCard>
    </Grid>
  </Grid>
<Grid container spacing={0} style={{ marginTop: '5%'}} >
  <Row>
  <Grid item xs={12} sm={6} display="flex" alignItems="stretch" style={{height:'100%', width:'50%'}} >
    <DashboardCard  >
      <h2 className={classes.dollars} style={{ marginBottom: '5%'}}>
        Total Treasury Balance: 
      </h2> 
      <h2 className={classes.cents} style={{ color: '#00F0E2', fontSize: '2.5rem'}}>
        10 bucks and a loose cig
      </h2>
    </DashboardCard>
  </Grid>
  <Grid item xs={12} sm={6} display="flex" alignItems="stretch" style={{height:'100%', width:'50%'}}>
      <WalrusCard>
        <div  >
              <img src={dashboardwalrus}   />
        </div>
        <Box>
        <h2 style={{ color:'#03E0ED', textAlign: 'left',  }}>
              Check out our financial dashboard to see more details of the Protocol, including 
              the Treasury and other metrics.  
        </h2>
        <h2 style={{ color:'#ffffff', textAlign: 'left',  }}>
           <StyledLink>Go to Dashboard</StyledLink> 
        </h2>
        </Box>
      </WalrusCard>
  </Grid>
  </Row>
  


</Grid>
<Grid container spacing={3} style={{ marginTop: '5%'}}>
  <Grid item xs={12} sm={6} md={4}>
      <FarmCard>
      <Row>
          <h2 className={classes.tokenTitle}>WLRS</h2>
          { <button
              onClick={() => {
                tombFinance.watchAssetInMetamask('NRWL');}} >
              <img alt="metamask fox" style={{ width: '30px' }} src={MetamaskFox} />
              </button> }  
      </Row>
        <div align="center">
          <TokenSymbol  symbol="NWLRS" />
        </div>
        <h2 className={classes.currentprice}>Current Price</h2>
          <span className={classes.dollars}>
            {tombPriceInFTM ? tombPriceInFTM : '-.----'}{' '} USDC
          </span>
          <span className={classes.cents}>
            ${tombPriceInDollars ? tombPriceInDollars : '-.--'}
          </span>  
          <Row>
            <span className={classes.marketcap}>
              Market Cap:
              <br />
              Circulating Supply: <br />
              Total Supply:
            </span>
            <span className={classes.cardstats} >
                ${(tombCirculatingSupply * tombPriceInDollars).toFixed(2)} <br />
                {tombCirculatingSupply} <br />
                {tombTotalSupply}
            </span>
          </Row>
            <div>
              <button
                target="_blank"
                href={buyTombAddress}
                style={{ width: '100%', boxShadow: '4px 4px 12px black' }}
                className={classes.buybutton} >
                BUY
              </button>
            </div>
        </FarmCard>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <FarmCard>
      <Row>
      <h2 className={classes.tokenTitle}> NRWL</h2>
      { <button
          onClick={() => {
            tombFinance.watchAssetInMetamask('NRWL');}} >
          <img alt="metamask fox" style={{ width: '30px' }} src={MetamaskFox} />
          </button> }    
      </Row>
        <div align="center" >
            <TokenSymbol symbol="NNRWL" size={75} />
        </div>
        <h2 className={classes.currentprice}>Current Price</h2>
        <span className={classes.dollars}>
            {nrwlPriceInFTM ? nrwlPriceInFTM : '-.----'}{' '} YUSD
        </span>
        <span className={classes.cents}>
            ${nrwlPriceInDollars ? nrwlPriceInDollars : '-.--'}
        </span>
        <Row>
        <span className={classes.marketcap}>
            Market Cap: <br />
            Circulating Supply: <br />
            Total Supply:
          </span>
          <span className={classes.cardstats} >
            ${(nrwlCirculatingSupply * nrwlPriceInDollars).toFixed(2)} <br />
            {nrwlCirculatingSupply} <br />
            {nrwlTotalSupply}
          </span>
        </Row>
            <div>
              <button
                target="_blank"
                href={buyTombAddress}
                style={{ width: '100%', boxShadow: '4px 4px 12px black' }}
                className={classes.buybutton} >
                BUY
              </button>
            </div>
        </FarmCard>
      </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <FarmCard>
    <Row>
      <h2 className={classes.tokenTitle}> WSHARE</h2>
      { <button
          onClick={() => {
            tombFinance.watchAssetInMetamask('WSHARE');}} >
          <img alt="metamask fox" style={{ width: '30px' }} src={MetamaskFox} />
          </button> }              
    </Row>
      <div align="center" >
            <TokenSymbol symbol="NWSHARE"  />
      </div>
        
        <h2 className={classes.currentprice}>Current Price</h2>
        <span className={classes.dollars}>
            {tSharePriceInFTM ? tSharePriceInFTM : '-.----'}{' '}USDC
          </span>
          <span className={classes.cents}>
            ${tSharePriceInDollars ? tSharePriceInDollars : '-.--'}
            </span>
        <Row>
        <span className={classes.marketcap}>
            Market Cap: <br />
            Circulating Supply: <br />
            Total Supply:
          </span>
          <span className={classes.cardstats} >
            ${(tShareCirculatingSupply * tSharePriceInDollars).toFixed(2)} <br />
            {tShareCirculatingSupply} <br />
            {tShareTotalSupply}
          </span>
        </Row>
        <div>
              <button
                target="_blank"
                href={buyTombAddress}
                style={{ width: '100%', boxShadow: '4px 4px 12px black' }}
                className={classes.buybutton} >
                BUY
              </button>
            </div>
      </FarmCard>
  </Grid>
  <Grid item xs={12} sm={4}>
    <FarmCard>
    <h2 className={classes.tokenTitle} style={{ fontSize: '1.6rem' }}>WLRS-USDC.e LP  </h2>
        <div align="center">
            <TokenSymbol size={140} symbol="NWLRSLP" />
        </div>
        <h2 className={classes.currentprice}>Current Price</h2>
        <span className={classes.dollars}>
              {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : '-.--'} WLRS /{' '}
              {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : '-.--'} USDC.e <br /> 
        </span>
        <span className={classes.cents}>
              ${tombLPStats?.priceOfOne ? tombLPStats.priceOfOne : '-.--'} <br /> 
        </span>
        <Row>
            <span className={classes.marketcap}>
                Liquidity: <br />
                Total Supply:
            </span>
            <span className={classes.cardstats} >
                  ${tombLPStats?.totalLiquidity ? tombLPStats.totalLiquidity : '-.--'} <br />
                  {tombLPStats?.totalSupply ? (Number(tombLPStats.totalSupply) < 1/10**4 ? 
                  (Number(tombLPStats.totalSupply) * 10**6).toFixed(4) + 'µ' : 
                  tombLPStats.totalSupply) : '-.--'} <br />
            </span>
        </Row>
        <div>
            <button
              target="_blank"
              href={buyTombAddress}
              style={{ width: '100%', boxShadow: '4px 4px 12px black' }}
              className={classes.buybutton} >
              PROVIDE LIQUIDITY
            </button>
        </div>
    </FarmCard>
  </Grid>
  <Grid item xs={12} sm={4}>
    <FarmCard>
    <h2 className={classes.tokenTitle} style={{ fontSize: '1.6rem' }}>WSHARE-USDC.e LP</h2>
      <div align="center" style={{marginBottom: '10px'}}>
          <TokenSymbol size={145} symbol="NWSHARELP" />
      </div>
      <h2 className={classes.currentprice}>Current Price</h2>
      <span 
              className={classes.dollars}>
              {tshareLPStats?.tokenAmount ? tshareLPStats?.tokenAmount : '-.--'} WSHARE /{' '}
              {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : '-.--'} USDC.e 
      </span>
      <span 
              className={classes.cents}>
              ${tshareLPStats?.priceOfOne ? tshareLPStats.priceOfOne : '-.--'}
      </span>
      <Row>
            <span className={classes.marketcap}>
                Liquidity: <br /> 
                Total supply: 
            </span>
            <span className={classes.cardstats} >
                ${tshareLPStats?.totalLiquidity ? tshareLPStats.totalLiquidity : '-.--'}
                    <br />
                {tshareLPStats?.totalSupply ? (Number(tshareLPStats.totalSupply) < 1/10**4 ? 
                (Number(tshareLPStats.totalSupply) * 10**6).toFixed(4) + 'µ' : tshareLPStats.totalSupply) : '-.--'}
            </span>
      </Row>
      <div>
            <button
              target="_blank"
              href={buyTombAddress}
              style={{ width: '100%', boxShadow: '4px 4px 12px black' }}
              className={classes.buybutton} >
              PROVIDE LIQUIDITY
            </button>
        </div>
    </FarmCard>
  </Grid>
  <Grid item xs={12} sm={4}>
    <FarmCard>
    <h2 className={classes.tokenTitle} style={{ fontSize: '1.6rem' }}>NRWL-YUSD LP</h2>
      <div align="center">
            <TokenSymbol size={120} symbol="NNRWLLP" />
      </div>
      <h2 className={classes.currentprice}>Current Price</h2>
      <span 
                className={classes.dollars}>
              {nrwlLPStats?.tokenAmount ? nrwlLPStats?.tokenAmount : '-.--'} NRWL /{' '}
              {nrwlLPStats?.ftmAmount ? nrwlLPStats?.ftmAmount : '-.--'} YUSD <br />
      </span>
      <span className={classes.cents}>
              ${nrwlLPStats?.priceOfOne ? nrwlLPStats.priceOfOne : '-.--'}
      </span>
      <Row>
            <span className={classes.marketcap}>
              Liquidity: <br /> 
              Total Supply: 
            </span>
            <span className={classes.cardstats} >
                ${nrwlLPStats?.totalLiquidity ? nrwlLPStats.totalLiquidity : '-.--'}
                <br />
                {nrwlLPStats?.totalSupply ? (Number(nrwlLPStats.totalSupply) < 1/10**4 ? (Number(nrwlLPStats.totalSupply) * 10**6).toFixed(4) + 'µ' : nrwlLPStats.totalSupply) : '-.--'}
            </span>
      </Row>
      <div>
            <button
              target="_blank"
              href={buyTombAddress}
              style={{ width: '100%', boxShadow: '4px 4px 12px black' }}
              className={classes.buybutton} >
              PROVIDE LIQUIDITY
            </button>
        </div>
    </FarmCard>
  </Grid>
</Grid>

</Page>
</div>
  );
};
const StyledValue = styled.div`
  //color: ${(props) => props.theme.color.grey[300]};
  font-size: 30px;
  font-weight: 700;
`;

const StyledBalance = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center; 
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 1%;
  margin-bottom: 3%; 
`;

export default Home;
