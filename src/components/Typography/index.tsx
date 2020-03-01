import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { human } from 'react-native-typography';
import { Theme, Variants } from '~/types';
import { Text } from './styles';
import { ThemeContext } from '../ThemeContext';

interface Props {
  variant?: Variants;
  children?: string | string[] | (string | JSX.Element)[];
  style?: object[];
  textRef?: any;
  theme: Theme;
}

const Typography: FC<Props> = ({
  style = [{}],
  variant = 'body',
  textRef = React.createRef(),
  children,
  ...rest
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <Text
        ref={textRef}
        style={[human[variant], { color: theme.primary.contrast }, style]}
        {...rest}
      >
        {children}
      </Text>
    </ThemeProvider>
  );
};

export default Typography;
