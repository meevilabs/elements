import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { Touchable } from '~/components';

interface WrapperProps {
  size: number;
}

export const Wrapper = styled(Touchable)<WrapperProps>`
  width: ${({ size }): number => size}px;
  height: ${({ size }): number => size}px;
  border-radius: ${({ size }): number => size / 2}px;
  overflow: hidden;
`;

export const Image = styled(FastImage).attrs({ resizeMode: 'cover' })`
  width: 100%;
  height: 100%;
`;
