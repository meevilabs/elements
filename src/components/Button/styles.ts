import styled from 'styled-components/native';
import { scale, moderateScale } from 'react-native-size-matters';
import TouchableComponent from '../Touchable';
import DefaultIcon from '../Icon';
import Typography from '../Typography';
import { getTheme } from '../../helpers';

const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const buttonRadius = getTheme('buttonRadius');

export const Icon = styled(DefaultIcon)`
  margin-right: ${mediumSpacing};
`;

type TouchableProps = {
  rounded?: boolean;
};
export const Touchable = styled(TouchableComponent)`
  border-radius: ${(props: TouchableProps): any =>
    props.rounded ? '50px' : '0'};
`;

type ButtonWrapperProps = {
  rounded?: boolean;
  tertiary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  active?: boolean;
};

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${scale(175)}px;
  height: ${moderateScale(48)}px;
  border: ${(props): string => (props.tertiary ? '2px solid' : '0px')};
  margin-vertical: ${smallSpacing};
  padding: ${(props): string =>
    props.rounded ? '0' : `${moderateScale(11)}px`};
  border-radius: ${(props): string =>
    props.rounded ? '50px' : buttonRadius(props)}
  background-color: ${(props): any =>
    props.tertiary
      ? 'transparent'
      : props.secondary
      ? primaryContrast
      : primaryMain};
  border-color: ${(props): any =>
    props.rounded || (props.tertiary && !props.active)
      ? primaryContrast
      : 'transparent'};
`;

type ButtonTextProps = {
  secondary: boolean;
};

export const ButtonText = styled(Typography).attrs({ variant: 'subhead' })<
  ButtonTextProps
>`
  color: ${({ secondary }): any => (secondary ? primaryMain : primaryContrast)};
  font-weight: bold;
`;
