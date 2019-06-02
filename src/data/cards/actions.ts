import { createAsyncActions } from 'redux-ts-utils';

export const [
  requestCards,
  requestCardsSuccess,
  requestCardsFailure,
] = createAsyncActions(
  'cards',
  (payload: Partial<Record<keyof Card, string>> = {}) => payload,
  (payload: { cards: Card[] }) => payload,
  (error: Error) => error,
);
