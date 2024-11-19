import { Round } from "@/types";
import React from "react";
import { rounded } from "./rounded";

// Toast Style Props
export const toastStyle = (
  round: Round,
  style?: React.CSSProperties,
  maxWidth?: string | number
) => {
  return {
    borderRadius: rounded(round),
    maxWidth: maxWidth,
    ...style,
  };
};

export const isValidColor = (color: string) => CSS.supports("color", color);
