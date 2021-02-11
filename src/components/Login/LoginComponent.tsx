import {
    Form,
    Input,
    Button,
    Checkbox,
    Row,
    Col,
    Divider
} from 'antd';
import {useHistory} from 'react-router-dom'
import React from 'react';
import {AuthService} from '../../api/auth-service';
import {setToken} from '../../utils/cookies';

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};
type TLoginForm = {
    username: string;
    password: string;
}
export const LoginComponent = () => {
    const history = useHistory();

    const onFinish = async(values : TLoginForm) => {
        const res = await AuthService.makeLogin(values);
        if (res.isError()) {
            // ...
            return;
        }
        setToken(res.value.token);
        history.push('/search');

    };

    const onFinishFailed = (errorInfo : any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Divider
            // justify="center"
            // align="middle"
            style={{
            minHeight: '100vh'
        }}>
            <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
        </Divider>
    );
};