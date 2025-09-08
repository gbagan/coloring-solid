import { defineConfig } from 'vite';
import civet from '@danielx/civet/vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "./",
  plugins: [
    civet({ ts: "preserve" }),
    solidPlugin(),
    tailwindcss({content: ["./src/**/*.{ts,tsx,civet}"]}),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
});
