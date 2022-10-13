import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  underline?: boolean;
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild, underline = false }: TextProps) {

    const Comp = asChild ? Slot : 'span';


  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      }, underline?"underline":"")}
    >
      {children}
    </Comp>
  );
}
