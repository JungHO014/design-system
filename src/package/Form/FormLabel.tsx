import { type ComponentProps } from "react";
import { useFormField } from "./FormField";

export type FormLabelProps = ComponentProps<"label"> & {
  required?: boolean;
};

export const FormLabel = (props: FormLabelProps) => {
  const { children, className, required, ...restProps } = props;

  const { formItemId } = useFormField();
  return (
    <label {...restProps} htmlFor={formItemId} className={className}>
      {children}
      {required && <span>*</span>}
    </label>
  );
};
