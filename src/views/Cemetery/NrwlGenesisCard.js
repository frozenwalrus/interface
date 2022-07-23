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
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card>
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
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NrwlGenesisCard;
