type Behavior = 'height' | 'position' | 'padding' | undefined;

export interface KeyboardAvoiding {
  behavior?: Behavior;
  enabled?: boolean;
  keyboardOffset?: number;
  style?: any;
}
