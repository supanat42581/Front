import React from 'react';
import { Form, Input, Button, Row, Col, Divider, notification, Select, DatePicker, TimePicker } from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from "../../config/axios";
import moment from 'moment';
import register from '../picture/register.jpg'
import { withRouter } from "react-router-dom";

// const { Option } = Select;
// function handleChange(value) {
//     console.log(`selected ${value}`);
//   }


// const { RangePicker } = DatePicker;
// const dateFormat = 'YYYY/MM/DD';


const formLayout = {
    labelCol: { xs: 24, sm: 24, md: 10, lg: 10, xl: 10 },
    wrapperCol: { xs: 24, sm: 24, md: 13, lg: 13, xl: 13 },
};

function Register(props) {

      


    const onFinish = async (values) => {
        try {
            await axios.post("/user/register", {
                username: values.username,
                password: values.password,
                name: values.name,
                email:values.email,
                tel:values.tel,
                sex:values.sex,
                birthdate:values.birthdate,
                role:values.role || "Patient"
                
            });
            console.log(values)

           
            notification.success({
                message: "สมัครสำเร็จ"
            });
            console.log(props.history.location)
            
            
        } catch (error) {
            notification.error({
                message: error.response?.data?.message || "มีบางอย่างผิดพลาด"
            });
        }
        props.history.push("/login");
        
    };

    return (
        <Row style={{ height: "100vh", width: "100vw" }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                <Row justify='center' align="middle">
                <h1>Sign Up</h1>    
                </Row>
                <Row style={{ height: "90%", width: "90%" }} justify='center' align="middle">
                <img src={register} alt="register" style={{ height: "90%", width: "100%" }}/>
                </Row>        
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                <Row style={{width:"50vw", height:"100vh"}} justify='center' align="middle">
                <Form justify='center' align="middle" {...formLayout} 
                onFinish={(values)=>onFinish(values)} >
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                            { required: true, message: "กรุณาใส่ Username ด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            { required: true, message: "กรุณาใส่ Password ด้วยครับ" }
                        ]}
                        hasFeedback
                    >
                        <Input.Password style={{ width: 210 }}/>
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            { required: true, message: "กรุณายืนยันรหัสผ่าน" },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("รหัสผ่านทั้งสองต้องตรงกัน");
                                }
                            })
                        ]}
                    >
                        <Input.Password style={{ width: 210 }}/>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            { required: true, message: "กรุณาใส่ ชื่อด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { required: true, message: "กรุณาใส่อีเมล์ด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>
                    <Form.Item
                        name="tel"
                        label="Tel"
                        rules={[
                            { required: true, message: "กรุณาใส่เบอร์โทรด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>
                    <Form.Item
                        name="sex"
                        label="Sex"
                        rules={[
                            { required: true, message: "กรุณาใส่เพศด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>

                    <Form.Item
                        name="birthdate"
                        label="birthdate"
                        rules={[
                            { required: true, message: "กรุณาใส่วันเกิดด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>
                    {/* <Form.Item
                        name="birthdate"
                        label="Birthdate" 
                        rules={[
                            { required: true, message: "กรุณาใส่วันเกิดด้วยนะครับ" }
                        ]}
                    >
                       <DatePicker style={{ width: 210 }} defaultValue={moment('2020/08/12', dateFormat)} format={dateFormat} />
                    </Form.Item> */}
                   
                    <Form.Item
                        name="role"
                        label="role"
                        rules={[
                            { required: true, message: "กรุณาใส่ด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>

                    {/* <Form.Item
                        name="role"
                        label="Role"
                        rules={[
                            { required: true, message: "กรุณาระบุด้วยนะครับ" }
                        ]}
                    >
                    <Select defaultValue="Patient" style={{ width: 210 }} onChange={handleChange}>
                    <Option value="Patient">Patient</Option>
                    <Option value="Doctor">Doctor</Option>
                    </Select>
                    </Form.Item> */}

                    <Row justify="end">
                        <Button htmlType="submit">ลงทะเบียน</Button>
                    </Row>
                </Form>
                </Row>
            </Col>
        </Row >
    );
}

export default withRouter(Register);