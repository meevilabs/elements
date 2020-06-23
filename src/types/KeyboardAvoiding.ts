import { KeyboardAvoidingViewProps } from 'react-native';

export interface KeyboardAvoiding extends KeyboardAvoidingViewProps {
  enabled?: boolean;
  keyboardOffset?: number;
}
