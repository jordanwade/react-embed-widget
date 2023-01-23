import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider, withTheme } from 'styled-components';
import defaultTheme from '../_config/theme';

function ThemeProvider(props) {
  const [_colorScheme, setColorScheme] = useState('dark');
  const theme = {
    ...defaultTheme,
    // TODO: Fix light theme design before enabling theme switching
    // colors: props.theme.colors[_colorScheme],
    colors: {
      ...defaultTheme.colors.dark,
      // only these three custom colors are currently supported
      base: {
        ...defaultTheme.colors.dark.base,
        primary:
          props.customTheme?.colors?.primary ||
          defaultTheme.colors.dark.base.primary,
        secondary:
          props.customTheme?.colors?.secondary ||
          defaultTheme.colors.dark.base.secondary,
        tertiary:
          props.customTheme?.colors?.tertiary ||
          defaultTheme.colors.dark.base.tertiary,
      },
      text: {
        ...defaultTheme.colors.dark.text,
        action:
          props.customTheme?.colors?.secondary ||
          defaultTheme.colors.dark.text.action,
      },
    },
  };

  return <SCThemeProvider theme={theme}>{props.children}</SCThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  customTheme: PropTypes.shape({
    colors: PropTypes.shape({}),
  }),
};

export default withTheme(ThemeProvider);
