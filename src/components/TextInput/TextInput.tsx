import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({children}: TextInputRootProps) {
  return(
    <div className="flex items-center gap-3 h-12 py-3 px-4 bg-gray-800 w-full rounded focus-within:ring-2 ring-cyan-300">
        {children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({children}: TextInputIconProps) {
  return(
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps) {
  return (
      <input
        className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 placeholder:text-xs outline-none"
        {...props}
      />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}