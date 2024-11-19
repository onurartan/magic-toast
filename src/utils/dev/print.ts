interface PrintProps {
  type?: "development" | "production";
  logLevel?: "log" | "warn" | "error" | "info";
  options?: {
    showTimestamp?: boolean;
    showType?: boolean;
    color?: "default" | "blue" | "green" | "red" | "yellow";
  };
}

const createLogger = (
  message: any,
  {
    type = "development",
    logLevel = "log",
    options = {
      showTimestamp: false,
      showType: false,
      color: "yellow",
    },
  }: PrintProps
) => {
  if (process.env.NODE_ENV === type) {
    const { showTimestamp, showType, color } = options;

    let printMessage = message;
    const styles: string[] = [];

    switch (color) {
      case "blue":
        styles.push("color: blue");
        break;
      case "green":
        styles.push("color: green");
        break;
      case "red":
        styles.push("color: red");
        break;
      case "yellow":
        styles.push("color: yellow");
        break;
      default:
        styles.push("color: inherit");
    }


    if (showTimestamp) {
      const timestamp = new Date().toLocaleTimeString();
      printMessage = `[${timestamp}] ${printMessage}`;
    }

    if (showType) {
      printMessage = `[${type.toUpperCase()}] ${printMessage}`;
    }

    switch (logLevel) {
      case "warn":
        console.warn(`%c${printMessage}`, styles.join(";"));
        break;
      case "error":
        console.error(`%c${printMessage}`, styles.join(";"));
        break;
      case "info":
        console.info(`%c${printMessage}`, styles.join(";"));
        break;
      default:
        console.log(`%c${printMessage}`, styles.join(";"));
    }
  }
};

export const print = (
  message: any,
  { type = "development", logLevel = "log", ...options }: PrintProps = {}
) => {
  createLogger(message, { type, logLevel, ...options });
};

print.log = (
  message: any,
  options: PrintProps = { type: "development", logLevel: "log" }
) => {
  createLogger(message, options);
};

print.warn = (
  message: any,
  options: PrintProps = { type: "development", logLevel: "warn" }
) => {
  createLogger(message, options);
};

print.error = (
  message: any,
  options: PrintProps = { type: "development", logLevel: "error" }
) => {
  createLogger(message, options);
};

print.info = (
  message: any,
  options: PrintProps = { type: "development", logLevel: "info" }
) => {
  createLogger(message, options);
};
