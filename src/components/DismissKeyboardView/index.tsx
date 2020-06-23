import React, { FC, ReactNode } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

type Props = {
  enabled?: boolean;
  children: ReactNode;
};

const DismissKeyboardView: FC<Props> = ({ children, enabled = true }) => (
  <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    disabled={!enabled}
    accessible={false}
  >
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
