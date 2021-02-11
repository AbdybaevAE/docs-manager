import {
    TSearchResult
} from "../api/search";
import {
    actionIds,
    BaseAction
} from "../common";

export type LoginState = {
    hasLogin: boolean;
    isRequesting: boolean;
    token: string;
}
const initialState: LoginState = {
    token: "",
    hasLogin: false,
    isRequesting: false
};

export const loginReducer = (state: LoginState = initialState, action: BaseAction) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case actionIds.MAKE_LOGIN_REQUEST: {
            return {
                ...state,
                isRequesting: true
            };
        }
        case actionIds.MAKE_LOGIN_SUCCESS: {
            return {
                ...state,
                hasLogin: true,
                token: payload,
                isRequesting: false
            };
        }
        case actionIds.MAKE_LOGIN_FAILURE: {
            return {
                ...state,
                results: payload,
                isRequesting: false
            };
        }
        case actionIds.MAKE_LOGOUT: {
            return {
                ...state,
                hasLogin: false,
                token: ""
            }
        }
        case actionIds.RESTORE_LOGIN: {
            return {
                ...state,
                hasLogin: true,
                token: payload
            }
        }

    }
    return state;

}