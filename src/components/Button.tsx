import React from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface InteractiveHoverButtonProps {
  text?: string;
  className?: string;
}

export function InteractiveHoverButton({
  text = "MY Resume",
  className,
}: InteractiveHoverButtonProps = {}) {
  const { theme } = useTheme(); // Use theme from context

  return (
    <div
      className={`group relative mt-6 w-40 cursor-pointer overflow-hidden rounded-full border bg-none p-2 text-center font-semibold ${
        theme === "dark" ? "text-gray-100 border-gray-600" : "text-black border-black"
      } ${className}`}
    >
      <span
        className={`inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 ${
          theme === "dark" ? "group-hover:text-black" : "group-hover:text-white"
        }`}
      >
        {text}
      </span>
      <div
        className={`absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 ${
          theme === "dark" ? "text-black" : "text-white"
        }`}
      >
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div
        className={`absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] ${
          theme === "dark" ? "bg-white" : "bg-black"
        }`}
      ></div>
    </div>
  );
}
