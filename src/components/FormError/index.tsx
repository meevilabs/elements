import React, { FC, ReactNode } from 'react';
import { FormErrorType } from '../../types';
import { ErrorText } from './styles';

interface Props {
  children: ReactNode;
  error?: FormErrorType;
}

const FormError: FC<Props> = ({ error = '', children }) => (
  <>
    {children}
    <ErrorText>{error}</ErrorText>
  </>
);

export default FormError;
