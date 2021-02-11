import {
    Button,
    Col,
    Row,
} from 'antd';
import React from 'react';
import {clearToken} from '../../utils/cookies';
import {useHistory} from 'react-router-dom';
import {SearchArgs, TSearchResult} from '../../api/search';
import {DocsTable} from './DocsTable';
import {TFormData} from './types';
import {SearchFormView} from './SearchFormView';

type TProps = {
    results: TSearchResult[],
    doSearch: (data : SearchArgs) => void;
    onFormSubmit: (data : TFormData) => void;
    doLogout: () => void;
}



export const DocsManagerView = (props : TProps) => {
    const history = useHistory();
    const {onFormSubmit, results, doLogout} = props;
    const onLogout = () => {
        clearToken();
        history.push('/login');
    }
    return (
        <div>
            <Row>
                <Col offset={19}>
                    <Button onClick={onLogout}>Выход</Button>
                </Col>
            </Row>

            <SearchFormView onFinish={onFormSubmit}/>
            <DocsTable results={results}/>
        </div>
    )
};