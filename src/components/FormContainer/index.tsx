import React, { FC } from 'react';
import { Formik as FormBehavior } from 'formik';
import { Wrapper } from './styles';

interface Props {
  style?: any;
  onSubmit(values: any, actions: any): any;
  validationSchema?: any;
  initialValues: object;
  validateOnChange?: boolean;
  enableReinitialize?: boolean;
  avoidKeyboard?: boolean;
}

const FormContainer: FC<Props> = ({
  initialValues,
  onSubmit,
  children,
  validationSchema = undefined,
  validateOnChange = false,
  enableReinitialize = false,
  avoidKeyboard = true,
  style = [{}],
}) => (
  <Wrapper enabled={avoidKeyboard} style={style}>
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
