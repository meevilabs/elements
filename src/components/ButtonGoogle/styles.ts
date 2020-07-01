import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import { ButtonType } from '../../types';
import Button from '../Button';

export const Wrapper = styled(Button).attrs({ sound: true })<ButtonType>`
  background-color: #dd2a27;
  width: ${scale(175)}px;
  margin-vertical: 20px;
`;
