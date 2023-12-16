import { Box, type BoxProps } from "@/components/Layout";
import { cn } from "@/utils";

export default {};
type StackProps = BoxProps;

export const Stack = ({ className, ...props }: StackProps) => {
  return (
    <Box className={cn("flex flex-col items-start", className)} {...props} />
  );
};
