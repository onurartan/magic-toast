import { ToastType } from "@/types";
import { MagicItem } from "@trymagic/magic-input/types/types/index";

export const Magic = (type: ToastType | "default" = "success") => {
  const spanColor =
    type == "success"
      ? "text-green-500"
      : type == "error"
      ? "text-red-500"
      : type == "info"
      ? "text-blue-500"
      : "text-purple-500";

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
      ],
    },
  ];
  return magic;
};
