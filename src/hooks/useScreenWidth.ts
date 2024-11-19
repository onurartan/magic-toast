import { print } from "../utils/dev/print";
import React from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = React.useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 605
  );

  print(screenWidth)

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenWidth };
};
