import React, { FC } from 'react';
import { Wrapper } from './styles';

const GoogleButton: FC<any> = (props) => (
  <Wrapper icon="google" {...props}>
    Google
  </Wrapper>
);

export default GoogleButton;
