import styled from 'styled-components/native';
import TouchableComponent from '../Touchable';
import DefaultIcon from '../Icon';
import Typography from '../Typography';
import { getTheme } from '../../helpers';

const smallSpacing = getTheme('smallSpacing');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const buttonRadius = getTheme('buttonRadius');

// Fallback helpers
const getSmallSpacing = (props: any) => smallSpacing(props) || '8px';
const getPrimaryMain = (props: any) => primaryMain(props) || '#6200ee';
const getPrimaryContrast = (props: any) => primaryContrast(props) || '#fff';
const getButtonRadius = (props: any) => buttonRadius(props) || '4px';

type IconProps = {
  hasChildren: boolean;
};

export const Icon = styled(DefaultIcon)<IconProps>`
  margin-right: ${(props) => (props.hasChildren ? '4px' : '0px')};
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
  width: 175px;
  height: 48px;
  border: ${(props): string => (props.tertiary ? '2px solid' : '0px')};
  margin-vertical: ${getSmallSpacing};
  padding-vertical: ${(props): string =>
    props.rounded ? '0' : '11px'};
  padding-horizontal: ${(props): string =>
    props.rounded ? '0' : '15px'};
  border-radius: ${(props): string =>
    props.rounded ? '50px' : getButtonRadius(props)};
  background-color: ${(props): any =>
    props.tertiary
      ? 'transparent'
      : props.secondary
      ? getPrimaryContrast(props)
      : getPrimaryMain(props)};
  border-color: ${(props): any =>
    props.rounded || (props.tertiary && !props.active)
      ? getPrimaryContrast(props)
      : 'transparent'};
`;

type ButtonTextProps = {
  secondary: boolean;
};

export const ButtonText = styled(Typography).attrs({ variant: 'subhead' })<
  ButtonTextProps
>`
  color: ${(props): any => (props.secondary ? getPrimaryMain(props) : getPrimaryContrast(props))};
  font-weight: bold;
`;
