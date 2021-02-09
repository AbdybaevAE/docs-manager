import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import React from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

export const LoginComponent = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    // <Row type= "">
    <Row justify="center" align="middle" style={{minHeight: '100vh'}}>
        <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите U-шку',
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите пароль',
          },
        ]}
      >
        <Input.Password placeholder="Пароль" size="large" />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item> */}

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Авторизоваться
        </Button>
      </Form.Item>
    </Form>
    </Row>
    );
};