import { ComponentProps, forwardRef, ForwardRefRenderFunction } from "react";
import { cn } from "@/utils";

interface CheckboxProps extends ComponentProps<"input"> {
  allChecked?: boolean;
}

const InternalCheckbox: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ allChecked, className, children, ...props }, ref) => {
  return (
    <label>
      <input
        type="checkbox"
        ref={ref}
        className={cn("mr-2", className)}
        {...props}
      />
      {children && <span>{children}</span>}
    </label>
  );
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  InternalCheckbox
);

Checkbox.displayName = "Checkbox";
