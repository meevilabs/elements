import styled from 'styled-components/native';
import TouchableComponent from '../Touchable';
import DefaultIcon from '../Icon';
import Typography from '../Typography';
import { getTheme } from '../../helpers';

const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');

export const Icon = styled(DefaultIcon).attrs({ iconSet: 'fontAwesome' })`
  margin-right: ${mediumSpacing};
`;

interface TouchableProps {
  rounded?: boolean;
}
export const Touchable = styled(TouchableComponent)`
  border-radius: ${(props: TouchableProps): any =>
    props.rounded ? '50px' : '0'};
`;

interface ButtonWrapperProps {
  rounded?: boolean;
  tertiary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  active?: boolean;
}

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  height: 48px;
  flex-direction: row;
  border: 2px solid;
  align-items: center;
  margin-vertical: ${smallSpacing};
  padding: ${(props): string => (props.rounded ? '0' : '13px 14px')};
  border-radius: ${(props): string => (props.rounded ? '50px' : '4px')}
  justify-content: center;
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

interface ButtonTextProps {
  secondary: boolean;
}

export const ButtonText = styled(Typography).attrs({ variant: 'subhead' })<
  ButtonTextProps
>`
  color: ${({ secondary }): any => (secondary ? primaryMain : primaryContrast)};
  font-weight: bold;
`;
