import React, { FC } from 'react';
import { Formik as FormBehavior } from 'formik';
import { Wrapper } from './styles';

type Props = {
  onSubmit(values: any, actions: any): any;
  validationSchema?: any;
  initialValues: Record<string, any>;
  validateOnChange?: boolean;
  enableReinitialize?: boolean;
  avoidKeyboard?: boolean;
};

const FormContainer: FC<Props> = ({
  initialValues,
  onSubmit,
  children,
  validationSchema = undefined,
  validateOnChange = false,
  enableReinitialize = false,
  avoidKeyboard = true,
  ...rest
}) => (
  <Wrapper enabled={avoidKeyboard} {...rest}>
    <FormBehavior
      enableReinitialize={enableReinitialize}
      validateOnChange={validateOnChange}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {children}
    </FormBehavior>
  </Wrapper>
);

export default FormContainer;
