import React, { FC } from 'react';
import { Wrapper } from './styles';

const FacebookButton: FC<any> = (props) => (
  <Wrapper icon="facebook" {...props} />
);

export default FacebookButton;
