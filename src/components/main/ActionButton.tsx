import { actionProps } from "@/types";
import React from "react";

const ActionButton = ({ action }: { action: actionProps }) => {
  return action.type == "button" ? (
    <button
      onClick={action.onClick}
      className={` toast_theme-text-blue-500 active:toast_theme-scale-95 toast_theme-text-nowrap ${
        action.className ? action.className : "hover:toast_theme-text-blue-700"
      }`}
      style={action.style}
    >
      {action.text}
    </button>
  ) : (
    <a
      href={action.href || "#"}
      onClick={action.onClick}
      className={` toast_theme-text-blue-500 active:toast_theme-scale-95 toast_theme-text-nowrap ${
        action.className ? action.className : "hover:toast_theme-text-blue-700"
      }`}
      style={action.style}
    >
      {action.text}
    </a>
  );
};

export default ActionButton;
