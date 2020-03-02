import React, { FC } from 'react';
import { Wrapper } from './styles';

const FacebookButton: FC<any> = (props) => (
  <Wrapper icon="facebook-f" {...props}>
    Facebook
  </Wrapper>
);

export default FacebookButton;
