import { actionProps } from "@/types";
import React from "react";

const ActionButton = ({ action }: { action: actionProps }) => {
  return action.type == "button" ? (
    <button
      onClick={action.onClick}
      className={` text-blue-500 active:scale-95 text-nowrap ${
        action.className ? action.className : "hover:text-blue-700"
      }`}
      style={action.style}
    >
      {action.text}
    </button>
  ) : (
    <a
      href={action.href || "#"}
      onClick={action.onClick}
      className={` text-blue-500 active:scale-95 text-nowrap ${
        action.className ? action.className : "hover:text-blue-700"
      }`}
      style={action.style}
    >
      {action.text}
    </a>
  );
};

export default ActionButton;
