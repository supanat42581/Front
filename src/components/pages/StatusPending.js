import React from 'react'
import { Row, Spin, Space, Col } from 'antd';
import Navbar from '../other/Navbar';



function StatusPending(props) {
    return (
        <Row style={{justifyContent:"center" ,width:"100vw"}}>
            <Col span={24}>
        <Row style={{justifyContent:"end" ,width:"100vw"}}>
            <Navbar setRole={props.setRole}/>
        </Row>
        <Row style={{justifyContent:"center" , alignItems:"center" }}>
            <Col span={24}>
            <Row style={{justifyContent:"center" , alignItems:"center" }}>
                <h1> STATUS : PENDING </h1>
            </Row>
            <Row style={{justifyContent:"center" , alignItems:"center" }}>
                <Space size="middle">
                    <Spin size="large" />
                </Space>
            </Row>
            </Col>
        </Row>
            </Col>
        </Row>
    )
}

export default StatusPending



  

  
