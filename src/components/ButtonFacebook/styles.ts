import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import Button from '../Button';

export const Wrapper = styled(Button).attrs({ sound: true })`
  background-color: #2d4688;
  width: ${scale(175)}px;
  margin-vertical: 20px;
`;
