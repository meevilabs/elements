import { HapticFeedback } from './HapticFeedback';

export interface Touchable {
  children: JSX.Element | JSX.Element[] | string | string[];
  onPress(arg?: any): any;
  sound?: boolean;
  disabled?: boolean;
  haptic?: HapticFeedback;
  style?: any;
  hitSlop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}
