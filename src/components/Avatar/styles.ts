import styled from 'styled-components/native';
import { Touchable } from '..';

interface WrapperProps {
  size: number;
}

export const Wrapper = styled(Touchable)<WrapperProps>`
  width: ${({ size }): number => size}px;
  height: ${({ size }): number => size}px;
  border-radius: ${({ size }): number => size / 2}px;
  overflow: hidden;
`;

export const Image = styled.Image.attrs({ resizeMode: 'cover' })`
  width: 100%;
  height: 100%;
`;
