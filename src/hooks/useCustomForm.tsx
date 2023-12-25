import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const useCustomForm = (schema: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return {
    errors,
    register,
    handleSubmit,
  };
};

export default useCustomForm;
