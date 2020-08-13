import React from 'react'
import { DatePicker, Space,Row, Col,Button } from 'antd';
import Navbar from '../other/Navbar';
const { RangePicker } = DatePicker;


function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}


function Booking(props) {
    return (
      <div>
            <Navbar setRole={props.setRole}/>
             
             <Row style={{justifyContent:"center", alignItems:'center'}}>
               <Col style={{backgroundColor:"burlywood", height:"90vh" }} span={14}>
                 <div>hello</div>
               </Col>
               <Col span={8}>
                 <Row style={{justifyContent:"center", alignItems:'center'}}>
                  <Space direction="vertical" size={12}>
                    <DatePicker showTime onChange={onChange} onOk={onOk} />
                  </Space>
                  </Row>
                  <Row style={{justifyContent:"center", alignItems:'center', marginTop:"10px"}}>
                  <Button type="primary" danger>Confirm</Button>
                  </Row>
              </Col>
          </Row>
      </div>
    )
}

export default Booking
