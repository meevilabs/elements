import styled from 'styled-components/native';
import { getTheme } from '../../utils/helpers';
import { Touchable, Typography, Icon } from '..';

const smallSpacing = getTheme('smallSpacing');

export const Wrapper = styled(Touchable)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
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

export const ChevronIcon = styled(Icon).attrs({
  name: 'chevron-right',
  color: 'white',
  touchable: false,
  size: 23,
})`
  margin-left: ${smallSpacing};
`;

export const Title = styled(Typography).attrs({
  variant: 'headline',
})``;

export const Description = styled(Typography).attrs({
  variant: 'caption1',
})``;
