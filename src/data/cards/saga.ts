import { put, call, takeLatest } from 'redux-saga/effects';
import api from '~/api';
import * as actions from './actions';

export function* requestCardsSaga({
  payload: {
    page = 1,
    pageSize = 20,
    type = 'Creature',
    orderBy = 'name',
    contains = 'imageUrl',
    ...params
  },
}: ReturnType<typeof actions.requestCards>) {
  try {
    const { data } = yield call(
      api,
      '/cards',
      {
        method: 'GET',
        params: {
          ...params,
          type,
          pageSize,
          page,
          orderBy,
          contains,
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
