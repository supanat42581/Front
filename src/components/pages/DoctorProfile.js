import React, { useState, useEffect } from 'react'
import Navbar from '../other/Navbar'
import { withRouter } from 'react-router-dom'
import { Button, Row,Col,Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import axios from '../../config/axios';



function DoctorProfile(props) {
    
    const { Text } = Typography;

    const [getDoctor, setGetDoctor] = useState([])
    // console.log(props)
    const fetchData = async () => {
        const state = JSON.parse(localStorage.getItem("course"))
        const doctor = await axios.get(`/doctor/${state.doctor_id}`)
        //   console.log(doctor)
        setGetDoctor(doctor.data)
    }

    // console.log(getCourse)

    useEffect(() => {
        fetchData()
    }, [])

    // props.history.push("/booking");
    return (
        <div>
            <div>
                <Navbar setRole={props.setRole} />
            </div>
            <br/>
            <Row style={{justifyContent:"center", alignItems:"center"}}>
                <Col span={22}>
                    <Row>
                        <Col span={12}>
                        <img src= {getDoctor.image_url} style={{ width: "550px", height: "400px" }} />
                        </Col>
                        <Col span={10}>
                            <Row>
                                <Text keyboard>DOCTOR :</Text> <br/>
                                <h3>{getDoctor.name}</h3>
                            </Row>
                            <Row>
                            <Text keyboard>EDUCATION / SPECIALIST  :</Text><h3>{getDoctor.education}</h3> &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem Ipsum is simply 
                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply 
                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum. 
                            </Row>
                        </Col> 
                    </Row>
                </Col>
            </Row>
                <Row style={{justifyContent:"center", alignItems:"center" ,height:"100px"}}>
                    <Button type="primary" danger><Link to="/course">Back</Link></Button>
                    <Button type="primary" primary style={{marginLeft:"15px"}}><Link to="/booking">Confirm</Link></Button>
                </Row>
        </div>

    )
}

export default withRouter(DoctorProfile)

