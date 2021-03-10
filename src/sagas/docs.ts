import {call, put, takeEvery} from 'redux-saga/effects';

import {
    addDocRequestAction,
    addDocRequestActionFailure,
    addDocRequestActionSuccess,
    searchRequestActionFailure, searchRequestActionSuccess,
    // sear
} from '../actions';
import {actionIds} from '../common';
import {SearchArgs, SearchService} from '../api/search';

export function * watchDocsSaga() {
    yield takeEvery(actionIds.SEARCH_REQUEST, searchRequest);
    yield takeEvery(actionIds.ADD_DOC_REQUEST, addDoc);
}

function * searchRequest(action) {
    const {payload} : {
        payload: SearchArgs
    } = action;
    const data = yield call(SearchService.makeSearch, payload);
    if (data.isError()) 
        return yield put(searchRequestActionFailure());
    yield put(searchRequestActionSuccess(data.value));
}
function * addDoc(action) {
    const {payload} : {
        payload: SearchArgs
    } = action;
    const data = yield call(SearchService.addDoc, payload);
    if (data.isError()) 
        return yield put(addDocRequestActionFailure());
    yield put(addDocRequestActionSuccess(data.value));
}