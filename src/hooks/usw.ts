import { print } from "../utils/dev/print";

let screenWidth = window.innerWidth;

export const usw = () => {
  function updateScreenWidth() {
    screenWidth = window.innerWidth;
  //  print.info("Screen width updated:" + screenWidth, {
  //   options: {
  //       showTimestamp: true,
  //       showType: true
  //   }
  //  });
  }

  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateScreenWidth);
    window.addEventListener("resize", updateScreenWidth);
  }

  updateScreenWidth();
  return screenWidth;
};
