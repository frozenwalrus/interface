import React from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import { useWallet } from 'use-wallet';
import Row from '../../components/Row';
import Column from '../../components/Column';

import { Box, Container, Typography, Grid, CardActions, CardContent, Button } from '@material-ui/core';
import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import CemeteryImage from '../../assets/img/SVG_Icons_and_web_bg/bg.svg';
import { createGlobalStyle } from 'styled-components';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${CemeteryImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const Lottery = () => {
  const { account } = useWallet();

return (
<Page>
<BackgroundImage />
  <Container maxWidth="lg">
    
  </Container>
</Page>
);
};

export default Lottery;
