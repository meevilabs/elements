import React, { PureComponent } from 'react';
import { Animated, View, ViewStyle, StyleProp } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { IconSets } from '../../types';
import Touchable from '../Touchable';
import * as Icons from '../../assets/svg';

type Props = {
  name: string;
  onPress?(): void;
  touchable?: boolean;
  size?: number;
  color?: string;
  iconSet?: IconSets;
  borderColor?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle> | any;
  hitSlop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
};

export default class Icon extends PureComponent<Props> {
  renderIconSet = (): JSX.Element => {
    const { iconSet = 'material', name, size, color } = this.props;
    let IconSet;
    switch (iconSet) {
      case 'material':
        IconSet = MaterialIcons;
        break;
      case 'fontAwesome':
        IconSet = FontAwesomeIcons;
        break;
      default:
        IconSet = MaterialIcons;
        break;
    }
    return <IconSet name={name} size={size} color={color} />;
  };

  render(): JSX.Element {
    const {
      name,
      onPress = (): void => {},
      size = 20,
      style,
      touchable = true,
      color = undefined,
      borderColor = '',
      backgroundColor = '',
      ...rest
    } = this.props;
    const iconName = name.charAt(0).toUpperCase() + name.slice(1);
    const Svg = Icons[`Icon${iconName}`];
    return (
      <Animated.View style={style}>
        <Touchable disabled={!touchable} onPress={onPress} {...rest}>
          <View>
            {Svg ? (
              <Svg
                width={size}
                height={size}
                color={color}
                borderColor={borderColor}
                backgroundColor={backgroundColor}
              />
            ) : (
              this.renderIconSet()
            )}
          </View>
        </Touchable>
      </Animated.View>
    );
  }
}
