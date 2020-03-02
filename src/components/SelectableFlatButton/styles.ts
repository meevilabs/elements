import styled from 'styled-components/native';
import { Touchable, Typography } from '..';
import { getTheme, ifStyle } from '../../utils/helpers';

const isSelected = ifStyle('isSelected');
const primaryContrast = getTheme('primary.contrast');
const buttonRadius = getTheme('buttonRadius');
const smallSpacing = getTheme('smallSpacing');

interface StyledProps {
  isSelected: boolean;
}

export const Wrapper = styled(Touchable)<StyledProps>`
  border-radius: ${buttonRadius};
  padding-horizontal: ${smallSpacing};
  justify-content: center;
  align-items: center;
  background-color: ${isSelected(primaryContrast, 'transparent')};
`;

export const Label = styled(Typography).attrs({ variant: 'caption1' })<
  StyledProps
>`
  color: ${primaryContrast};
  opacity: ${isSelected(1, 0.5)};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: ${isSelected('500', '400')};
`;
