import React, { FC } from 'react';
import { Wrapper, Image } from './styles';

const DefaultAvatar = 'https://cdn.onlinewebfonts.com/svg/img_258083.png';

interface Props {
  image?: string;
  size?: number;
  onPress?(): void;
}

const Avatar: FC<Props> = ({ image, size = 50, onPress = null, ...rest }) => (
  <Wrapper
    size={size}
    onPress={onPress || ((): void => {})}
    disabled={!onPress}
    {...rest}
  >
    <Image source={{ uri: image || DefaultAvatar }} />
  </Wrapper>
);

export default Avatar;
