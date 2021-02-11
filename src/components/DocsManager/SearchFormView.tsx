import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select
} from "antd"
import React from "react"
import {TFormProps} from "./types";

const {Option} = Select;
export const SearchFormView = (props : TFormProps) => {
    const {onFinish} = props;
    return (
        <Form onFinish={onFinish}>
            <Row>
                <Col offset={1} span={7}>
                    <Form.Item label="Номер документа" name="docNumber">
                        <Input placeholder="Введите номер документа"/>
                    </Form.Item>
                </Col>
                <Col offset={1} span={6}>
                    <Form.Item label="Класс документа" name="docClass">
                        <Input placeholder="Введите класс документа"/>
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
                        <Input placeholder="Введите организацию"/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.List name="attributes">
                {(fields, {add, remove}) => {
                    return (
                        <div>
                            {fields.map((field, index : number) => (
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
                                    <Col offset={1}>
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => remove(index)}>
                                                Удалить атрибут
                                            </Button>
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
            <Row>
                <Col offset={4}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Поиск
                        </Button>
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    )
}