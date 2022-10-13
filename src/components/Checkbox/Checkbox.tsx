import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { Text } from "../Text/Text";

export interface CheckboxProps {
  text: string;
}

export function Checkbox({ text }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
        <CheckboxPrimitive.CheckboxIndicator asChild>
          <Check weight="bold" className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimitive.CheckboxIndicator>
      </CheckboxPrimitive.Root>
      <Text size="sm">{text}</Text>
    </div>
  );
}
