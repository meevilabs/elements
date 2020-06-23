import React, { FC } from 'react';
import { Wrapper, Label } from './styles';

type Props = {
  onPress(arg: any): void;
  children: string | string[];
  selected?: boolean;
  style?: any;
};

const SelectableFlatButton: FC<Props> = ({
  onPress,
  children,
  selected = false,
  ...rest
}) => (
  <Wrapper onPress={onPress} isSelected={selected} {...rest}>
    <Label isSelected={selected}>{children}</Label>
  </Wrapper>
);

export default SelectableFlatButton;
