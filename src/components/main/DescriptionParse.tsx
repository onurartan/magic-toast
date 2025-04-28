import { ToastType } from "@/types";
import { Magic } from "../../lib/magic";
import { useMagic } from "@trymagic/magic-input";
import React from "react";

const DescriptionParse = ({
  description,
  type,
}: {
  description: string;
  type: ToastType | "default";
}) => {
  const executeMagic = useMagic(Magic(type), description || "");
  const emagic = executeMagic;

  const {
    value,
    result,
    regexMatched,
    functionName,
    parameters,
    additionalInfo,
  } = emagic;
  return (
    <>
      {regexMatched ? (
        <p
          className="toast_theme-text-[#848484] toast_theme-text-[14px] toast_theme-w-full"
          dangerouslySetInnerHTML={{ __html: result! }}
        />
      ) : (
        <p className="toast_theme-text-[#848484] toast_theme-text-[14px] toast_theme-w-full">{description}</p>
      )}
    </>
  );
};

export default DescriptionParse;
