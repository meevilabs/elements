import React from 'react';
import styled from 'styled-components/native';
import { Touchable, Typography, Icon as DefaultIcon } from '..';
import { getTheme, ifStyle } from '../../utils/helpers';

const primaryContrast = getTheme('primary.contrast');
const isDisabled = ifStyle('isDisabled');

const iconHitSlop = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

export const Wrapper = styled.View`
  height: 25px;
  width: 70px;
  border-radius: 50px;
  border-color: ${primaryContrast};
  border-width: 1px;
  flex-direction: row;
  justify-content: center;
`;

export const Icon = styled((props) => (
  <DefaultIcon size={18} touchable={false} {...props} />
)).attrs(({ theme }) => ({
  color: theme.primary.contrast,
}))`
  opacity: ${isDisabled('0.25', '1')};
`;

export const Separator = styled.View`
  height: 100%;
  width: 1px;
  background-color: ${primaryContrast};
`;

export const Text = styled((props) => (
  <Typography variant="largeTitle" {...props} />
))`
  color: ${primaryContrast};
  font-weight: 600;
  text-align: center;
  top: 0;
`;

export const Button = styled((props) => (
  <Touchable hitSlop={iconHitSlop} {...props} />
))`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
