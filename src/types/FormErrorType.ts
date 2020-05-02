import { FormikErrors } from 'formik';

export type FormErrorType =
  | string
  | string[]
  | FormikErrors<any>
  | FormikErrors<any>[];
