import {
  TextInputMaskTypeProp,
  TextInputMaskOptionProp,
} from 'react-native-masked-text';
import { FormErrorType } from './FormErrorType';

type KeyboardType =
  | 'default'
  | 'url'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
  | 'visible-password'
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'number-pad'
  | 'name-phone-pad'
  | 'decimal-pad'
  | 'twitter'
  | 'web-search'
  | undefined;

type ReturnKeyType =
  | 'default'
  | 'none'
  | 'search'
  | 'send'
  | 'done'
  | 'go'
  | 'next'
  | 'previous'
  | 'google'
  | 'join'
  | 'route'
  | 'yahoo'
  | 'emergency-call'
  | undefined;

export interface Input {
  id?: string;
  inputRef?: any;
  accessibility?: string;
  borderless?: boolean;
  contrast?: boolean;
  big?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  autoComplete?: string;
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyType;
  autoFocus?: boolean;
  iconSize?: number;
  iconTouchableEnabled?: boolean;
  label?: string;
  value?: any;
  placeholder?: string;
  iconName?: string;
  maskType?: TextInputMaskTypeProp | null;
  options?: TextInputMaskOptionProp;
  status?: string;
  error?: FormErrorType;
  iconHitSlop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  style?: any;
  textStyle?: any;
  labelStyle?: any;
  isPlaceholder?: boolean;
  onPressIcon?(value?: any): void;
  onBlur?(value?: any): void;
  onFocus?(value?: any): void;
  onChangeText?(value?: any): void;
}

export interface MaskedInput extends Input {
  maskType: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
}
