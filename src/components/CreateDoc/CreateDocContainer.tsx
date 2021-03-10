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

    const onSubmit = (values : TFormData) => {
        const data = {};
        const formData = new FormData();
        if (values.docNumber != null) {
            data["number"] = values.docNumber;
            formData.append("number", values.docNumber);
        }
            
        if (values.docClass != null)  {
            formData.append("class", values.docClass);
        }
        if (values.docOrg != null) {
            formData.append("organization", values.docOrg);
        }
            
        if (values.docType != null) {
            data["type"] = values.docType;
            formData.append("type", values.docType);
        }
        formData.append("file",values.docContent)
        console.log(formData);

        // data["file"] = values.docContent;
        // console.log('data  is ',data);
        //     (values.attributes || [])
        //     .filter(item => item.key != null && item.value != null)
        //     .forEach(item => data[item.key] = item.value);
        addDoc(formData);
    };
    return (<CreateDocView onSubmit={onSubmit}/>);
};
export const CreateDocContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
