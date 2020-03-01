import React, { FC } from 'react';
import { Touchable as TouchableType } from '~/types';
import { generateHaptic } from '~/helpers';
import { Wrapper, TouchAnimation } from './styles';

const resetTouchableStyle = {
  backgroundColor: 'transparent ',
  margin: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  padding: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  borderWidth: 0,
};

const CommonTouchable: FC<TouchableType> = ({
  children,
  onPress,
  haptic = 'impact',
  disabled = false,
  style = [{}],
  hitSlop = {
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  },
  ...rest
}) => (
  <Wrapper style={style} {...rest}>
    <TouchAnimation
      {...rest}
      hitSlop={hitSlop}
      style={[style, resetTouchableStyle]}
      disabled={disabled}
      onPress={(): void => {
        generateHaptic(haptic);
        onPress();
      }}
    >
      {children}
    </TouchAnimation>
  </Wrapper>
);

export default CommonTouchable;
