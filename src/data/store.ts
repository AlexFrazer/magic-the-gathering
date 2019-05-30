import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createStore,
  Store,
  applyMiddleware,
  DeepPartial,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer, { AppState } from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default (initialState?: DeepPartial<AppState>): Store<AppState> => {
  const store = createStore(
    reducer,
    initialState!,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(saga);
  return store;
};
