import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import Card from '../../components/Card';

import TokenSymbol from '../../components/TokenSymbol';

const NrwlGenesisCard = () => {
  return (
    <Grid container spacing={3}>

      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent align="center">
            <Typography variant="h5" component="h2">
              NRWL-YUSD-LP
            </Typography>
            <Box mt={2}>
              <TokenSymbol symbol="NRWL-YUSD-LP" />
            </Box>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              size="small"
              style={{ width: '200px', height: '40px', marginBottom: '10%' }}
              variant="contained"
              component={Link}
              to={`/farms/NrwlYusdGenesisNrwlRewardPool/`}
            >
              Stake
            </Button>
            <Button
              color="primary"
              size="small"
              target="_blank"
              style={{ width: '40%', height: '40px', marginBottom: '10%', textAlign: 'center' }}
              variant="contained"
              href="https://www.swapsicle.io/add/0x111111111111ed1D73f860F57b2798b683f2d325/0x501012893eE88976AB8B5289B7a78E307d5d9DCb"
            >
              Add Liquidity 
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent align="center">
            <Typography variant="h5" component="h2">
              WLRS-USDC.e LP
            </Typography>
            <Box mt={2}>
              <TokenSymbol symbol="WLRS-USDC-LP" />
            </Box>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              size="small"
              style={{ width: '200px', height: '40px', marginBottom: '10%' }}
              variant="contained"
              component={Link}
              to={`/farms/WlrsUsdcGenesisNrwlRewardPool/`}
            >
              Stake 
            </Button>
            <Button
              color="primary"
              size="small"
              target="_blank"
              style={{ width: '40%', height: '40px', marginBottom: '10%', textAlign: 'center' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664/0x395908aeb53d33A9B8ac35e148E9805D34A555D3#/"
            >
              Add Liquidity 
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card >
          <CardContent align="center">
            <Typography variant="h5" component="h2">
              WSHARE-USDC.e LP
            </Typography>
            <Box mt={2}>
              <TokenSymbol symbol="WSHARE-USDC-LP" />
            </Box>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              size="small"
              style={{ width: '200px', height: '40px', marginBottom: '10%' }}
              variant="contained"
              component={Link}
              to={`/farms/WshareUsdcGenesisNrwlRewardPool/`}
            >
              Stake
              </Button>
              <Button
              color="primary"
              size="small"
              target="_blank"
              style={{ width: '40%', height: '40px', marginBottom: '10%', textAlign: 'center' }}
              variant="contained"
              href="https://traderjoexyz.com/pool/0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664/0xe6d1aFea0B76C8f51024683DD27FA446dDAF34B6#/"
            >
              Add Liquidity
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent align="center">
            <Typography variant="h5" component="h2">
              WSHARE
            </Typography>
            <Box mt={2}>
              <TokenSymbol symbol="WSHARE" />
            </Box>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              color="primary"
              size="small"
              style={{ width: '200px', height: '40px', marginBottom: '10%' }}
              variant="contained"
              component={Link}
              to={`/farms/WshareGenesisNrwlRewardPool/`}
            >
              Stake
            </Button>
            <Button
              color="primary"
              size="small"
              target="_blank"
              style={{ width: '40%', height: '40px', marginBottom: '10%', textAlign: 'center' }}
              variant="contained"
              href="https://traderjoexyz.com/trade?inputCurrency=0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664&outputCurrency=0xe6d1aFea0B76C8f51024683DD27FA446dDAF34B6#/"
            >
              Buy WSHARE
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NrwlGenesisCard;
