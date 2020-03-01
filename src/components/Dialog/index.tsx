import React, { FC } from 'react';
import { Wrapper } from './styles';

interface Props {
  title?: string;
  persist?: boolean;
  visible: boolean;
  onClose(): void;
}

const Dialog: FC<Props> = ({
  title = '',
  persist = false,
  visible,
  children,
  onClose,
}) => (
  <Wrapper
    animationType="fade"
    title={title}
    visible={visible}
    onRequestClose={onClose}
    onTouchOutside={persist ? undefined : onClose}
  >
    {children}
  </Wrapper>
);

export default Dialog;
