import React from "react";

interface CoolButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export default function CoolButton({
  onClick,
  children,
  className,
}: CoolButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded p-3 transition duration-300 ease-in-out" +
        (className ? " " + className : "")
      }
    >
      {children}
    </button>
  );
}
