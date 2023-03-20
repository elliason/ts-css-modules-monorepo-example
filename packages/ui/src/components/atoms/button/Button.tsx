import * as React from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  HTMLAttributes?: React.HTMLAttributes<HTMLButtonElement>;
  children?: React.ReactNode;
  backgroundColor?: string;
}

export const Button = ({
  className,
  onClick,
  HTMLAttributes,
  backgroundColor,
  children,
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.somethingThatsNotCorrect, className)}
      onClick={onClick}
      style={{ backgroundColor }}
      {...HTMLAttributes}
    >
      {children}
    </button>
  );
};
