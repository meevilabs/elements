import styled from 'styled-components/native';
import { Typography } from '..';
import { getTheme } from '../../utils/helpers';

const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const largeSpacing = getTheme('largeSpacing');
const sectionColor = 'rgba(255, 255, 255, 0.8)';

export const Wrapper = styled.View`
  margin-bottom: ${largeSpacing};
  width: 100%;
`;

export const ChildrenWrapper = styled.View`
  padding-horizontal: ${largeSpacing};
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 0.2px;
  border-bottom-color: ${sectionColor};
  margin-bottom: ${mediumSpacing};
  padding-bottom: ${smallSpacing};
`;

export const Title = styled(Typography).attrs({ variant: 'subhead' })`
  color: ${sectionColor};
  font-weight: 500;
  opacity: 0.6;
`;
