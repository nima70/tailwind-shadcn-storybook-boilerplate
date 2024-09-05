import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./button"; // Assuming your button component is located here

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button>Default Button</Button>,
};
