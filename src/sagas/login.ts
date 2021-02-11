import {call, put, takeEvery} from 'redux-saga/effects';

import {
    makeLoginSuccess, makeLoginFailure,
    // sear
} from '../actions';
import { TMakeLoginArgs, AuthService } from '../api/auth';
import {actionIds} from '../common';
import { setToken } from '../utils/cookies';
// import {SearchArgs, SearchService} from '../api/search';

export function * watchLoginSaga() {
    yield takeEvery(actionIds.MAKE_LOGIN_REQUEST, makeLoginRequest);
}

function * makeLoginRequest(action) {
    const {payload} : {
        payload: TMakeLoginArgs
    } = action;
    const data = yield call(AuthService.makeLogin, payload);
    if (data.isError()) 
        return yield put(makeLoginFailure());
    console.log('data is ',data.value);
    setToken(data.value);
    yield put(makeLoginSuccess(data.value));
}
