import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Table
} from 'antd';
import Loader from 'react-loaders';
import React, {useState} from 'react';
import {clearToken} from '../../utils/cookies';
import {useHistory} from 'react-router-dom';
import {SearchArgs, SearchService, TSearchResult} from '../../api/search';
import {TableViewResults} from './DocsTable';
import { TFormData } from './types';
import { SearchFormView } from './SearchFormView';
const {Option} = Select;

type TProps = {
    results: TSearchResult[],
    doSearch: (data: SearchArgs) => void;
    onFormSubmit: (data: TFormData) => void;
    doLogout: () => void;
}

const columns = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: 'Тип документа',
        dataIndex: 'type',
        key: 'type'
    }, {
        title: 'Класс документа',
        dataIndex: 'class',
        key: 'class'
    }, {
        title: 'Номер документа',
        dataIndex: 'number',
        key: 'number'
    }, {
        title: 'Атрибуты документа',
        dataIndex: 'atributes',
        key: 'atributes'
    }, {
        title: 'Дата',
        dataIndex: 'data',
        key: 'data'
    }
];

export const DocsManagerView = (props : TProps) => {
    const history = useHistory();
    const {onFormSubmit, results, doLogout } = props;
    const onLogout = () => {
        clearToken();
        history.push('/login');

    }
    return (
        <div>
            <Button onClick={onLogout}>Выход</Button>
            <SearchFormView onFinish= {onFormSubmit}/>
            <Table rowKey={'id'} dataSource={results} columns={columns}/>;
        </div>
    )
};