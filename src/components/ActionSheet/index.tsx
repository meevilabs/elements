import React, { Component } from 'react';
import DefaultSheet from 'react-native-actionsheet';

type Props = {
  handlePress(index: number): void;
  options: string[];
  title?: string;
  cancelIndex?: number;
  destructiveIndex?: number;
};

class ActionSheet extends Component<Props> {
  sheetRef: React.RefObject<DefaultSheet> = React.createRef();

  openSheet = (): void => {
    this.sheetRef?.current?.show();
  };

  render(): JSX.Element {
    const {
      options,
      handlePress,
      title = '',
      cancelIndex = -1,
      destructiveIndex = -1,
    } = this.props;
    return (
      <DefaultSheet
        ref={this.sheetRef}
        title={title}
        options={options}
        cancelButtonIndex={cancelIndex}
        destructiveButtonIndex={destructiveIndex}
        onPress={handlePress}
      />
    );
  }
}

export default ActionSheet;
