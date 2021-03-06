import styled from 'styled-components/native';
import { Switch as DefaultSwitch } from 'react-native';
import Typography from '../Typography';
import { getTheme } from '../../helpers';

const labelColor = getTheme('primary.contrast');
const toggleColors = getTheme('outcome.light');

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Switch = styled(DefaultSwitch).attrs((props) => ({
  trackColor: toggleColors(props),
}))``;

export const Label = styled(Typography)`
  color: ${labelColor};
`;
