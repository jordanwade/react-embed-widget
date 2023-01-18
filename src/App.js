import React from 'react';
import { StockQuote, FeatureFeed, Auth } from './components';

// Maps a widget name to a Component to render it.
const WidgetComponentMap = {
  StockQuote,
  FeatureFeed,
  Auth,
};

function App(props) {
  // Lookup the component responsible for rendering this Widget
  const WidgetComponent = WidgetComponentMap[props.type];

  // Widgets require a church slug to get the correct data
  if (WidgetComponent && props.church) {
    return <WidgetComponent symbol={props.symbol} church={props.church} />;
  }

  // eslint-disable-next-line no-console
  console.log(`⚠️  Widget could not render widget of type "${props.type}"`);

  return null;
}

export default App;
