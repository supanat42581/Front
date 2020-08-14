import React from 'react';
import { withRouter } from 'react-router-dom';
import { DatePicker, Form, TimePicker, Row, Col, Button } from 'antd';
import Navbar from '../other/Navbar';
import axios from '../../config/axios';
import { Link } from 'react-router-dom';
const { RangePicker } = DatePicker;


function Booking(props) {
  // const {state} = props

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
    console.log("submit")
    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];
    const values = {
      ...fieldsValue,
      'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),

    }
   
   const state = JSON.parse(localStorage.getItem("course"))
   console.log(state)
    const book = await axios.post('/booking/', {
      date: values["date-time-picker"],
      course_id: state.id,
      doctor_id: state.doctor_id,
      status: "pending"
    })

    console.log(book)
    props.history.push('/cart')
  }









  return (
    <div>
      <Navbar setRole={props.setRole} />
      <Row style={{ justifyContent: "center", alignItems: 'center' }}>
        <Col style={{ height: "93vh" }} span={14}>
          <img alt="consult" src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" style={{ height: "100%", width: "90%" }} />
        </Col>
        <Col span={8}>
          <Row style={{ justifyContent: "center", alignItems: 'center' }}>
            <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>

              <Form.Item name="date-time-picker" label="Select Time" {...config}>
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
                <Button type="primary" htmlType="submit" >
                  Submit
                    {/* <Link to="/cart">Submit</Link> */}
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