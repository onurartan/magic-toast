import { ToastType } from "@/types";
import type { MagicItem } from "@trymagic/magic-input";

export const Magic = (type: ToastType | "default" = "success") => {
  const spanColor =
    type == "success"
      ? "toast_theme-text-green-500"
      : type == "error"
      ? "toast_theme-text-red-500"
      : type == "info"
      ? "toast_theme-text-blue-500"
      : "toast_theme-text-purple-500";

  const magic: MagicItem[] = [
    {
      custom: [
        {
          functionName: "theBlock",
          regex: /\[([^\]]+)\]/g,
          fn: (context) => {
            if (context.regexMatched) {
              const parameters = context.value.match(/\[([^\]]+)\]/g);
              const formattedParameters = parameters!
                .map((param) =>
                  param
                    .slice(1, -1)
                    .split(",")
                    .map((p) => p.trim())
                )
                .flat();
  
              return `<span class="${spanColor}">${formattedParameters[0]}</span>`;
            }
            return "regex_not_matched";
          },
          type: "dynamic",
          parameters: true,
          dynamicFunc: true,
        },
      ]
    },
  ];
  return magic;
};
