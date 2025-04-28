import React from "react";
import {
  Toaster as MagicToaster,
  ThemeProvider,
  ThemeContext,
} from "magic-toast";
import "../global.css";
import "../main.css";

type ToasterProps = React.ComponentProps<typeof MagicToaster> & {
  position?: string;
  /** @deprecated Toaster theme is deprecated, it can be added again in the future, you can continue to use it normally or you can set this with ThemeProvider */
  theme?: "dark" | "light";
};

const Toaster = ({
  // theme,
  position = "bottom-center",
  ...props
}: ToasterProps) => {
  // theme={theme}
  return <ThemedToaster position={position} {...props} />;
};

const ThemedToaster = ({
  // theme,
  position = "bottom-center",
  ...props
}: ToasterProps) => {
  const themeContext = React.useContext(ThemeContext);

  // theme={theme}
  if (themeContext) {
    return <InToaster position={position} {...props} />;
  }

  // defaultTheme={theme} theme={theme}
  return (
    <ThemeProvider>
      <InToaster position={position} {...props} />
    </ThemeProvider>
  );
};

const InToaster = ({
  // theme,
  position = "bottom-center",
  ...props
}: ToasterProps) => {
  return <MagicToaster position={position} {...props} />;
};

export { Toaster };
