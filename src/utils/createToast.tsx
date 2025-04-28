import React from "react";

import Toast from "../components/beta/Toast";
import { NotificationProps, ToastType } from "../types";
import { toast } from "magic-toast";

const createToast = (
  message: string | React.ReactNode,
  options: NotificationProps,
  toastType: ToastType | "default" = "default",
  theme?: "dark" | "light"
): number | string => {
  const { duration, position } = options;

  const toastId = toast.custom(
    (t) => <Toast theme={theme} toastType={toastType === "promise" ? "loading" : toastType} message={message} {...options} t={t} />,
    {
      position,
      duration: toastType !== "promise"  ? duration : Infinity,
      // unstyled: true,
      style: {
        ...options.style,
        background: "transparent",
        border: "none",
        boxShadow: "none",
        textShadow: "none",
      },
    }
  );

  return toastId;
};

export default createToast;
