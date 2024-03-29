import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// Find all widget divs
const widgetDivs = document.querySelectorAll('.apollos-widget');

// Inject our React App into each class
widgetDivs.forEach((div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        symbol={div.dataset.symbol}
        type={div.dataset.type}
        church={div.dataset.church}
      />
    </React.StrictMode>,
    div
  );
});
