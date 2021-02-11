import { combineReducers } from 'redux';
import {
  numberCollectionReducer,
  NumberCollectionState,
} from './number-collection.reducer';
import {searchReducer, SearchState} from './search';

export interface State {
  numberCollection: NumberCollectionState;
  searchState: SearchState;
}

export const rootReducers = combineReducers<State>({
  numberCollection: numberCollectionReducer,
  searchState: searchReducer
});
