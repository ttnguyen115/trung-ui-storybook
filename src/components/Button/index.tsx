import { ComponentProps } from "react";

type ButtonPropps = ComponentProps<"button">;

const Button = ({ ...props }: ButtonPropps) => {
  return <button className="text-blue-500" {...props} />;
};

export default Button;
