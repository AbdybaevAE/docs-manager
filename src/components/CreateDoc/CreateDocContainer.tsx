import {CreateDocView} from './CreateDocView';
import {connect} from 'react-redux';
import {addDocRequestAction, makeLogout, searchRequestAction} from '../../actions'
import {State} from '../../reducers';
import {SearchArgs} from '../../api/search';
import {TFormData} from './types';
import {clearToken} from '../../utils/cookies';
import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';
const mapStateToProps = (state : State) => ({isSuccess: state.documentState.isSuccess});

const mapDispatchToProps = dispatch => ({
    addDoc: (data : SearchArgs) => dispatch(addDocRequestAction(data)),
    doLogout: () => dispatch(makeLogout())
});
const Container = (props) => {
    const history = useHistory();
    const {addDoc, doLogout} = props;
    const {isSuccess} = props
    useEffect(() => {
        // if (isSuccess)

    },[isSuccess])

    const onSubmit = (values) => {
        const data = new FormData();
        const body = {
            number: values.docNumber,
            class: values.docClass,
            organization: values.docOrg,
            type: values.docType
        };
        const count = 3;
        
        for (let i = 0; i < count; ++i) {
            const key = values['key' + i + 1], value = values['val' + i + 1];
            if (key != null && value != null) body[key] = value;
        }
        console.log('body is ', body);
        console.log('file content is ', values.docContent[0]);
        data.append('body', JSON.stringify(body));
        data.append('file', values.docContent[0]);
        console.log('form is ',data);
        console.log(values.docContent);
        addDoc(data);
    };
    return (<CreateDocView onSubmit={onSubmit}/>);
};
export const CreateDocContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
