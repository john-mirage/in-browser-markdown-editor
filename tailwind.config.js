/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "transparent": "transparent",
      "neutral-100": "#FFFFFF",
      "neutral-200": "#F5F5F5",
      "neutral-300": "#E4E4E4",
      "neutral-400": "#C1C4CB",
      "neutral-500": "#7C8187",
      "neutral-600": "#5A6069",
      "neutral-700": "#35393F",
      "neutral-800": "#2B2D31",
      "neutral-900": "#1D1F22",
      "neutral-1000": "#151619",
      "orange": "#E46643",
      "orange-hover": "#F39765",
    },
    spacing: {
      "0": "0rem",
      "18": "1.125rem",
      "24": "1.5rem",
      "56": "3.5rem",
      "250": "15.625rem",
    },
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'Roboto Slab',
          ...defaultTheme.fontFamily.serif,
        ],
        mono: [
          'Roboto Mono',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      fontSize: {
        "13": ["0.8125rem", { lineHeight: "1" }],
        "14": ["0.875rem", { lineHeight: "1" }],
        "14-p": ["0.875rem", { lineHeight: "1.5rem" }],
        "15": ["0.9375rem", { lineHeight: "1" }],
        "16": ["1rem", { lineHeight: "1" }],
        "20": ["1.25rem", { lineHeight: "1" }],
        "24": ["1.5rem", { lineHeight: "1" }],
        "28": ["1.75rem", { lineHeight: "1" }],
        "32": ["2rem", { lineHeight: "1" }],
      },
      letterSpacing: {
        "2": "0.125rem",
      },
    },
  },
  plugins: [],
}
