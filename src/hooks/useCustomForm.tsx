import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { delay } from "@/utils/delay";

type FormData = {
  username: string;
  password: string;
  rememberMe: boolean;
};

type UseCustomFormProps = {
  schema?: any;
  defaultValues?: FormData;
};

const useCustomForm = ({ schema, defaultValues }: UseCustomFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      setIsFormSubmitting(true);
      await delay(3000);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFormSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isFormSubmitting,
  };
};

export default useCustomForm;
