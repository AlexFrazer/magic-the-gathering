import { fork, all } from 'redux-saga/effects';
import cardsSaga from './cards/saga';

export default function* saga() {
  yield all([
    fork(cardsSaga),
  ]);
}
