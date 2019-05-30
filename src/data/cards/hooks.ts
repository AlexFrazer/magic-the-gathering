import { useMemo, useEffect } from 'react';
import { values } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { requestCards } from './actions';
import { AppState } from '../reducer';

type ActionArgs<T extends (...args: any) => any> = Parameters<T>[0];

export function useRequestCards(payload?: ActionArgs<typeof requestCards>) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestCards(payload));
  }, [dispatch, payload]);
}

/**
 * Returns the card from the
 */
export function useCards() {
  const cards = useSelector((state: AppState) => state.cards.data);
  const loading = useSelector((state: AppState) => state.cards.loading);

  return useMemo(() => ({
    loading,
    cards: values(cards),
  }), [cards, loading]);
}
