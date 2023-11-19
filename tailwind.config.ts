import type { Config } from 'tailwindcss'

const ScreensConfig = require('./src/screen.config');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      lg: { max: `${ScreensConfig.lg}px` },
      md: { max: `${ScreensConfig.md}px` },
      sm: { max: `${ScreensConfig.sm}px` },
      // this is the breakpoint used for the header only, to enhance the responsive layout.
      'header-breakpoint': { max: `${ScreensConfig['header-breakpoint']}px` },
    },
    fontFamily: {
      BowlbyOne: 'Bowlby One',
      FuturaMaxi: 'FuturaMaxi',
      FuturaCondensed: 'FuturaCondensed',
      Font3: 'Font3',
    },
    boxShadow: {
      DEFAULT: '0px 0px 1px rgba(255, 255, 255, 0.45)',
      1: '0px 0px 2px rgba(0, 0, 0, 0.45)',
      2: '0px 2px 4px rgba(0, 0, 0, 0.45)',
      3: '0px 2px 8px rgba(0, 0, 0, 0.45)',
      4: '0px 2px 12px rgba(0, 0, 0, 0.45)',
      5: '0px 2px 16px rgba(0, 0, 0, 0.45)',
      border: '0px 0px 0px 4px rgba(28, 110, 232, 0.4)',
      modal: '0px 8px 10px rgba(0, 0, 0, 0.4)',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
      'col-resize': 'col-resize',
    },
    extend: {
      outline: {
        border: ['1px solid #FFFFFF', '-1px'],
        outer: ['2px solid #1C6EE8', '2px'],
      },
      colors: {
        transparent: 'transparent',
        white: "#FFF",
        black: "#151515",
        current: 'currentColor',
        yellow: '#EFF68D',
        melon: '#FF5372',
        merino: '#FFEAEC',
        mandy: '#DC4B5C',
        pink: '#EA9BD5',
        purple: '#6C4EF0',
        primary: '#61f8d4',
      },
      width: {
        fit: 'fit-content',
      },
      textUnderlineOffset: {
        6: '6px',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-focus', 'active'],
      backgroundColor: ['group-hover', 'hover', 'focus-within', 'focus', 'active', 'disabled'],
      translate: ['group-hover'],
      padding: ['first', 'last', 'focus', 'focus-visible'],
      borderRadius: ['first', 'last'],
      display: ['group-hover', 'group-focus'],
      outline: ['focus'],
      opacity: ['group-focus', 'disabled', 'active'],
      margin: ['first'],
      borderWidth: ['first', 'focus', 'focus-visible'],
      scale: ['group-hover, hover'],
      borderColor: ['focus-visible'],
      justifyContent: ['hover', 'focus'],
      boxShadow: ['focus-visible'],
      width: ['group-hover'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],
};

export default config