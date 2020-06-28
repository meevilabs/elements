import { moderateScale } from 'react-native-size-matters';
import { Radius } from '../types';

export default {
  smallRadius: `${moderateScale(5)}px`,
  mediumRadius: `${moderateScale(10)}px`,
  largeRadius: `${moderateScale(16)}px`,
  modalRadius: `${moderateScale(20)}px`,
  buttonRadius: `${moderateScale(4)}px`,
} as Radius;
