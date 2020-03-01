import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Button } from '~/components';

const Wrapper = styled(Button).attrs({ sound: true })`
  background-color: #2d4688;
  width: 175px;
  margin-vertical: 20px;
`;

const FacebookButton: FC<any> = (props) => (
  <Wrapper icon="facebook-f" {...props}>
    Facebook
  </Wrapper>
);

export default FacebookButton;
