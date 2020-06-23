import React, { Component } from 'react';
import { Spring, config as springConfig } from 'react-spring/renderprops';
import LoadingIndicator from '../LoadingIndicator';
import { IconSets } from '../../types';
import { Wrapper, Touch, Icon } from './styles';

const bigSize = 70;
const normalSize = 55;
const smallSize = 45;
const iconBigSize = 34;
const iconNormalSize = 28;
const iconSmallSize = 24;

type Animations = 'stiff' | 'gentle' | 'wobbly';

type Props = {
  onPress(): any;
  children?: JSX.Element | string;
  icon?: string;
  selected?: boolean;
  animated?: boolean;
  loading?: boolean;
  small?: boolean;
  big?: boolean;
  iconSize?: number;
  iconColor?: string;
  iconSet?: IconSets;
  animation?: Animations;
};

class CircleButton extends Component<Props> {
  state = {
    pressing: false,
  };

  render(): JSX.Element {
    const { pressing } = this.state;
    const {
      onPress,
      icon = '',
      iconSize = null,
      iconColor = '#fff',
      iconSet = 'material',
      children = null,
      selected = false,
      small = false,
      big = false,
      loading = false,
      animated = false,
      animation = 'stiff',
      ...rest
    } = this.props;
    const size = small ? smallSize : big ? bigSize : normalSize;
    const sizeIcon =
      iconSize || (small ? iconSmallSize : big ? iconBigSize : iconNormalSize);
    const initialSize = animated ? 0 : size;
    return (
      <Spring
        config={springConfig[animation]}
        from={{ height: initialSize, width: initialSize }}
        to={{
          height: pressing && animated ? size + 4 : size,
          width: pressing && animated ? size + 4 : size,
        }}
      >
        {(animationProps): JSX.Element => (
          <Wrapper isSelected={selected} {...animationProps} {...rest}>
            <Touch disabled={!onPress} onPress={onPress}>
              {loading ? (
                <LoadingIndicator />
              ) : (
                children || (
                  <Icon
                    name={icon}
                    color={iconColor}
                    size={sizeIcon}
                    iconSet={iconSet}
                    touchable={false}
                  />
                )
              )}
            </Touch>
          </Wrapper>
        )}
      </Spring>
    );
  }
}

export default CircleButton;
