import {
  CLOSE_BUTTON_BG_COLOR,
  CLOSE_BUTTON_BG_COLOR_DARK,
  CLOSE_BUTTON_BG_HOVER_COLOR,
  CLOSE_BUTTON_ICON_COLOR,
  CLOSE_BUTTON_ICON_COLOR_DARK,
} from "../config";
import { closeButtonStyleProps, Theme } from "../types";

const getCloseButtonStyles = (theme: Theme, style: closeButtonStyleProps) => {
  const defaultBgColor =
    theme === "dark" ? CLOSE_BUTTON_BG_COLOR_DARK : CLOSE_BUTTON_BG_COLOR;
  const defaultIconColor =
    theme === "dark" ? CLOSE_BUTTON_ICON_COLOR_DARK : CLOSE_BUTTON_ICON_COLOR;

  return {
    bgColor: style.bgColor !== defaultBgColor ? defaultBgColor : style.bgColor,
    iconColor:
      style.iconColor !== defaultIconColor ? defaultIconColor : style.iconColor,
    hoverBgColor: CLOSE_BUTTON_BG_HOVER_COLOR,
  };
};

export const closeButtonProps = (
  theme: "theme_provider_not_used" | Theme,
  style: closeButtonStyleProps
) => {
  if (theme === "theme_provider_not_used") {
    return {
      bgColor: CLOSE_BUTTON_BG_COLOR,
      hoverBgColor: CLOSE_BUTTON_BG_HOVER_COLOR,
      iconColor: CLOSE_BUTTON_ICON_COLOR,
    };
  }

  return getCloseButtonStyles(theme, style);
};
