import React, { FC } from 'react';
import { Wrapper, Title, Summary, IconWrapper, Icon } from './styles';

interface Props {
  title: string;
  summary: string;
  iconName?: string;
  iconSize?: number;
}

const SummaryCard: FC<Props> = ({
  title,
  summary,
  iconName = '',
  iconSize = 15,
  ...rest
}) => (
  <Wrapper {...rest}>
    {iconName && (
      <IconWrapper>
        <Icon name={iconName} size={iconSize} />
      </IconWrapper>
    )}
    <Title>{title}</Title>
    <Summary>{summary}</Summary>
  </Wrapper>
);

export default SummaryCard;
