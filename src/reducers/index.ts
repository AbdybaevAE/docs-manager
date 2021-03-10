import {combineReducers} from 'redux';
import {searchReducer, SearchState} from './search';
import {loginReducer, LoginState} from './login';
import {documentReducer, DocumentState} from './doc'

export interface State {
    searchState : SearchState;
    loginState : LoginState;
    documentState : DocumentState
}

export const rootReducers = combineReducers < State > ({searchState: searchReducer, loginState: loginReducer, documentState: documentReducer});
