import {
    actionIds,
    BaseAction
} from "../common";
export type Meta = {
    [key:string]: string
};
export type DocumentState = {
    attrs: Meta;
    docNumber: string;
    docClass: string;
    docOrg: string;
    docType: string;
    isSuccess: boolean;
    isRequesting: boolean;
}
const initialState: DocumentState = {
    attrs: {},
    docNumber: "",
    docClass: "",
    docOrg: "",
    docType: "",
    isRequesting: false,
    isSuccess: false
};

export const documentReducer = (state: DocumentState = initialState, action: BaseAction) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case actionIds.ADD_DOC_REQUEST: {
            return {
                ...state,
                isRequesting: true,
            };
        }
        case actionIds.ADD_DOC_REQUEST_SUCCESS: {
            return {
                ...state,
                results: payload,
                isRequesting: false
            };
        }
        case actionIds.ADD_DOC_REQUEST_FAILURE: {
            return {
                ...state,
                results: payload,
                isRequesting: false
            };
        }

    }
    return state;

}