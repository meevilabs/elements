import React, { FC } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import { ButtonType } from '../../types';
import { Icon, Touchable, ButtonWrapper, ButtonText } from './styles';

const Button: FC<ButtonType> = ({
  children,
  style = {},
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
      style={style}
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
              hasChildren={!!children}
            />
          )}
          {children && (
            <ButtonText secondary={secondary} style={textStyle}>
              {children}
            </ButtonText>
          )}
        </>
      )}
    </ButtonWrapper>
  </Touchable>
);

export default Button;
