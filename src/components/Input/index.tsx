import { ComponentProps, forwardRef } from "react";

import { cva, VariantProps } from "class-variance-authority";
import { XCircle } from "lucide-react";

import { Text } from "@/components";
import { cn } from "@/utils";

const inputStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500 ",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
]);

interface InputProps
  extends ComponentProps<"input">,
    VariantProps<typeof inputStyles> {
  id: string;
  label?: string;
  type?: string;
  errors?: Record<string, string[]>;
  defaultValue?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, id, label, type, errors, defaultValue = "", ...props },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <Text
              as="label"
              htmlFor={id}
              size="sm"
              weight="medium"
              className="mb-1.5"
            >
              {label}
            </Text>
          ) : null}
          <input
            ref={ref}
            defaultValue={defaultValue}
            type={type}
            autoComplete="off"
            className={cn(inputStyles({ className }))}
            {...props}
          />
          <div
            id={`${id}-error`}
            aria-live="polite"
            className="mt-2 text-xs text-rose-500"
          >
            {errors?.[id]?.map((error: string) => (
              <div
                key={error}
                className="flex items-center font-medium p-2 border boder-rose-500 bg-rose-500/10 rounded-sm"
              >
                <XCircle className="h-4 w-4 mr-2" />
                {error}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
