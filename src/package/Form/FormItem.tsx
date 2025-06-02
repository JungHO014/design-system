import { type ComponentProps, useId } from "react";
import { FormItemContext } from "./FormField";
import styled from "styled-components";

export type FormItemProps = ComponentProps<"div">;

export const FormItem = (props: FormItemProps) => {
  const { children, className, ...restProps } = props;

  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <FormItemContainer {...restProps} className={className}>
        {children}
      </FormItemContainer>
    </FormItemContext.Provider>
  );
};

const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
