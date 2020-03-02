import styled from 'styled-components/native';
import Touchable from '../Touchable';
import Typography from '../Typography';
import { getTheme, ifStyle } from '../../helpers';

const isSelected = ifStyle('isSelected');
const isDisabled = ifStyle('isDisabled');
const primaryContrast = getTheme('primary.contrast');
const primaryDark = getTheme('primary.dark');

interface WrapperProps {
  isSelected: boolean;
  isDisabled: boolean;
}
export const Wrapper = styled(Touchable)<WrapperProps>`
  border-radius: 4px;
  padding-vertical: 4px;
  padding-horizontal: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${isSelected(primaryContrast, 'transparent')};
  opacity: ${isDisabled(0.42, 1)};
`;

interface LabelProps {
  isSelected: boolean;
}

export const Label = styled(Typography)<LabelProps>`
  color: ${isSelected(primaryDark, primaryContrast)};
`;
