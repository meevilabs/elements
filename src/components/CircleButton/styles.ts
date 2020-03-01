import styled from 'styled-components/native';
import { Touchable, Icon as IconComponent } from '~/components';
import { getTheme, ifStyle } from '~/helpers';

const isSelected = ifStyle('isSelected');

interface WrapperProps {
  isSelected: boolean;
}

export const Wrapper = styled.View<WrapperProps>`
  background-color: ${getTheme('primary.light')};
  border-radius: 50px;
  overflow: hidden;
  border: ${(props): any =>
    isSelected(`2px solid ${getTheme('outcome.light')(props)}`, '0')};
`;

export const Touch = styled(Touchable)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
`;

export const Icon = styled(IconComponent)``;
