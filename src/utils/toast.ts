import PromiseToast from "../components/Promise.Toast";
import {
  NotificationProps,
  PromiseNotificationOptions,
  ToastType,
} from "../types";
import { toast as magicToast } from "magic-toast";
import createToast from "./createToast";
import linkToast, { LinkToastOptionProps } from "../components/beta/linkToast";

const toast = (
  message: string | React.ReactNode,
  options: NotificationProps = {}
): number | string => {
  return createToast(message, options, "default");
};

toast.success = (
  message: string | React.ReactNode,
  options: NotificationProps = {}
): number | string => {
  return createToast(message, options, "success");
};

toast.info = (
  message: string | React.ReactNode,
  options: NotificationProps = {}
) => {
  return createToast(message, options, "info");
};

toast.error = (
  message: string | React.ReactNode,
  options: NotificationProps = {}
) => {
  return createToast(message, options, "error");
};

toast.loading = (
  message: string | React.ReactNode,
  options: NotificationProps = {}
) => {
  return createToast(message, options, "loading");
};

toast.promise = (
  promise: () => Promise<unknown | any>,
  options: PromiseNotificationOptions = {
    loading: "Loading...",
    success: "Successfully",
    error: "Error",
  }
) => {
  return PromiseToast(promise, options);
};

toast.link = (
  message: string | React.ReactNode,
  // toastType: ToastType | "default" = "success",
  options: LinkToastOptionProps
): number | string => {
  return linkToast(message, options);
};

toast.dismiss = (id?: number | string) => {
  magicToast.dismiss(id);
};

export default toast;
