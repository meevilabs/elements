import { TypographyVariants } from './Variants';
import { ThemeType } from './ThemeType';

export type TypographyType = {
  variant?: TypographyVariants;
  children?: string | string[] | any;
  style?: any;
  textRef?: any;
  theme: ThemeType;
};
