import { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { FormikErrors } from 'formik';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  inverted?: boolean;
  children: string | React.ReactNode;
}

export interface FormikSchema {
  "import-name"?: string;
  "document"?: string;
  "tolerance-window"?: boolean;
  "split-schedule"?: string;
  "client-type"?: string;
  "testing-center-client-1"?: string;
  "testing-center-client-2"?: string;
  "testing-center-client-3"?: string;
  "testing-center-client-4"?: string;
}

export interface IDragAndDropProps {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<FormikSchema>>
}

export interface IRadioGroupProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export interface Option {
  label: string;
  value: string;
}

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  icon?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  width?: string;
  label?: string;
  optionObjects: Option[];
}

                                                                                                                                                                                                                                                                                                                                                                                                      