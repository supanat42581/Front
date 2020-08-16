import React from 'react';
import { Form, Input, Button, Row, Col, Divider, notification, Select, DatePicker, TimePicker } from 'antd';
import Title from 'antd/lib/typography/Title';
import axios from "../../config/axios";
import moment from 'moment';
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
            await axios.post("/courses/", {
                name: values.name,
                price: values.price,
                catagory: values.catagory,
                image_url:values.image_url
            });
            console.log(values)

           
            notification.success({
                message: "สำเร็จ"
            });
            console.log(props.history.location)
            
            
        } catch (error) {
            notification.error({
                message: error.response?.data?.message || "มีบางอย่างผิดพลาด"
            });
        }
        props.history.push("/course");
        
    };

    return (
        <Row style={{ height: "100vh", width: "100vw" }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                
                <Row style={{ height: "90%", width: "90%" }} justify='center' align="middle">
                <h1>Add Course</h1> 
                <img src="https://image.flaticon.com/icons/svg/2799/2799222.svg" alt="addcourse" style={{ height: "80%", width: "80%" }}/>
                </Row>        
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                <Row style={{width:"50vw", height:"100vh"}} justify='center' align="middle">
                <Form justify='center' align="middle" {...formLayout} 
                onFinish={(values)=>onFinish(values)} >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            { required: true, message: "กรุณาใส่ชื่อด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>
                    
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[
                            { required: true, message: "กรุณาใส่ ราคาด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>

                    <Form.Item
                        name="catagory"
                        label="Catagory"
                        rules={[
                            { required: true, message: "กรุณาระบุประเภทด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>

                    <Form.Item
                        name="image_url"
                        label="Image_url"
                        rules={[
                            { required: true, message: "กรุณาใส่ลิงค์รูปด้วยนะครับ" }
                        ]}
                    >
                        <Input style={{ width: 210 }}/>
                    </Form.Item>
                   

                    <Row justify="end">
                        <Button htmlType="submit">เพิ่ม</Button>
                    </Row>
                </Form>
                </Row>
            </Col>
        </Row >
    );
}

export default withRouter(Register);