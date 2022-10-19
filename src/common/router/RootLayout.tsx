import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Content = styled.div`
  flex: 1 1 auto;
`;

export const RootLayout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Wrapper>
  );
};
