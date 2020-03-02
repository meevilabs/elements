export interface ButtonType {
  children: string;
  disabled?: boolean;
  rounded?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  loading?: boolean;
  sound?: boolean;
  active?: boolean;
  style?: object[];
  textStyle?: object | object[];
  onPress?(): void;
  iconSize?: number;
  icon?: string;
  iconColor?: string;
}
