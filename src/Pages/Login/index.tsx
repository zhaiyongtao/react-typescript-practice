/**
 * index$ - 登录页面
 * @Author: BuzzLightyear.Z
 * @Email: yongtao.di@hand-china.com
 * @Date: 2020/10/26 6:23 下午
 * @LastEditTime: 2020/10/26 6:23 下午
 * @Copyright: Copyright (c) 2020, Hand
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'

const NormalLoginForm = () => {
    const [form]  = Form.useForm()
    const onFinish = async (values :any) => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
        console.log('Received values of form: ', values);
    };

    return (
        <div className="login-page">
            <Form
                name="normal_login"
                className="login-form"
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default NormalLoginForm;
