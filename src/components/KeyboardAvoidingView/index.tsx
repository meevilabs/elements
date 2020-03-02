import React, { FC } from 'react';
import { KeyboardAvoidingView as Wrapper } from 'react-native';
import { KeyboardAvoiding as KeyboardAvoidingTypes } from '../../utils/types';
import { isIOS } from '../../utils/helpers';

const defaultBehavior = isIOS() ? 'padding' : undefined;

const KeyboardAvoidingView: FC<KeyboardAvoidingTypes> = ({
  children,
  behavior = defaultBehavior,
  keyboardOffset = 0,
  style = { flex: 1 },
  ...rest
}) => (
  <Wrapper
    style={style}
    behavior={behavior}
    enabled
    keyboardVerticalOffset={keyboardOffset}
    {...rest}
  >
    {children}
  </Wrapper>
);

export default KeyboardAvoidingView;
