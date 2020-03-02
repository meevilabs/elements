import styled from 'styled-components/native';
import { ButtonType } from '../../types';
import Button from '../Button';

export const Wrapper = styled(Button).attrs({ sound: true })<ButtonType>`
  background-color: #dd2a27;
  width: 175px;
  margin-vertical: 20px;
`;
