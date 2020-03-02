import styled from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
  isIphoneX,
} from 'react-native-iphone-x-helper';
import { getTheme, ifStyle } from '../../utils/helpers';

const extraPadding = isIphoneX() ? 10 : 0;
const statusBarHeight = getStatusBarHeight();
const bottomSpacing = getBottomSpace();
const isFullWidth = ifStyle('isFullWidth');
const sceneSpacing = getTheme('sceneSpacing');

interface ChildrenWrapperProps {
  isFullWidth: boolean;
}

export const ChildrenWrapper = styled.ScrollView<ChildrenWrapperProps>`
  flex: 1;
  width: 100%;
  padding-horizontal: ${isFullWidth(0, sceneSpacing)};
  padding-top: ${statusBarHeight + extraPadding}px;
  padding-bottom: ${bottomSpacing + extraPadding}px;
`;
