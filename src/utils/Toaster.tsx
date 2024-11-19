import React from "react";
import { Toaster as MagicToaster, ThemeProvider, ThemeContext } from "magic-toast"; 
import "../global.css";
import "../main.css";

type ToasterProps = React.ComponentProps<typeof MagicToaster> & {
  position?: string;
  theme?: string;
};


const Toaster = ({
  theme = "system",
  position = "bottom-center",
  ...props
}: ToasterProps) => {

  return (
  <ThemedToaster  theme={theme} position={position} {...props} />
  );
};

const ThemedToaster  = ({
  theme = "system",
  position = "bottom-center",
  ...props
}: ToasterProps) => {
  const themeContext = React.useContext(ThemeContext);

  if (themeContext) {
    return <InToaster theme={theme} position={position} {...props} />;
  }

  return (
    <ThemeProvider>
      <InToaster theme={theme} position={position} {...props} />
    </ThemeProvider>
  );
};

const InToaster = ({
  theme = "system",
  position = "bottom-center",
  ...props
}: ToasterProps) => {
  return <MagicToaster theme={theme} position={position} {...props} />;
};

export { Toaster };
