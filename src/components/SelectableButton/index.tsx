import React, { FC } from 'react';
import { Wrapper, Label } from './styles';

interface Props {
  onPress(arg?: any): void;
  children: string | string[];
  disabled?: boolean;
  selected?: boolean;
}

const SelectableButton: FC<Props> = ({
  onPress,
  children,
  selected = false,
  disabled = false,
  ...rest
}) => (
  <Wrapper
    onPress={onPress}
    isDisabled={disabled}
    isSelected={selected}
    disabled={disabled}
    {...rest}
  >
    <Label isSelected={selected}>{children}</Label>
  </Wrapper>
);

export default SelectableButton;
