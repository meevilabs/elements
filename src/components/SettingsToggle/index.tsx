import React, { FC } from 'react';
import { Wrapper, Label, Toggle } from './styles';

interface Props {
  label: string;
  active: boolean;
  onChange(value: any): void;
}

const SettingsToggle: FC<Props> = ({ label, active, onChange, ...rest }) => (
  <Wrapper {...rest}>
    <Label>{label}</Label>
    <Toggle onValueChange={onChange} value={active} />
  </Wrapper>
);

export default SettingsToggle;
