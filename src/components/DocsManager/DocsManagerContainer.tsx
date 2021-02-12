import {DocsManagerView} from './DocsManagerView';
import {connect} from 'react-redux';
import {makeLogout, searchRequestAction} from '../../actions'
import {State} from '../../reducers';
import {SearchArgs} from '../../api/search';
import {TFormData} from './types';
import {clearToken} from '../../utils/cookies';
import {useHistory} from 'react-router-dom';
const mapStateToProps = (state : State) => ({results: state.searchState.results});

const mapDispatchToProps = dispatch => ({
    doSearch: (data : SearchArgs) => dispatch(searchRequestAction(data)),
    doLogout: () => dispatch(makeLogout())
});

const Container = (props) => {
    const history = useHistory();
    const {doSearch, results, doLogout} = props;
    const onFormSubmit = (values : TFormData) => {
        const data : SearchArgs = {};
        if (values.docNumber != null) 
            data["number"] = values.docNumber;
        if (values.docClass != null) 
            data["class"] = values.docClass;
        if (values.docOrganization != null) 
            data["organization"] = values.docOrganization;
        if (values.docType != null) 
            data["type"] = values.docType;
        
        (values.attributes || []).forEach(item => data[item.key] = item.value);

        doSearch(data);
    };
    const onLogout = () => {
        clearToken();
        doLogout();
        history.push('/login');

    };
    return (<DocsManagerView
        doSearch={doSearch}
        results={results}
        onLogout={onLogout}
        onFormSubmit={onFormSubmit}/>);
};
export const DocsManagerContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
