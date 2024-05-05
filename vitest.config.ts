/// <reference types="vitest" />

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import vuetify from 'vite-plugin-vuetify'
import path from 'path'


export default defineConfig({
  plugins: [
    Vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
    setupFiles: path.resolve(__dirname, './tests/setup.ts'),
  },
});
