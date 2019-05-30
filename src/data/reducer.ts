import { Reducer, combineReducers } from 'redux';
import cards from './cards/reducer';

type UnwrapReducer<R> = R extends Reducer<infer U> ? U : never;

const reducer = combineReducers({
  cards,
});

export type AppState = UnwrapReducer<typeof reducer>;

export default reducer;
