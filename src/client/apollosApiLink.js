import { ApolloLink } from '@apollo/client';

const X_CHURCH_VALUE = process.env.REACT_APP_APOLLOS_CHURCH_SLUG;
console.log('X_CHURCH_VALUE', X_CHURCH_VALUE);
// Configures graphql requests so they are properly contextualized to
// a specific church in the multi-tenant API.
const apollosApiLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }) => ({
    headers: {
      ...headers,
      'x-church': X_CHURCH_VALUE,
    },
  }));

  return forward(operation);
});

export default apollosApiLink;
