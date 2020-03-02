import React, { FC } from 'react';
import Touchable from '../Touchable';
import { Variants } from '../../types';
import { Text } from './styles';

interface Props {
  variant?: Variants;
  onPress(): void;
  children: string | string[];
}

const Link: FC<Props> = ({ onPress, children, variant = 'body', ...rest }) => (
  <Touchable onPress={onPress} {...rest}>
    <Text variant={variant} {...rest}>
      {children}
    </Text>
  </Touchable>
);

export default Link;
