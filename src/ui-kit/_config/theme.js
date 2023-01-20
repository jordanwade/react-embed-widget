import { outerBorderRadius, rem } from '../_utils';
import colors from './colors';

const theme = {
  breakpoints: {
    // Pixel values defining the maximum device width for each breakpoint
    sm: 428, // Accommodates ~iPhone 12 Max
    md: 768,
    lg: 1280,
    xl: 1440,
    xxl: 2048,
  },
  colors,
  fonts: {
    heading: 'Inter',
  },
  radii: {
    xs: rem('2px'),
    s: rem('4px'),
    base: rem('6px'),
    l: rem('10px'),
    xl: rem('16px'),
    xxl: rem('25px'),
    round: rem('999px'),
  },
  outline: {
    xs: {
      padding: rem('4px'),
      radius: rem(`${outerBorderRadius(2, 4, 4)}px`),
      width: rem('4px'),
    },
    s: {
      padding: rem('4px'),
      radius: rem(`${outerBorderRadius(4, 4, 2)}px`),
      width: rem('2px'),
    },
    base: {
      padding: rem('4px'),
      radius: rem(`${outerBorderRadius(6, 4, 4)}px`),
      width: rem('4px'),
    },
    l: {
      padding: rem('4px'),
      radius: rem(`${outerBorderRadius(10, 4, 4)}px`),
      width: rem('4px'),
    },
    xl: {
      padding: rem('4px'),
      radius: rem(`${outerBorderRadius(16, 4, 4)}px`),
      width: rem('4px'),
    },
    xxl: {
      padding: rem('4px'),
      radius: rem(`${outerBorderRadius(25, 4, 4)}px`),
      width: rem('4px'),
    },
    round: {
      padding: rem('4px'),
      radius: rem('999px'),
      width: rem('4px'),
    },
  },
  shadows: {
    low: '0px 3px 6px rgba(0, 0, 0, 0.25);',
    medium: '0px 8px 22px rgba(0, 0, 0, .17);',
    high: '0px 16px 38px rgba(0, 0, 0, 0.22);',
  },
  space: {
    xxxs: rem('4px'),
    xxs: rem('6px'),
    xs: rem('12px'),
    s: rem('18px'),
    base: rem('24px'),
    l: rem('48px'),
    xl: rem('66px'),
    xxl: rem('108px'),
  },
  timing: {
    base: '0.132s',
    l: '0.2s',
    xl: '0.3s',
  },
};

export default theme;
