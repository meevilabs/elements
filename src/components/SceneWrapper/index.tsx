import React, { FC } from 'react';
import { DismissKeyboardView } from '..';
import { ChildrenWrapper } from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
  dismissKeyboard?: boolean;
  gradientColors?: string[];
  scrollStyle?: any;
  style?: any;
  scrollRef?: any;
  fullWidth?: boolean;
  bouncesZoom?: boolean;
}

const contentContainerStyle = {
  maxWidth: 475, // limit for iPad
  flexDirection: 'column',
  alignSelf: 'center', // centralize for iPad
  flex: 1,
};
const SceneWrapper: FC<Props> = ({
  children,
  style = [{}],
  scrollStyle = {},
  dismissKeyboard = true,
  bouncesZoom = false,
  fullWidth = false,
  scrollRef = React.createRef(),
  ...rest
}) => (
  <DismissKeyboardView enabled={dismissKeyboard}>
    <ChildrenWrapper
      ref={scrollRef}
      isFullWidth={fullWidth}
      keyboardShouldPersistTaps={dismissKeyboard ? 'handled' : 'always'}
      keyboardDismissMode={dismissKeyboard ? 'on-drag' : 'none'}
      contentContainerStyle={[contentContainerStyle, style]}
      bouncesZoom={bouncesZoom}
      style={[
        scrollStyle,
        { backgroundColor: style[0]?.backgroundColor, width: '100%' },
      ]}
      {...rest}
    >
      {children}
    </ChildrenWrapper>
  </DismissKeyboardView>
);

export default SceneWrapper;
