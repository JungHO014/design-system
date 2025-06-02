import { type ReactNode } from "react";

interface FormModalProps {
  children: ReactNode;
}

const FormSelect = ({ children }: FormModalProps) => {
  return <div>{children}</div>;
};

export default FormSelect;
