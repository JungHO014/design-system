import { type ComponentProps } from "react";
import { useFormField } from "./FormField";
import styled from "styled-components";

export type FormErrorMessageProps = ComponentProps<"p">;

export const FormErrorMessage = (props: FormErrorMessageProps) => {
  const { children, ...restProps } = props;

  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <div id={formMessageId}>
      <ErrorMessage {...restProps}>{body}</ErrorMessage>
    </div>
  );
};

export const ErrorMessage = styled.p`
  color: #f64c4c;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
