import React, { useEffect, useState } from 'react'
import { Row, Spin, Space, Col } from 'antd';
import Navbar from '../other/Navbar';
import { withRouter } from 'react-router-dom'
import axios from '../../config/axios';


function StatusPending({ state, setRole }) {

    const [status, setStatus] = useState("pedding")
    useEffect(async () => {
        // console.log({ course_id: state.id, doctor_id: state.doctor_id })
        const booking = await axios.get('/booking', { course_id: state.id, doctor_id: state.doctor_id })
        setStatus(booking.data.status)
        console.log(booking.data)
        // console.log(setRole)
    }, [])

    useEffect(async()=>{
        
    },[status])
    return (
        <Row style={{ justifyContent: "center", width: "100vw" }}>
            <Col span={24}>
                <Row style={{ justifyContent: "end", width: "100vw" }}>
                    <Navbar setRole={setRole} />
                </Row>
                <Row style={{ justifyContent: "center", alignItems: "center" }}>
                    <Col span={24}>
                        <Row style={{ justifyContent: "center", alignItems: "center" }}>
                            <h1> STATUS : PENDING </h1>
                        </Row>
                        <Row style={{ justifyContent: "center", alignItems: "center" }}>
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

export default withRouter(StatusPending)






