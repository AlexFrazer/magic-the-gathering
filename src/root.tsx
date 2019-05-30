import * as React from 'react';
import { Global, css } from '@emotion/core';
import { hot } from 'react-hot-loader/root';
import Provider from './data';
import App from './App';

export default hot(function Root() {
  return (
    <React.Suspense fallback={<div />}>
      <Global
        styles={css`
          h1 {
            font-family: 'roboto', sans-serif;
          }
        `}
      />
      <Provider>
        <App />
      </Provider>
    </React.Suspense>
  );
});
