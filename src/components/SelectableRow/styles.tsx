import React from 'react';
import styled from 'styled-components/native';
import { getTheme, ifStyle } from '../../utils/helpers';
import { Touchable, Typography, Icon } from '..';

const smallIconSize = 24;
const bigIconSize = 30;

const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const largeSpacing = getTheme('largeSpacing');
const isBig = ifStyle('big');

export const Wrapper = styled(Touchable)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${smallSpacing};
  padding-left: ${largeSpacing};
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 75%;
  flex-wrap: wrap;
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SelectedIcon = styled((props) => (
  <Icon
    name="Check"
    color="white"
    touchable={false}
    size={isBig(bigIconSize, smallIconSize)(props)}
    {...props}
  />
))`
  position: absolute;
  top: 3px;
  left: -25px;
  margin-right: ${smallSpacing};
`;

export const ChevronIcon = styled((props) => (
  <Icon
    name="chevron-right"
    color="white"
    touchable={false}
    size={isBig(bigIconSize, smallIconSize)(props)}
    {...props}
  />
))`
  margin-left: ${isBig(mediumSpacing, smallSpacing)};
`;

export const TitleIcon = styled((props) => (
  <Icon
    color="white"
    touchable={false}
    size={isBig(bigIconSize, smallIconSize)(props)}
    {...props}
  />
))`
  margin-left: ${mediumSpacing};
  margin-right: ${smallSpacing};
`;

export const Title = styled((props) => (
  <Typography variant={isBig('title3', 'headline')(props)} {...props} />
))`
  padding-left: ${smallSpacing};
  font-weight: 400;
`;

export const Description = styled((props) => (
  <Typography variant={isBig('subhead', 'caption1')(props)} {...props} />
))``;
