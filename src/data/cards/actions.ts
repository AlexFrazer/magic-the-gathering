import { createAsyncActions } from 'redux-ts-utils';

export const [
  requestCards,
  requestCardsSuccess,
  requestCardsFailure,
] = createAsyncActions(
  'cards',
  (payload: void) => payload,
  (payload: { cards: Card[] }) => payload,
  (error: Error) => error,
);
