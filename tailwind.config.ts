import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          tint: 'var(--ion-color-primary-tint)',
          DEFAULT: 'var(--ion-color-primary)',
          shade: 'var(--ion-color-primary-shade)',
          contrast: 'var(--ion-color-primary-contrast)',
        },
        secondary: {
          tint: 'var(--ion-color-secondary-tint)',
          DEFAULT: 'var(--ion-color-secondary)',
          shade: 'var(--ion-color-secondary-shade)',
          contrast: 'var(--ion-color-secondary-contrast)',
        },
        tertiary: {
          tint: 'var(--ion-color-tertiary-tint)',
          DEFAULT: 'var(--ion-color-tertiary)',
          shade: 'var(--ion-color-tertiary-shade)',
          contrast: 'var(--ion-color-tertiary-contrast)',
        },
        success: {
          tint: 'var(--ion-color-success-tint)',
          DEFAULT: 'var(--ion-color-success)',
          shade: 'var(--ion-color-success-shade)',
          contrast: 'var(--ion-color-success-contrast)',
        },
        warning: {
          tint: 'var(--ion-color-warning-tint)',
          DEFAULT: 'var(--ion-color-warning)',
          shade: 'var(--ion-color-warning-shade)',
          contrast: 'var(--ion-color-warning-contrast)',
        },
        danger: {
          tint: 'var(--ion-color-danger-tint)',
          DEFAULT: 'var(--ion-color-danger)',
          shade: 'var(--ion-color-danger-shade)',
          contrast: 'var(--ion-color-danger-contrast)',
        },
        light: {
          tint: 'var(--ion-color-light-tint)',
          DEFAULT: 'var(--ion-color-light)',
          shade: 'var(--ion-color-light-shade)',
          contrast: 'var(--ion-color-light-contrast)',
        },
        medium: {
          tint: 'var(--ion-color-medium-tint)',
          DEFAULT: 'var(--ion-color-medium)',
          shade: 'var(--ion-color-medium-shade)',
          contrast: 'var(--ion-color-medium-contrast)',
        },
        dark: {
          tint: 'var(--ion-color-dark-tint)',
          DEFAULT: 'var(--ion-color-dark)',
          shade: 'var(--ion-color-dark-shade)',
          contrast: 'var(--ion-color-dark-contrast)',
        },
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config;
