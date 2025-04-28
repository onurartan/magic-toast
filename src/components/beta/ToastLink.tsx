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
import { Theme, ToastProps } from "../../types";
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
      className="toast_theme-w-full toast_theme-flex toast_theme-items-center toast_theme-justify-center toast_theme-toastLink hover:toast_theme-scale-110 "
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{scale: 1}}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.div
        className={`toast_theme-flex toast_theme-relative toast_theme-items-center ${
          appliedTheme === "dark" ? "toast_theme-bg-[#282828]" : "toast_theme-bg-white"
        } toast_theme-px-3 toast_theme-gap-2 toast_theme-py-2.5 toast_theme-w-full toast_theme-max-w-[${width}] toast_theme-border ${
          appliedTheme === "dark" ? "toast_theme-border-[#3f3f3f]" : "toast_theme-border-[#e2e2e2]"
        } shadow-lg ${className}`}
        style={toastStyle(round, style, width)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {icon ? (
          <>
            {typeof icon === "string" ? (
              <span className="toast_theme-select-none toast_theme-pointer-events-none">{icon}</span>
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

        <div className="toast_theme-flex toast_theme-items-start toast_theme-w-full">
          <a  href={href} className="toast_theme-flex toast_theme-flex-col toast_theme-items-start toast_theme-w-full">
            {typeof message === "string" ? (
              <h1
                className={`toast_theme-font-medium ${
                  appliedTheme === "dark" ? "toast_theme-text-white" : "toast_theme-text-black"
                } toast_theme-text-[15px] toast_theme-w-full `}
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
                ? "toast_theme-flex toast_theme-flex-col toast_theme-items-end toast_theme-justify-end toast_theme-gap-2"
                : "toast_theme-flex toast_theme-items-center toast_theme-justify-center toast_theme-gap-2"
            }
          >
            {action && action.position !== "bottom" && (
              <ActionButton action={action} />
            )}
            {closeButton && (
              <CloseButtonBeta
                t={t}
                closeButtonStyle={closeButtonProps(
                  appliedTheme as Theme | "theme_provider_not_used",
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
