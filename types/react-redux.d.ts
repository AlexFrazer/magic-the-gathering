import { Dispatch } from 'redux';

declare module 'react-redux' {
  type TSelector<TState, TReturn> = (state: TState) => TReturn;

  export function useDispatch(): Dispatch;
  export function useSelector<TReturn, TState>(param: TSelector<TState, TReturn>): TReturn;
}
