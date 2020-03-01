import React, { FC } from 'react';
import { Wrapper } from './styles';

interface Props {
  children: JSX.Element;
}

const Shadow: FC<Props> = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Shadow;
