import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ActionCreatorsMapObject } from 'redux';
import { mapValues } from 'lodash';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, __RouterContext } from 'react-router-dom';
import { v4 } from 'uuid';


export const useId = () => useMemo<string>(v4, []);

export function useInput(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, [setValue]);
  return [value, onChange] as const;
}

export function useSelect(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, [setValue]);
  return [value, onChange] as const;
}

/**
 * Sets a value on a debounce
 * @param value
 * @param timeout
 * @returns value debounced after timeout ms
 */
export function useDebouncedValue<TValue>(value: TValue, timeout: number = 200) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
    return () => window.clearTimeout(timer);
  });
  return debouncedValue;
}

export function useRouter<TParams = {}>() {
  return useContext(__RouterContext) as RouteComponentProps<TParams>;
}

type InferArgs<F> = F extends (...args: infer T) => unknown ? T : never;
type MappedDispatch<T> = { [K in keyof T]: (...args: InferArgs<T[K]>) => void };

// eslint-disable-next-line arrow-parens
export const useMappedDispatch = <T extends ActionCreatorsMapObject>(
  actions: T,
  deps: unknown[],
): MappedDispatch<T> => {
  const dispatch = useDispatch();
  return useMemo(() => mapValues(
    actions,
    ac => (...args: InferArgs<typeof ac>) => dispatch(ac(...args)),
  ), [
    dispatch,
    actions,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...deps,
  ]) as MappedDispatch<T>;
};
