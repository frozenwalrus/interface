import React from 'react';
import styled from 'styled-components';

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>;

const StyledCard = styled.div`
  background: #f2f5ff;
  border-radius: 15px;
  color: #4b4453;
  position: relative;
`;

export default Card;
