export const actionIds = {
    GET_NUMBER_REQUEST_START:
      '[0] Request a new number to the NumberGenerator async service.',
    GET_NUMBER_REQUEST_COMPLETED:
      '[1] NumberGenerator async service returned a new number.',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    SEARCH_REQUEST: 'SEARCH_REQUEST',
    SEARCH_REQUEST_SUCCESS: 'SEARCH_REQUEST_SUCCESS',
    SEARCH_REQUEST_FAILURE: 'SEARCH_REQUEST_FAILURE'
  };
  
  export interface BaseAction {
    type: string;
    payload?;
  }
  