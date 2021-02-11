import {Button, Form, Input} from "antd"
import React from "react"
import { LoginViewProps } from "./types";

export const LoginView = (props : LoginViewProps) => {
    const {onFormSubmit} = props;
    return (
        <Form name="basic" onFinish={onFormSubmit}>
            <Form.Item
                name="username"
                rules={[{
                    required: true,
                    message: 'Введите U-шку'
                }
            ]}>
                <Input size="large"/>
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
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Авторизоваться
                </Button>
            </Form.Item>

        </Form>

    )
}