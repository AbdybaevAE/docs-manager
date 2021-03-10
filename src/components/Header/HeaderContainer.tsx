import { Col, Row } from 'antd'
import React from 'react'
import { HeaderView } from './HeaderView';
import { useHistory } from 'react-router-dom';
import { clearToken } from '../../utils/cookies';
export const HeaderContainer = () => {
    const history = useHistory();
    const onLogout = () => {
        clearToken();
        // doLogout();
        history.push('/login');
    };
    return (
        <HeaderView onLogout={onLogout}/>
    );
}
