import { z } from "zod";

import { Box, Stack, Button, Input, Text, Checkbox } from "@/components";
import useCustomForm from "@/hooks/useCustomForm";

const schema = z.object({
  username: z.string().min(5, { message: "At least 5 characters" }),
  password: z.string().min(5, { message: "At least 5 characters" }),
  rememberMe: z.boolean(),
});

function LoginForm() {
  const { register, handleSubmit, errors, isFormSubmitting } = useCustomForm({
    schema,
    defaultValues: { username: "", password: "", rememberMe: false },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box className="px-8 py-12 border boder-gray-300 rounded-xl">
        <Stack>
          <Text
            as="h2"
            weight="bold"
            align="center"
            size="3xl"
            className="mb-2"
          >
            Login
          </Text>
          <Text
            as="span"
            emphasis="low"
            size="sm"
            align="center"
            className="mb-8"
          >
            Please enter your credentials to login
          </Text>
          <Input
            {...register("username")}
            type="text"
            id="username"
            placeholder="Username"
            label="Username"
            className="mb-4"
            errors={
              errors.username
                ? ({ username: [errors.username.message] } as Record<
                    string,
                    string[]
                  >)
                : {}
            }
          />
          <Input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Password"
            label="Password"
            className="mb-4"
            aria-invalid={errors.password ? "true" : "false"}
            errors={
              errors.password
                ? ({ password: [errors.password.message] } as Record<
                    string,
                    string[]
                  >)
                : {}
            }
          />
          <Checkbox {...register("rememberMe")}>Remember me</Checkbox>
          <Button
            type="submit"
            variant="solid"
            className="mb-10"
            loading={isFormSubmitting}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </form>
  );
}

export default LoginForm;
