import styled from 'styled-components/native';
import { Typography } from '~/components';
import { getTheme } from '~/helpers';

const primaryMain = getTheme('primary.main');

export const Text = styled(Typography)`
  color: ${primaryMain};
  text-decoration-color: ${primaryMain};
  text-decoration-line: underline;
`;
