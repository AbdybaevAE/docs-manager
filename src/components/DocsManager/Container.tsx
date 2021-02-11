import {DocsManagerView} from './View';
import {
    connect
} from 'react-redux';
import {
    searchRequestAction
} from '../../actions'
import { State } from '../../reducers';

const mapStateToProps = (state: State) => ({
    results: state.searchState.results,
  });
  
  const mapDispatchToProps = dispatch => ({});

  export const DocsManagerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(DocsManagerView);
  