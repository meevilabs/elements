import React, { FC } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import { isIOS } from '../../helpers';
import { ButtonType } from '../../types';
import { Icon, Touchable, ButtonWrapper, ButtonText } from './styles';

const shadowStyle = {
  shadowColor: '#212121',
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.666,
  shadowRadius: 2,
  elevation: 2,
};

const Button: FC<ButtonType> = ({
  style = {},
  children = '',
  textStyle = {},
  active = false,
  secondary = false,
  tertiary = false,
  disabled = false,
  loading = false,
  rounded = false,
  iconSize = 18,
  icon = null,
  iconColor = '#ffffff',
  onPress = (): void => {},
}) => (
  <Touchable disabled={loading || disabled} onPress={onPress} rounded={rounded}>
    <ButtonWrapper
      secondary={secondary}
      tertiary={tertiary}
      style={[style, !rounded && isIOS() && shadowStyle]}
      disabled={disabled}
      active={active}
      rounded={rounded}
    >
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          {icon && (
            <Icon
              size={iconSize}
              name={icon}
              color={iconColor}
              touchable={false}
            />
          )}
          <ButtonText secondary={secondary} style={textStyle}>
            {children.toUpperCase()}
          </ButtonText>
        </>
      )}
    </ButtonWrapper>
  </Touchable>
);

export default Button;
