import { FormikErrors, FormikTouched } from 'formik';

export declare type props = {
  field: {};
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  errors?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  forgetPassword?: boolean;
  inputRef?: any;
};
