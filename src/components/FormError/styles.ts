import styled from 'styled-components/native';
import { Typography } from '~/components';
import { getTheme } from '~/helpers';

export const ErrorText = styled(Typography)`
  min-height: 17px;
  color: ${getTheme('failure')};
  margin-top: 5px;
`;
