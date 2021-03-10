
import axios from 'axios';
import { hasToken, getToken } from '../utils/cookies';
export const actionIds = {
    MAKE_LOGIN_REQUEST: 'MAKE_LOGIN_REQUEST',
    MAKE_LOGIN_SUCCESS: 'MAKE_LOGIN_SUCCESS',
    MAKE_LOGIN_FAILURE: 'MAKE_LOGIN_FAILURE',
    SEARCH_REQUEST: 'SEARCH_REQUEST',
    SEARCH_REQUEST_SUCCESS: 'SEARCH_REQUEST_SUCCESS',
    SEARCH_REQUEST_FAILURE: 'SEARCH_REQUEST_FAILURE',
    ADD_DOC_REQUEST: 'ADD_DOC_REQUEST',
    ADD_DOC_REQUEST_SUCCESS: 'ADD_DOC_REQUEST_SUCCESS',
    ADD_DOC_REQUEST_FAILURE: 'ADD_DOC_REQUEST_FAILURE',
    
    MAKE_LOGOUT: 'MAKE_LOGOUT',
    RESTORE_LOGIN: "RESTORE_LOGIN"
};

export interface BaseAction {
    type: string;
    payload
        ?
    ;
}
export const Axios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_HOST
});

export const getBackendHost = (): string => {
    return String(process.env.REACT_APP_BACKEND_HOST);
}


export const initAxios = () => {
    if (!hasToken()) return;
    addAxiosToken(getToken());
}
export const addAxiosToken = (token: string) => {
    Axios.defaults.headers["Authorization"] = token;
};
initAxios();