import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import createStore from './store';

export interface Props {
  readonly children: React.ReactNode;
}

export default function Provider({ children }: Props) {
  const store = React.useMemo(createStore, []);
  return (
    <StoreProvider store={store}>
      {children}
    </StoreProvider>
  );
}
