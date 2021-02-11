import { TMakeLogin, TMakeLoginArgs } from './api/auth';
import {SearchArgs, TSearchResult} from './api/search'
import {BaseAction, actionIds} from './common';

export const searchRequestAction = (data: SearchArgs) : BaseAction => ({type: actionIds.SEARCH_REQUEST, payload: data});
export const searchRequestActionSuccess = (data : TSearchResult) : BaseAction => ({type: actionIds.SEARCH_REQUEST_SUCCESS, payload: data});
export const searchRequestActionFailure = () : BaseAction => ({type: actionIds.SEARCH_REQUEST_FAILURE});
export const makeLoginRequest = (data: TMakeLoginArgs) : BaseAction => ({type: actionIds.MAKE_LOGIN_REQUEST, payload: data});
export const makeLoginSuccess = (data : TSearchResult) : BaseAction => ({type: actionIds.MAKE_LOGIN_SUCCESS, payload: data});
export const makeLoginFailure = () : BaseAction => ({type: actionIds.MAKE_LOGIN_FAILURE});
export const makeLogout = () => ({type: actionIds.MAKE_LOGOUT})
export const restoreLogin = (token: string) => ({type: actionIds.RESTORE_LOGIN})