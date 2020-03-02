import styled from 'styled-components/native';
import { Switch } from 'react-native';
import { Typography } from '..';
import { getTheme } from '../../utils/helpers';

const labelColor = getTheme('primary.contrast');
const toggleColors = getTheme('outcome.light');

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Toggle = styled(Switch).attrs((props) => ({
  trackColor: toggleColors(props),
}))``;

export const Label = styled(Typography)`
  color: ${labelColor};
`;
