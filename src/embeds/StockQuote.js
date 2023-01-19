import React, { useState } from 'react';

function StockQuote(props) {
  const [quote, setQuote] = useState({
    price: '--',
    var: '--',
    time: '--',
  });
  const [stock, setStock] = useState({
    stockExchange: 'N/A',
    name: 'N/A',
  });

  const varColor = quote.var < 0 ? 'text-red-500' : 'text-green-500';

  return (
    <div className={'quote rounded-lg shadow-md p-4 bg-gray-800'}>
      <span className={'quoteSymbol text-sm text-white font-bold'}>
        {props.symbol}
      </span>
      <span className={'quoteSymbol text-sm text-white font-bold'}>
        {props.church}
      </span>
      <span className={'quoteSymbol text-sm text-white font-bold'}>
        {props.type}
      </span>
      <span className={'quoteSymbol text-2xs text-gray-400 ml-1'}>
        {stock.name}
      </span>
      <span className={'quoteSymbol text-2xs text-gray-400 ml-1'}>
        ({stock.stockExchange})
      </span>
      <div className={'quote flex flex-row justify-between mt-1'}>
        <div
          className={
            'quotePrice self-center text-2xl font-bold items-center text-white'
          }
        >
          ${quote.price}
        </div>
        <div className={'flex flex-col text-right'}>
          <div className={'quoteVar ' + varColor}>{quote.var}%</div>
          <div className={'quoteTime text-right text-2xs text-gray-400'}>
            {quote.time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockQuote;
