import {
  TSearchResult
} from './api/search-service'
import {
  BaseAction,
  actionIds
} from './common';

export const numberRequestStartAction = (): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_START,
  payload: null,
});

export const numberRequestCompletedAction = (
  numberGenerated: number
): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_COMPLETED,
  payload: numberGenerated,
});

export const searchRequestAction = (data: { [name: string]: string}): BaseAction => ({
  type: actionIds.SEARCH_REQUEST,
  payload: data
});
export const searchRequestActionSuccess = (data: TSearchResult): BaseAction => ({
  type: actionIds.SEARCH_REQUEST_SUCCESS,
  payload: data
});