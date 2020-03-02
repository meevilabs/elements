import { FormikErrors } from 'formik';

export type FormError =
  | string
  | string[]
  | FormikErrors<any>
  | FormikErrors<any>[];
