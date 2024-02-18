import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => void;
  variant?: "danger" | "primary";
  isLoading?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  onClick,
  variant = "primary",
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex shadow-lg
      ${variant === "danger" ? "bg-red-500 hover:bg-red-700" : ""}
      ${rest.className}
      ${disabled && "opacity-50 cursor-not-allowed"}
      `}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {label}
    </button>
  );
};

export default Button;
