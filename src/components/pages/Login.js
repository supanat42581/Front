import React from 'react';
import { Form, Input, Button, Row, Col, Divider, notification } from 'antd';
import Title from 'antd/lib/typography/Title';
import { withRouter } from "react-router-dom";
import axios from '../../config/axios'
import LocalStorageService from '../../services/LocalStorageService'



const layout = {
    labelCol: { xs: 24, sm: 5, md: 6, lg: 6, xl: 6, xxl: 6 },
    wrapperCol: { xs: 24, sm: 19, md: 18, lg: 18, xl: 18, xxl: 18 },
};



function Login(props) {

const onFinish = values => {
    const body = {
        username: values.username,
        password: values.password
    };
    axios.post("/user/login", body)
        .then(result => {
            // console.log(result.data.accessToken)
            LocalStorageService.setToken(result.data.accessToken);
            props.setRole("user");
        })
        .catch(err => {
            notification.error({
                message: `การเข้าสู่ระบบล้มเหลว`,
            });
        });
};

    return (
        <Row className="login_background" >
            <Col  className="container" xs={23} sm={23} md={14} lg={14} xl={14} xxl={12} >
                <div className="Form" >
                    <Row justify="center">
                        <Title level={2} className="Title">
                            Login
                    </Title>
                    </Row>
                    <Divider className="Divider" />
                    <Form
                        className="App"
                        {...layout}
                        onFinish={onFinish}
                   
                        style={{ width: "100%" }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Button className="Button" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}

export default withRouter(Login)
