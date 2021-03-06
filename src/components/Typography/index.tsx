import React, { FC } from 'react';
import { human } from 'react-native-typography';
import { withTheme } from 'styled-components';
import { TypographyType } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyType> = ({
  theme,
  style = {},
  variant = 'body',
  textRef = React.createRef(),
  children,
  ...rest
}) => (
  <Text
    ref={textRef}
    style={[human[variant], { color: theme.primary.contrast }, style]}
    {...rest}
  >
    {children}
  </Text>
);

export default withTheme(Typography);
