import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider, withTheme } from 'styled-components';
import defaultTheme from '../_config/theme';

function ThemeProvider(props) {
  const [_colorScheme, setColorScheme] = useState('light');
  const theme = {
    ...defaultTheme,
    // TODO: Fix light theme design before enabling theme switching
    // colors: props.theme.colors[_colorScheme],
    colors: {
      ...defaultTheme.colors.light,
      // only these three custom colors are currently supported
      base: {
        ...defaultTheme.colors.light.base,
        primary:
          props.customTheme?.colors?.primary ||
          defaultTheme.colors.light.base.primary,
        secondary:
          props.customTheme?.colors?.secondary ||
          defaultTheme.colors.light.base.secondary,
        tertiary:
          props.customTheme?.colors?.tertiary ||
          defaultTheme.colors.light.base.tertiary,
      },
      text: {
        ...defaultTheme.colors.light.text,
        action:
          props.customTheme?.colors?.secondary ||
          defaultTheme.colors.light.text.action,
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
