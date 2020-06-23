import { HapticFeedback } from './HapticFeedback';

export type TouchableType = {
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
};
