import {TSearchResult} from "../api/search";
import {actionIds, BaseAction} from "../common";

export type SearchState = {
    results: TSearchResult[];
    isRequesting: boolean;
    isSuccess: boolean;
}
const initialState : SearchState = {
    results: [],
    isRequesting: false,
    isSuccess: false
};

export const searchReducer = (state : SearchState = initialState, action : BaseAction) => {
    const {payload} = action;
    switch (action.type) {
        case actionIds.SEARCH_REQUEST:
            {
                return {
                    ...state,
                    isRequesting: true,
                    results: []
                };
            }
        case actionIds.SEARCH_REQUEST_SUCCESS:
            {
                return {
                    ...state,
                    results: payload,
                    isRequesting: false,
                    isSuccess: true
                };
            }
        case actionIds.SEARCH_REQUEST_FAILURE:
            {
                return {
                    ...state,
                    results: payload,
                    isRequesting: false,
                    isSuccess: true
                };
            }

    }
    return state;

}