import React from 'react';
import { withRouter } from 'react-router-dom';
import { DatePicker, Form, TimePicker, Row, Col, Button } from 'antd';
import Navbar from '../other/Navbar';
import axios from '../../config/axios';

const { RangePicker } = DatePicker;

function Booking({state}, ...props) {
 
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };

  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Please select time!',
      },
    ],
  };
  
  const onFinish = async fieldsValue => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];
    const values = {
      ...fieldsValue,
      'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
      
        }
  console.log(state.doctor_id)
          const book = await axios.post('/booking/',{
              date : values["date-time-picker"],
            course_id : state.id,
            doctor_id : state.doctor_id
            })

             console.log(book)
          }


     
     
        

    

    return (
      <div>
        <Navbar setRole={props.setRole} />
        <Row style={{ justifyContent: "center", alignItems: 'center' }}>
          <Col style={{ backgroundColor: "burlywood", height: "90vh" }} span={14}>
            <div>hello</div>
          </Col>
          <Col span={8}>
            <Row style={{ justifyContent: "center", alignItems: 'center' }}>
              <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
                
                <Form.Item name="date-time-picker" label="DatePicker[showTime]" {...config}>
                  <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                </Form.Item>
              
                <Form.Item
                  wrapperCol={{
                    xs: {
                      span: 24,
                      offset: 0,
                    },
                    sm: {
                      span: 16,
                      offset: 8,
                    },
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Row>
            <Row style={{ justifyContent: "center", alignItems: 'center', marginTop: "10px" }}>
              
            </Row>
          </Col>
        </Row>
      </div>
    )
  }

export default withRouter(Booking);