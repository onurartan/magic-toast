import React from "react";

import { NotificationProps, ToastType } from "../../types";
import { toast } from "magic-toast";
import ToastLink from "./ToastLink";

export interface LinkToastOptionProps extends NotificationProps {
  href: string;
  toastType?: ToastType | "default";
}

const linkToast = (
  message: string | React.ReactNode,
  options: LinkToastOptionProps
): number | string => {
  const { duration, position } = options;

  const toastId = toast.custom(
    (t) => (
      <ToastLink
        message={message}
        {...options}
        toastType={
          options?.toastType!! === "promise" ? "loading" : options?.toastType!!
        }
        t={t}
      />
    ),
    {
      position,
      duration: options?.toastType !== "promise" ? duration : Infinity,
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

export default linkToast;
