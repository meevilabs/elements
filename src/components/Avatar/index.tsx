import React, { FC } from 'react';
import { Wrapper, Image } from './styles';

const defaultAvatar =
  'https://qph.fs.quoracdn.net/main-qimg-54075e2b6df5d93405b85ee3a77e6098';

interface Props {
  image?: string;
  size?: number;
  onPress?(): void;
}

const Avatar: FC<Props> = ({
  image = defaultAvatar,
  size = 50,
  onPress = (): void => {},
  ...rest
}) => (
  <Wrapper size={size} onPress={onPress} disabled={!onPress} {...rest}>
    <Image source={{ uri: image }} />
  </Wrapper>
);

export default Avatar;
