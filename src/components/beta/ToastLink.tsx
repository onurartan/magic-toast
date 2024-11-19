import React from "react";
import { useTheme } from "magic-toast";
import { motion } from "framer-motion";

import DescriptionParse from "../main/DescriptionParse";
import ActionButton from "../main/ActionButton";
import CloseButtonBeta from "./CloseButtonBeta";

import {
  CLOSE_BUTTON_ACTIVE,
  CLOSE_BUTTON_BG_COLOR,
  CLOSE_BUTTON_BG_COLOR_DARK,
  CLOSE_BUTTON_BG_HOVER_COLOR,
  CLOSE_BUTTON_ICON_COLOR,
  CLOSE_BUTTON_ICON_COLOR_DARK,
  DEFAULT_DURATION_TIME,
  DEFAULT_ROUND,
  DEFAULT_WIDTH,
} from "../../config";

import { toastStyle } from "../../lib/style";

/* Types */
import { ToastProps } from "../../types";
import { closeButtonProps } from "../../lib/closeButton";
import { print } from "../../utils/dev/print";
import { Icons } from "../../constants/icons";


interface LinkToastProps extends ToastProps {
  href: string
}

const ToastLink: React.FC<LinkToastProps> = ({
  message,
  toastType,
  href,
  t,
  icon,
  className,
  width = DEFAULT_WIDTH,
  description,
  round = DEFAULT_ROUND,
  closeButton = CLOSE_BUTTON_ACTIVE,
  closeButtonStyle = {
    bgColor: CLOSE_BUTTON_BG_COLOR,
    hoverBgColor: CLOSE_BUTTON_BG_HOVER_COLOR,
    iconColor: CLOSE_BUTTON_ICON_COLOR,
  },
  style,
  action,
  theme
}) => {
  const { theme: providerTheme } = useTheme();

  // Eğer theme props'ı varsa onu, yoksa providerTheme kullan
  const appliedTheme = theme || providerTheme;

  print(theme ? "Theme " + theme : "providerTheme " + providerTheme);

  return (
    <motion.div
      className="w-full flex items-center justify-center toastLink hover:scale-110 "
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{scale: 1}}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.div
        className={`flex relative items-center ${
          appliedTheme === "dark" ? "bg-[#282828]" : "bg-white"
        } px-3 gap-2 py-2.5 w-full max-w-[${width}] border ${
          appliedTheme === "dark" ? "border-[#3f3f3f]" : "border-[#e2e2e2]"
        } shadow-lg ${className}`}
        style={toastStyle(round, style, width)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {icon ? (
          <>
            {typeof icon === "string" ? (
              <span className="select-none pointer-events-none">{icon}</span>
            ) : (
              icon
            )}
          </>
        ) : toastType === "success" ? (
          <Icons.Success />
        ) : toastType === "error" ? (
          <Icons.Error />
        ) : toastType === "loading" ? (
          <Icons.Loading />
        ) : toastType === "info" ? (
          <Icons.Info />
        ) : (
          ""
        )}

        <div className="flex items-start w-full">
          <a  href={href} className="flex flex-col items-start w-full">
            {typeof message === "string" ? (
              <h1
                className={`font-medium ${
                  appliedTheme === "dark" ? "text-white" : "text-black"
                } text-[15px] w-full `}
              >
                {message}
              </h1>
            ) : (
              message
            )}

            <DescriptionParse description={description!} type={toastType} />
          </a>
          <div
            className={
              action?.position === "bottom"
                ? "flex flex-col items-end justify-end gap-2"
                : "flex items-center justify-center gap-2"
            }
          >
            {action && action.position !== "bottom" && (
              <ActionButton action={action} />
            )}
            {closeButton && (
              <CloseButtonBeta
                t={t}
                closeButtonStyle={closeButtonProps(
                  appliedTheme!,
                  closeButtonStyle
                )}
              />
            )}
            {action && action.position === "bottom" && (
              <ActionButton action={action} />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ToastLink;
