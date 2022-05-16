import React from 'react';
import { Button, Card } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import TokenSymbol from '../../../../components/TokenSymbol';

import { black, white } from '../../../../theme/colors';
import MagicLogo from '../../../../assets/img/MAGIK.png';

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

const StyledButton = styled(Button)({
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'none',
  borderRadius: 0,
  backgroundColor: black,
  color: white,
  width: '100%',
  padding: '10px 20px',
  marginTop: 32,
  '&:hover': {
    backgroundColor: black,
    boxShadow: '0px 0px 5px 0px rgba(251, 221, 76, 1)',
  },
});

const CompoundCard = ({ cardData, buttonProps }) => {
  const { title, tokenSymbol, tokenWidth = 120, tokenHeight = 60 } = cardData;
  const { href } = buttonProps;

  return (
    <StyledCard>
      <h2
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 16,
          marginBottom: 32,
          color: black,
        }}
      >
        {title}
      </h2>

      <TokenSymbol
        symbol={tokenSymbol}
        width={tokenWidth}
        height={tokenHeight}
      />

      <p
        style={{
          fontSize: 14,
          fontWeight: 'lighter',
          textAlign: 'center',
          color: black,
          margin: 32,
        }}
      >
        This compounding is hosted on <strong>magik.farm</strong>
      </p>

      <img
        src={MagicLogo}
        alt="invest cow"
        style={{ width: 60 }}
      />

      <StyledButton target="_blank" rel="noreferrer noopener" href={href}>
        Invest
      </StyledButton>
    </StyledCard>
  );
};

export default CompoundCard;
