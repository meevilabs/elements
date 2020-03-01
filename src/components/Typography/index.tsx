import React, { FC } from 'react';
import { human } from 'react-native-typography';
import { FormikErrors } from 'formik';
import { withTheme } from 'styled-components';
import { Theme, Metrics, Variants } from '~/types';
import { Text } from './styles';

interface Props {
  variant?: Variants;
  children?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  style?: any;
  textRef?: any;
  theme: Theme & Metrics;
}

const Typography: FC<Props> = ({
  theme,
  style = {},
  variant = 'body',
  textRef = React.createRef(),
  children,
  ...rest
}) => {
  return (
    <Text
      ref={textRef}
      style={[human[variant], { color: theme.primary.contrast }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default withTheme(Typography);
