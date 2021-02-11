import {combineReducers} from 'redux';
import {searchReducer, SearchState} from './search';
import {loginReducer, LoginState} from './login';

export interface State {
    searchState : SearchState;
    loginState : LoginState
}

export const rootReducers = combineReducers < State > ({searchState: searchReducer, loginState: loginReducer});
