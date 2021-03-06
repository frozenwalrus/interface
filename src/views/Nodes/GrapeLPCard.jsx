import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, Card, CardActions, CardContent, Typography, Grid} from '@material-ui/core';
import {useParams} from 'react-router-dom';
import TokenSymbol from '../../components/TokenSymbol';
import useStatsForPool from '../../hooks/useStatsForPool';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import useBank from '../../hooks/useBank';

const GrapeLPCard = ({}) => {
  const tombBank = useBank('LPWlrsNode');
  const statsOnPool = useStatsForPool(tombBank);
    
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card style={{background: 'linear-gradient(90deg, #8fbdeb 14%, #a2c8ee 100%)', borderRadius: '15px'}}>
        <CardContent>
          <Box style={{position: 'relative'}}>
            <Box
              style={{
                position: 'absolute',
                right: '5px',
                top: '-5px',
                height: '48px',
                width: '48px',
                borderRadius: '40px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TokenSymbol  width={100} height={50} symbol={'GRAPE-WLRS-LP'} />
            </Box>
            <Typography variant="h5" component="h2">
            GRAPE-WLRS LP Node
            </Typography>
            <Typography color="#322f32">
              Lock your LP to earn daily yields<br></br>
              <b>Daily APR:</b> {statsOnPool?.dailyAPR}%<br></br>
              <b>Yearly APR:</b> {statsOnPool?.yearlyAPR}%
            </Typography>
          </Box>
        </CardContent>
        <CardActions style={{justifyContent: 'flex-end'}}>
          <Button className="shinyButtonSecondary" style={{background: '#5686d6', borderRadius: '15px'}} component={Link} to={'/nodes/LPWlrsNode'}>
            Stake
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GrapeLPCard;