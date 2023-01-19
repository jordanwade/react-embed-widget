import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import client from '../client';

function AppProvider(props = {}) {
  return (
    <ApolloProvider client={client} {...props}>
      {props.children}
    </ApolloProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  client: PropTypes.shape({}),
  customTheme: PropTypes.shape({}),
};

export default AppProvider;
