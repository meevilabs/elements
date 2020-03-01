import React, { FC } from 'react';
import {
  Wrapper,
  Left,
  Right,
  SelectedIcon,
  ChevronIcon,
  TitleIcon,
  Title,
  Description,
} from './styles';

interface Props {
  title: string;
  onPress(): void;
  selected?: boolean;
  isRoute?: boolean;
  big?: boolean;
  description?: string;
  icon?: string;
  renderRight?: JSX.Element | null;
}

const SelectableRow: FC<Props> = ({
  onPress,
  title,
  description = '',
  selected = false,
  isRoute = false,
  big = false,
  icon = null,
  renderRight = null,
  ...rest
}) => (
  <Wrapper onPress={onPress} {...rest}>
    <Left>
      {selected && <SelectedIcon big={big} />}
      {icon && <TitleIcon big={big} name={icon} />}
      <Title big={big}>{title}</Title>
    </Left>
    <Right>
      <Description big={big}>{description}</Description>
      {renderRight}
      {isRoute && <ChevronIcon />}
    </Right>
  </Wrapper>
);

export default SelectableRow;
