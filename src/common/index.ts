export const actionIds = {
    MAKE_LOGIN_REQUEST: 'MAKE_LOGIN_REQUEST',
    MAKE_LOGIN_SUCCESS: 'MAKE_LOGIN_SUCCESS',
    MAKE_LOGIN_FAILURE: 'MAKE_LOGIN_FAILURE',
    SEARCH_REQUEST: 'SEARCH_REQUEST',
    SEARCH_REQUEST_SUCCESS: 'SEARCH_REQUEST_SUCCESS',
    SEARCH_REQUEST_FAILURE: 'SEARCH_REQUEST_FAILURE',
    MAKE_LOGOUT: 'MAKE_LOGOUT',
    RESTORE_LOGIN: "RESTORE_LOGIN"
};

export interface BaseAction {
    type: string;
    payload
        ?
    ;
}
export const getBackendHost = (): string => {
    if (process.env.BACKEND_HOST != null) return process.env.BACKEND_HOST;
    return "http://localhost:3000";
}