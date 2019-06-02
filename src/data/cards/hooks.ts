import { useMemo, useEffect } from 'react';
import { parse } from 'querystring';
import { get, values, isString } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { requestCards } from './actions';
import { AppState } from '../reducer';
import { useRouter, useMappedDispatch } from '~util/hooks';

type ActionArgs<T extends (...args: any) => any> = Parameters<T>[0];

export function useCardActions() {
  return useMappedDispatch({
    requestCards,
  }, []);
}

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

const useQuery = () => {
  const router = useRouter();
  return useMemo(() => parse(router.location.search.replace(/^\?/, '')), [router]);
};

export function useSearchQuery() {
  const query = useQuery();
  return get(query, 'q', '') as string;
}

export function useOrderByQuery(defaultValue: keyof Card = 'name') {
  const query = useQuery();
  return get(query, 'orderBy', defaultValue) as string;
}

export function usePageQuery() {
  const query = useQuery();
  const page = get(query, 'page', '1');
  return isString(page) ? parseInt(page, 10) : 1;
}
