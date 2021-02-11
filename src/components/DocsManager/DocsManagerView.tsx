import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Table,
    Tag
} from 'antd';
import Loader from 'react-loaders';
import React, {useState} from 'react';
import {clearToken} from '../../utils/cookies';
import {useHistory} from 'react-router-dom';
import {SearchArgs, SearchService, TSearchResult} from '../../api/search';
import {TableViewResults} from './DocsTable';
import {TFormData} from './types';
import {SearchFormView} from './SearchFormView';
import {render} from '@testing-library/react';
import moment from 'moment';
const {Option} = Select;

type TProps = {
    results: TSearchResult[],
    doSearch: (data : SearchArgs) => void;
    onFormSubmit: (data : TFormData) => void;
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
        render: (text: string, row: TSearchResult, index: number) => {
            const attributes: string[] = Object.values(row.attributes);
            return attributes.map((item: string) => <Tag>{item}</Tag>);
        },
        width: '200px'
    }, {
        title: 'Дата документа',
        dataIndex: 'data',
        render: (text, row, index) => {
            return moment(row.createdAt).format("DD-MM-YYYY")
        }
    }, {
        title: "Действия",
        render: (text, row, index) => {
            return (
                <a href={row.name} download>Скачать</a >
            );
        }
    }
];

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
            <Table bordered={true} rowKey={'id'} dataSource={results} columns={columns}/>;
        </div>
    )
};