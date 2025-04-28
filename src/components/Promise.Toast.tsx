import React from "react";

import { toast } from "magic-toast";
// import { motion } from "framer-motion";

// import DescriptionParse from "./main/DescriptionParse";
// import FadeLoader from "react-spinners/FadeLoader";
// import CloseButton from "./main/CloseButton";

import {
  CLOSE_BUTTON_ACTIVE,
  CLOSE_BUTTON_BG_COLOR,
  CLOSE_BUTTON_BG_HOVER_COLOR,
  CLOSE_BUTTON_ICON_COLOR,
  DEFAULT_DURATION_TIME,
  // DEFAULT_POSITION,
  DEFAULT_ROUND,
} from "../config";

import { Icons } from "../constants/icons";
import createToast from "../utils/createToast";

/* Types */
import { PromiseNotificationOptions } from "../types";

const PromiseToast = async (
  promise: () => Promise<unknown | any>,
  {
    loading,
    success,
    error,
    duration = DEFAULT_DURATION_TIME,
    round = DEFAULT_ROUND,
    position,
    theme,
    closeButton = CLOSE_BUTTON_ACTIVE,
    closeButtonStyle = {
      bgColor: CLOSE_BUTTON_BG_COLOR,
      hoverBgColor: CLOSE_BUTTON_BG_HOVER_COLOR,
      iconColor: CLOSE_BUTTON_ICON_COLOR,
    },
    loadingProps,
    successProps,
    errorProps,
  }: PromiseNotificationOptions
) => {
  // const content = {
  //   loading: {
  //     message: loading,
  //     icon: <Icons.Loading />,
  //   },
  //   success: {
  //     message: typeof success === 'function' ? success : success as string,
  //     icon: <Icons.Success />,
  //   },
  //   error: {
  //     message: error,
  //     icon: <Icons.Error />,
  //   },
  // };

  // Loading notification
  const id = createToast(
    loading,
    {
      icon: loadingProps?.icon,
      style: loadingProps?.style,
      description: loadingProps?.description,
      duration,
      round,
      theme,
      position,
      closeButton,
      closeButtonStyle,
    },
    "promise"
  );

  // Promise handling
  return promise()
    .then((data) => {
      toast.dismiss(id); // close loading toast

      const successMessage =
        typeof success === "function" ? success(data) : (success as string);

      createToast(
        successMessage,
        {
          icon: successProps?.icon,
          style: successProps?.style,
          description: successProps?.description,
          duration,
          round,
          theme,
          closeButton,
          position,
          closeButtonStyle,
        },
        "success"
      );

      return data;
    })
    .catch((err) => {
      toast.dismiss(id);

      createToast(
        error as string,
        {
          icon: errorProps?.icon,
          style: errorProps?.style,
          description: errorProps?.description,
          duration,
          round,
          theme,
          closeButton,
          position,
          closeButtonStyle,
        },
        "error"
      );

      throw err;
    });
};

export default PromiseToast;
