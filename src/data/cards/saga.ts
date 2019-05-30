import { put, call, takeLatest } from 'redux-saga/effects';
import api from '~/api';
import * as actions from './actions';

export function* requestCardsSaga() {
  try {
    const { data } = yield call(
      api,
      '/cards',
      {
        method: 'GET',
        params: {
          type: 'Creature',
          pageSize: 20,
          page: 1,
          orderBy: 'name',
          contains: 'imageUrl',
        },
      },
    );
    yield put(actions.requestCardsSuccess(data));
  } catch (e) {
    yield put(actions.requestCardsFailure(e));
  }
}

export default function* cardsSaga() {
  yield takeLatest(actions.requestCards, requestCardsSaga);
}
