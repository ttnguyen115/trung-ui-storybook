import { Box, Stack, Button, Input, Text, Checkbox } from "@/components";

function LoginForm() {
  return (
    <Box className="px-8 py-12 border boder-gray-300 rounded-xl">
      <Stack>
        <Text as="h2" weight="bold" align="center" size="3xl" className="mb-2">
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
        <Checkbox>label</Checkbox>
        <Button type="submit" variant="solid" className="mb-10">
          Login
        </Button>
      </Stack>
    </Box>
  );
}

export default LoginForm;
