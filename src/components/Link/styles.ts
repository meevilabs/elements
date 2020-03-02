import styled from 'styled-components/native';
import { Typography } from '..';
import { getTheme } from '../../utils/helpers';

const primaryMain = getTheme('primary.main');

export const Text = styled(Typography)`
  color: ${primaryMain};
  text-decoration-color: ${primaryMain};
  text-decoration-line: underline;
`;
