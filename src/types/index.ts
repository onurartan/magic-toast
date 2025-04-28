import React from "react";

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

export type Round = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";

export type ToastType = "error" | "success" | "info" | "loading" | "promise";

export type Theme = "light" | "dark" | "system";

export type closeButtonStyleProps = {
  bgColor?: string;
  iconColor?: string;
  hoverBgColor?: string;
};

export type actionProps = {
  text: string | React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "anchor";
  position?: "left" | "bottom";
};

export type SubToastProps = {
  icon?: string | React.ReactNode;
  style?: React.CSSProperties;
  description?: string;
};

export interface NotificationProps {
  icon?: string | React.ReactNode;
  description?: string;
  width?: string;
  duration?: number;
  className?: string;
  round?: Round;
  position?: Position;
  closeButton?: boolean;
  closeButtonStyle?: closeButtonStyleProps;
  style?: React.CSSProperties;
  action?: actionProps;
  theme?: "dark" | "light";
}

export interface ToastProps extends NotificationProps {
  message: string | React.ReactNode;
  t: any;
  toastType: ToastType | "default";
}

export interface LoadingProps extends NotificationProps {
  message: string | React.ReactNode;
}

export interface PromiseNotificationOptions {
  loading: string;
  success: string | ((data: any) => string);
  error: string;
  duration?: number;
  round?: Round;
  position?: Position;
  closeButton?: boolean;
  closeButtonStyle?: closeButtonStyleProps;
  loadingProps?: SubToastProps;
  successProps?: SubToastProps;
  errorProps?: SubToastProps;
  theme?: "dark" | "light";
}
