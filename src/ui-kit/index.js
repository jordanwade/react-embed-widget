import theme from './_config/theme';

import { system, systemPropTypes } from './_lib/system';
import * as utils from './_utils';

import ThemeProvider from './ThemeProvider';

// UI Kit components
import Box from './Box';
import Loader from './Loader';
import Button from './Button';

import {
  BodyText,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LargeSystemText,
  SmallBodyText,
  SmallSystemText,
  SystemText,
  TypeStyles,
} from './Typography';

export {
  // ====================
  ThemeProvider,
  // ====================
  Box,
  Button,
  Loader,
  // Typography
  BodyText,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LargeSystemText,
  SmallBodyText,
  SmallSystemText,
  SystemText,
  TypeStyles,
  // ====================
  theme,
  system,
  systemPropTypes,
  utils,
  // ====================
};
