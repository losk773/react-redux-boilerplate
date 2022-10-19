import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: black;
  text-transform: uppercase;
  color: #fff;
`;

export const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};
