import { RouteComponentProps } from 'react-router-dom';
import { Context } from 'react';

declare module 'react-router-dom' {
  // eslint-disable-next-line no-underscore-dangle
  export const __RouterContext: Context<RouteComponentProps<{}>>;
}
