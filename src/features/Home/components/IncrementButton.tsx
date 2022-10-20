import React from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '@/common/redux';

import { incrementAction } from '../redux/home.slice';

const StyledButton = styled.button`
  padding: 15px 25px;
  margin-bottom: ${({ theme }) => theme.indent.m};
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  cursor: pointer;
`;

export const IncrementButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incrementAction());
  };

  return <StyledButton onClick={handleClick}>Increment</StyledButton>;
};
