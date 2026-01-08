import styled from 'styled-components/native';
import Animation from 'lottie-react-native';
import { getTheme } from '../../helpers';
import { AnimationObject, LoadingVariants } from '../../types';
import { LoadingCircle as DefaultLoading } from '../../assets/animations';

export const circularLoading = getTheme('circularLoading');
export const buttonLoading = getTheme('buttonLoading');
export const linearLoading = getTheme('linearLoading');

interface IndicatorProps {
  variant: LoadingVariants;
}

const loadingVariant = (
  props: any,
): string | AnimationObject | { uri: string } => {
  switch (props.variant) {
    case 'button':
      return buttonLoading(props) || DefaultLoading;
    case 'circular':
      return circularLoading(props) || DefaultLoading;
    case 'linear':
      return linearLoading(props) || DefaultLoading;
    default:
      return circularLoading(props) || DefaultLoading;
  }
};

export const smallSize = {
  width: 60,
  height: 60,
};

export const largeSize = {
  width: 120,
  height: 120,
};

export const Indicator = styled(Animation).attrs((props) => ({
  source: loadingVariant(props),
  autoPlay: true,
  loop: true,
}))<IndicatorProps>``;
