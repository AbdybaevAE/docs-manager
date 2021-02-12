import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects';

import {
    makeLoginSuccess,
    makeLoginFailure,
    // sear
} from '../actions';
import {
    TMakeLoginArgs,
    AuthService
} from '../api/auth';
import {
    actionIds
} from '../common';

export function* watchLoginSaga() {
    yield takeEvery(actionIds.MAKE_LOGIN_REQUEST, makeLoginRequest);
}

function* makeLoginRequest(action) {
    const {
        payload
    }: {
        payload: TMakeLoginArgs
    } = action;
    const data = yield call(AuthService.makeLogin, payload);
    if (data.isError())
        return yield put(makeLoginFailure());
    yield put(makeLoginSuccess(data.value));
}