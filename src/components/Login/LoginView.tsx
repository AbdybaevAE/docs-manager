import {Button, Col, Form, Input, Row} from "antd"
import React from "react"
import {LoginViewProps} from "./types";
export const LoginView = (props : LoginViewProps) => {
    const {onFormSubmit} = props;
    return (
        <Row style={{marginTop:200}} align="middle" justify="center">
            <Col>
                <Form
                    name="basic"
                    onFinish={onFormSubmit}
                    style={{
                    width: 300
                }}>
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            message: 'Введите U-шку'
                        }
                    ]}>
                        <Input placeholder="U-шка" size="large"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Введите пароль'
                        }
                    ]}>
                        <Input.Password placeholder="Пароль" size="large"/>
                    </Form.Item>
                    <Form.Item
                        name="role"
                        rules={[{
                            required: true,
                            message: 'Введите роль'
                        }
                    ]}>
                        <Input placeholder="U-шка" size="large"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Авторизоваться
                        </Button>
                    </Form.Item>

                </Form>

            </Col>
        </Row>

    )
}