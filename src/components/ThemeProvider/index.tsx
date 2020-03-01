import React, { FC } from 'react';
import { Theme } from '~/types';
import { colors, metrics } from '~/theme';
import { ThemeContext } from '../ThemeContext';

const defaultTheme = {
  ...colors,
  ...metrics,
};

interface Props {
  theme: Theme;
}

const BuildersProvider: FC<Props> = ({ children, theme = defaultTheme }) => (
  <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
);

export default BuildersProvider;
