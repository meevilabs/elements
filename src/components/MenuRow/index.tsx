import React, { FC } from 'react';
import { Wrapper, Right, ChevronIcon, Title, Description } from './styles';

type Props = {
  label: string;
  onPress(): void;
  description?: string;
  renderRight?: JSX.Element;
};

const MenuRow: FC<Props> = ({
  onPress,
  label,
  renderRight,
  description = '',
  ...rest
}) => (
  <Wrapper onPress={onPress} {...rest}>
    <Title>{label}</Title>
    <Right>
      <Description>{description}</Description>
      {renderRight}
      <ChevronIcon />
    </Right>
  </Wrapper>
);

export default MenuRow;
