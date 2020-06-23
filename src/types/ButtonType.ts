import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export type ButtonType = {
  children: string;
  disabled?: boolean;
  rounded?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  loading?: boolean;
  sound?: boolean;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?(): void;
  iconSize?: number;
  icon?: string;
  iconColor?: string;
};
