import { defineConfig } from "tsup";

export default defineConfig({
  minify: true,
  target: "esnext",
  external: [
    "react",
    "react-dom",
  

    "./test/",
  
    // src altındaki tüm test dosyaları
    "./src/test/**/*.test.tsx",
  
    // veya direkt tüm test dosyaları
    "**/*.test.tsx",
  
    // storybook dosyaları da dışarı
    "**/*.stories.tsx",
  
    // CSS dışarı
    "./src/main.css"
  ],
  sourcemap: true,
  dts: true,
  format: ["esm", "cjs"],
  injectStyle: true,
});
