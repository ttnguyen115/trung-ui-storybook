import { Box, Stack, Button, Input, Text, Checkbox } from "@/components";
import { MouseEvent } from "react";

function LoginForm() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form>
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
            type="text"
            id="username"
            placeholder="Username"
            label="Username"
            className="mb-4"
          />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            label="Password"
            className="mb-4"
          />
          <Checkbox>Remember me</Checkbox>
          <Button
            type="submit"
            variant="solid"
            className="mb-10"
            onClick={handleClick}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </form>
  );
}

export default LoginForm;
