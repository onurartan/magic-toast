import { closeButtonStyleProps } from "@/types";
import React from "react";
import { toast } from "magic-toast";

const CloseButtonBeta = ({
  t,
  closeButtonStyle,
}: {
  t: string | number;
  closeButtonStyle: closeButtonStyleProps;
}) => {
  return (
    <button
      onClick={() => toast.dismiss(t)}
      className={`bg-[${closeButtonStyle.bgColor}] active:scale-95 w-6 h-6 rounded-lg flex items-center justify-center hover:bg-[${closeButtonStyle.hoverBgColor}] transition-all`}
      style={{
        backgroundColor: closeButtonStyle.bgColor,
      }}
    >
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.347904 10.4277C0.76392 10.8379 1.48462 10.8203 1.86548 10.4395L5.00025 7.30469L8.12329 10.4336C8.52759 10.8379 9.22486 10.8379 9.63501 10.4219C10.051 10.0059 10.0569 9.3086 9.65259 8.9043L6.52954 5.77539L9.65259 2.65235C10.0569 2.24805 10.051 1.55078 9.63501 1.14063C9.219 0.724611 8.52759 0.718752 8.12329 1.12305L5.00025 4.2461L1.86548 1.11719C1.48462 0.73633 0.76392 0.718752 0.347904 1.13477C-0.0622518 1.55078 -0.0505331 2.26563 0.336186 2.64649L3.47095 5.77539L0.336186 8.91016C-0.0505331 9.29102 -0.0681112 10.0117 0.347904 10.4277Z"
          fill={closeButtonStyle.iconColor}
          fillOpacity="0.8"
        />
      </svg>
    </button>
  );
};

export default CloseButtonBeta;
