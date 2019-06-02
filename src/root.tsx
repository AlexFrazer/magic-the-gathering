import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import { hot } from 'react-hot-loader/root';
import Provider from './data';
import App from './App';

export default hot(function Root() {
  return (
    <React.Suspense fallback={<div />}>
      <Global
        styles={css`
          * {
            font-family: 'roboto', sans-serif;
          }
        `}
      />
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.Suspense>
  );
});
