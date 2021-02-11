import { all, fork } from 'redux-saga/effects';
import { watchDocsSaga } from './docs';
import { watchLoginSaga } from './login';

export const rootSaga = function* root() {
  yield all([fork(watchDocsSaga), fork(watchLoginSaga)]);
};
