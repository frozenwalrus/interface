import React from 'react';
import styled from 'styled-components';

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>;

const StyledCard = styled.div`
  background: #12141D;
  border-radius: 15px;
  color: #fcfcfc;
  position: relative;
`;

export default Card;
