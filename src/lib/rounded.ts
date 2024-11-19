import { Round } from "../types";

export const rounded = (value: Round) => {
  switch (value) {
    case "none":
      return "0px";
    case "sm":
      return "0.125rem"; /* 2px */
    case "md":
      return "0.375rem"; /* 6px */
    case "lg":
      return "0.5rem"; /* 8px  */
    case "xl":
      return "0.75rem  "; /* 12px */
    case "2xl":
      return "1rem"; /* 16px */
    case "3xl":
      return "1.5rem  "; /* 24px */
    case "full":
      return "9999px";
  }
};
