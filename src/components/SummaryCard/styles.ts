import styled from 'styled-components/native';
import { Typography, Icon as DefaultIcon } from '..';
import { getTheme } from '../../utils/helpers';

const mediumSpacing = getTheme('mediumSpacing');
const baseRadius = getTheme('baseRadius');
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');

export const Wrapper = styled.View`
  justify-content: space-between;
  padding: ${mediumSpacing};
  background-color: ${primaryLight};
  border-radius: ${baseRadius};
`;

export const IconWrapper = styled.View`
  background-color: ${primaryMain};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  position: absolute;
  right: 6px;
  top: 6px;
`;

export const Icon = styled(DefaultIcon).attrs((props) => ({
  touchable: false,
  color: primaryContrast(props),
}))`
  left: 0px;
  opacity: 0.8;
`;

export const Title = styled(Typography).attrs({
  variant: 'footnote',
  numberOfLines: 2,
})`
  color: ${primaryContrast};
  font-weight: 300;
  letter-spacing: 0.42px;
  max-width: 60%;
`;

export const Summary = styled(Typography).attrs({ variant: 'headline' })`
  color: ${primaryContrast};
  font-weight: 700;
`;
