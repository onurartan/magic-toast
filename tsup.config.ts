import { defineConfig } from 'tsup';

export default defineConfig({
  minify: true,
  target: 'esnext',
  external: ['react', 'react-dom'],
  sourcemap: true,
  dts: true,
  format: ['esm', 'cjs'],
  injectStyle: true,
});
