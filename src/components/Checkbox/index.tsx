import { ComponentProps, forwardRef, ForwardRefRenderFunction } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const checkboxStyles = cva([
  "peer",
  "h-4",
  "w-4",
  "mr-2",
  "shrink-0",
  "rounded-sm",
  "border",
  "border-primary",
  "ring-offset-background",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-ring",
  "focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
  "data-[state=checked]:bg-primary",
  "data-[state=checked]:text-primary-foreground",
]);

interface CheckboxProps
  extends ComponentProps<"input">,
    VariantProps<typeof checkboxStyles> {}

const InternalCheckbox: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ className, children, ...props }, ref) => {
  return (
    <label className="flex items-center hover:cursor-pointer">
      <input
        type="checkbox"
        ref={ref}
        className={cn(checkboxStyles({ className }))}
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
