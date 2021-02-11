import {useEffect} from 'react';
import {connect} from 'react-redux';
import {makeLoginRequest, restoreLogin} from '../../actions';
import {TMakeLoginArgs} from '../../api/auth';
import {State} from '../../reducers';
import {LoginView} from './LoginView';
import {useHistory} from 'react-router-dom';
import { getToken } from '../../utils/cookies';
const mapDispatchToProps = dispatch => ({
    doLogin: (data : TMakeLoginArgs) => dispatch(makeLoginRequest(data)),
    restoreLogin: (token: string) => dispatch(restoreLogin(token))
});
const mapStateToProps = (state : State) => ({hasLogin: state.loginState.hasLogin});
const Container = (props) => {
    const history = useHistory();
    const {doLogin, hasLogin, restoreLogin} = props;
    const onLoginFormSubmit = (values : TMakeLoginArgs) => {
        doLogin(values);
    };
    useEffect(() => {
        if (hasLogin) 
            history.push('/search');
        }
    , [hasLogin]);
    useEffect(() => {
        const token = getToken();
        if (token != null) restoreLogin(token);
    });
    return (<LoginView onFormSubmit={onLoginFormSubmit}/>);

};
export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Container);