import React, { FC } from 'react';
import { Wrapper, TitleWrapper, Title, ChildrenWrapper } from './styles';

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const SettingsSection: FC<Props> = ({ title, children }) => (
  <Wrapper>
    <TitleWrapper>
      <Title>{title.toUpperCase()}</Title>
    </TitleWrapper>
    <ChildrenWrapper>{children}</ChildrenWrapper>
  </Wrapper>
);

export default SettingsSection;
