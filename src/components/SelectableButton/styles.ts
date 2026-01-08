import styled from 'styled-components/native';
import Touchable from '../Touchable';
import Typography from '../Typography';
import { getTheme } from '../../helpers';

const primaryContrast = getTheme('primary.contrast');
const primaryDark = getTheme('primary.dark');

// Fallback helpers
const getPrimaryContrast = (props: any) => primaryContrast(props) || '#fff';
const getPrimaryDark = (props: any) => primaryDark(props) || '#000';

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
  background-color: ${(props: any) => props.isSelected ? getPrimaryContrast(props) : 'transparent'};
  opacity: ${(props: any) => props.isDisabled ? 0.8 : 1};
`;

interface LabelProps {
  isSelected: boolean;
}

export const Label = styled(Typography)<LabelProps>`
  color: ${(props: any) => props.isSelected ? getPrimaryDark(props) : getPrimaryContrast(props)};
`;
