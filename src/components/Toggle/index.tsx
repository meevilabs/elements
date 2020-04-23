import React, { FC } from 'react';
import { Wrapper, Label, Switch } from './styles';

interface Props {
  label: string;
  active: boolean;
  onChange(value: any): void;
}

const Toggle: FC<Props> = ({ label, active, onChange, ...rest }) => (
  <Wrapper {...rest}>
    <Label>{label}</Label>
    <Switch onValueChange={onChange} value={active} />
  </Wrapper>
);

export default Toggle;
