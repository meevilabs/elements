import { Dimensions } from 'react-native';
import { Spacings } from '../types';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default {
  headerSpacing: '20px',
  sceneSpacing: '32px',
  smallSpacing: '8px',
  mediumSpacing: '12px',
  largeSpacing: '20px',
  giantSpacing: '26px',
  sectionSpacing: '38px',
  statusHeight: '44px',
  screenWidth,
  screenHeight,
} as Spacings;
