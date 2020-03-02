import styled from 'styled-components/native';
import Typography from '../Typography';
import { getTheme } from '../../utils/helpers';

export const ErrorText = styled(Typography)`
  min-height: 17px;
  color: ${getTheme('failure')};
  margin-top: 5px;
`;
