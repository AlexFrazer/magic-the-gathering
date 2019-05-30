import { keyBy } from 'lodash/fp';
import { reduceReducers, handleAction } from 'redux-ts-utils';
import * as actions from './actions';

export interface State {
  readonly data: Record<string, Card>;
  readonly loading: boolean;
}

const initialState: State = {
  data: {},
  loading: false,
};

export default reduceReducers<State>([
  handleAction(actions.requestCards, state => {
    state.loading = true;
  }),
  handleAction(actions.requestCardsSuccess, (state, { payload }) => {
    state.data = keyBy('id', payload.cards);
    state.loading = false;
  }),
  handleAction(actions.requestCardsFailure, state => {
    state.loading = false;
  }),
], initialState);
