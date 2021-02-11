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
import {TSearchResult} from '../../api/search-service';
import {TableViewResults} from './Table';
const {Option} = Select;
type Atribute = {
    key: string;
    value: string;
}
type TForm = {
    docNumber: string;
    docType: string;
    docClass: string;
    docOrg: string;
    attributes: Atribute[];
}
type TProps = {
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
        key: 'atributes'
    }, {
        title: 'Дата',
        dataIndex: 'data',
        key: 'data'
    }
];

export const DocsManagerView = (props : TProps) => {
    const history = useHistory();
    const onLogout = () => {
        clearToken();
        history.push('/');
    };
    const onFinish = (values : TForm) => {
        const data : {
            [name : string] : string
        } = {};
        if (values.docNumber != null) 
            data["number"] = values.docNumber;
        if (values.docClass != null) 
            data["class"] = values.docClass;
        if (values.docOrg != null) 
            data["organization"] = values.docOrg;
        if (values.docType != null) 
            data["type"] = values.docType;
        
        (values.attributes || []).forEach(item => data[item.key] = data[item.value]);

    }

    return (
        <div>
            <Button onClick={onLogout}>Выход</Button>
            <div>
                <Form onFinish={onFinish}>
                    <Row>
                        <Col offset={1} span={7}>
                            <Form.Item label="Номер документа" name="docNum">
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col offset={1} span={6}>
                            <Form.Item label="Класс документа" name="docClass">
                                <Input/>
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row>
                        <Col offset={1} span={7}>
                            <Form.Item name="docType" label="Тип документы">
                                <Select placeholder="тип документа">
                                    <Option value="first">Первый тип</Option>
                                    <Option value="second">Второй тип</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col offset={1} span={6}>
                            <Form.Item label="Организация" name="docOrganization">
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.List name="attrs">
                        {(fields, {add, remove}) => {
                            return (
                                <div>
                                    {fields.map((field, index) => (
                                        <Row key={field.key}>
                                            <Col offset={5}>
                                                <Form.Item name={[index, "key"]} label="Ключ">
                                                    <Input placeholder="введите ключ"/>
                                                </Form.Item>
                                            </Col>
                                            <Col offset={1}>
                                                <Form.Item name={[index, "value"]} label="Значение">
                                                    <Input placeholder="введите значение"/>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    ))}
                                    <Row>
                                        <Col offset={10}>
                                            <Form.Item>
                                                <Button type="dashed" onClick={() => add()}>
                                                    Добавить атрибут
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </div>
                            )
                        }}
                    </Form.List>
                    <Form.Item labelCol={{
                        offset: 3
                    }}>
                        <Button type="primary" htmlType="submit">
                            Поиск
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <div>
                <Table dataSource={props.results} columns={columns}/>;
                <Loader type="line-scale" active />
            </div>
        </div>
    )
};