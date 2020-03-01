import React, { FC } from 'react';
import { KeyboardAvoidingView as Wrapper } from 'react-native';
import { isIOS } from '~/helpers';

type Behavior = 'height' | 'position' | 'padding' | undefined;

interface Props {
  behavior?: Behavior;
  enabled?: boolean;
  keyboardOffset?: number;
  style?: any;
}

const defaultBehavior: Behavior = isIOS() ? 'padding' : undefined;

const KeyboardAvoidingView: FC<Props> = ({
  children,
  behavior = defaultBehavior,
  keyboardOffset = 0,
  style = { flex: 1 },
  ...rest
}) => (
  <Wrapper
    style={style}
    behavior={behavior}
    enabled={true}
    keyboardVerticalOffset={keyboardOffset}
    {...rest}
  >
    {children}
  </Wrapper>
);

export default KeyboardAvoidingView;
