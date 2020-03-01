import React, { FC } from 'react';
import { Wrapper, Button, Separator, Icon } from './styles';

interface Props {
  handleDecrement(): void;
  handleIncrement(): void;
  decrementDisabled?: boolean;
  incrementDisabled?: boolean;
}

const Stepper: FC<Props> = ({
  handleDecrement,
  handleIncrement,
  decrementDisabled = false,
  incrementDisabled = false,
}) => (
  <Wrapper>
    <Button disabled={decrementDisabled} onPress={handleDecrement}>
      <Icon name="minus" isDisabled={decrementDisabled} />
    </Button>
    <Separator />
    <Button disabled={incrementDisabled} onPress={handleIncrement}>
      <Icon name="plus" isDisabled={incrementDisabled} />
    </Button>
  </Wrapper>
);

export default Stepper;
