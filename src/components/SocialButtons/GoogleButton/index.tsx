import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Button } from '~/components';

const Wrapper = styled(Button).attrs({ sound: true })`
  background-color: #dd2a27;
  width: 175px;
  margin-vertical: 20px;
`;

const GoogleButton: FC<any> = (props) => (
  <Wrapper icon="google" {...props}>
    Google
  </Wrapper>
);

export default GoogleButton;
