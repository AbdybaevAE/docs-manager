import {Table, Tag} from "antd";
import moment from "moment";
import React from "react";
import {TSearchResult} from "../../api/search";
import { getBackendHost } from "../../common";
type Props = {
    results: TSearchResult[]
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
        render: (text : string, row : TSearchResult, index : number) => {
            const attributes : string[] = Object.values(row.attributes);
            return attributes.map((item : string, index) => <Tag key={index}>{item}</Tag>);
        },
        width: '200px'
    }, {
        title: 'Дата документа',
        dataIndex: 'data',
        render: (text, row, index) => {
            return moment(row.createdAt).format("DD-MM-YYYY")
        }
    }, 
    {
        title: "Действия",
        render: (text, row, index) => {
            const url = getBackendHost() + "/files/" + row.id;
            return (
                <a href={url} download>Скачать</a >
            );
        }
    }
];
export const DocsTable = (props : Props) => {
    const {results} = props;
    return (<Table bordered={true} rowKey={'id'} dataSource={results} columns={columns}/>);
}