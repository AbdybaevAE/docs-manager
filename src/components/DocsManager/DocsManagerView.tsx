import {Button, Col, Row} from 'antd';
import React from 'react';
import {SearchArgs, TSearchResult} from '../../api/search';
import {DocsTable} from './DocsTable';
import {TFormData} from './types';
import {SearchFormView} from './SearchFormView';

type TProps = {
    results: TSearchResult[],
    doSearch: (data : SearchArgs) => void;
    onFormSubmit: (data : TFormData) => void;
    onLogout: () => void;
}

export const DocsManagerView = (props : TProps) => {
    const {onFormSubmit, results, onLogout} = props;
    return (
        <div>
            <SearchFormView onFinish={onFormSubmit}/>
            <DocsTable results={results}/>
        </div>
    )
};