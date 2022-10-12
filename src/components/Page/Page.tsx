import React from 'react';
import { Container } from '@material-ui/core';
import useEagerConnect from '../../hooks/useEagerConnect';

import Footer from '../Footer';
import Nav from '../Nav';

const Page: React.FC = ({ children }) => {
  useEagerConnect();
  return (
    <div
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #202231 0%, rgba(30, 32, 46, 0.6) 73.44%, rgba(29, 31, 44, 0) 100%)',
      }}
    >
      <Nav />
      <Container maxWidth="lg" style={{ paddingBottom: '5rem' }}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Page;
