import React, { useEffect, useState } from 'react'
import Navbar from '../other/Navbar'
import axios from '../../config/axios';
import { Carousel, Card, Row, Col, Button,Typography, Space } from 'antd';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { convertLegacyProps } from 'antd/lib/button/button';

function DoctorConfirm(props) {
    // const {state} = props

    // const [getCourse, setGetCourse] = useState({})
    const { Meta } = Card;
    const { Text } = Typography;
    const [courses, setCourses] = useState([])


    const fetchData = async () => {

        try {
            const courses = await axios.get(`/booking/doctor`)
            setCourses(courses.data[0])


        } catch (err) {
            console.log(err.message)
        }


        //    setGetCourse({...getCourse.data, ...book.data[0]})
        //    setGetDoctor(book.data[0].Doctor)
        // console.log(getCourse)

    }
    // console.log(getCourse)

    const deleteOrder = async (bookingId) => {
        // console.log(1)
        try {
            const targetOrder = await axios.delete(`/booking/${bookingId}`)
            
            // console.log(targetOrder)
            fetchData()
        } catch (err) {
            console.log(err.message)
        }


    }

    useEffect(() => {
        fetchData()
    }, [])





    return (

        <Row style={{height:"100vh", width:"100vw"}}>
            <Col span={24}>
                <Row >
                    <Col span={24}>
                        <div> <Navbar setRole={props.setRole} /></div>
                    </Col>
                <Row style={{display:"flex", justifyContent:"center"}}>
                    <Col span ={24}>
                    <div>CART</div>
                    </Col>
                </Row>
                </Row>
                <Row>
                    {courses.map(course => (
                        <Col span={24} >
                            <div style={{justifyContent:"center", alignItems:"middle", marginTop:"30px"}}>
                                
                                <Card
                                    hoverable
                                    style={{ display:"flex" ,width: "100vw"}}
                                    cover={<div><img alt="example" src={course.image} style={{height:"200px", width:"80%" ,margin:"20px"}}/></div>

                                         }
                                >
                                    <Meta style={{ display:"flex" ,width: "50vw"}} />
                                


                                <div style={{backgroundColor: "OldLace", height: "80%", width: "100%",display:"flex" , flexDirection:"column", justifyContent:"flex-start" }}>
                                  
                                <div style={{marginTop:"20px"}}><Text keyboard>Course Name : </Text> {course.COURSE_NAME}</div>
                                <div><Text keyboard>Price : </Text>{course.course_price}<br/></div>
                                <div><Text keyboard> Doctor name : </Text>{course.doctor_name}<br/></div>
                                <div><Text keyboard>Date : </Text>{course.BOOKING_DATE.slice(0, 10)}<br/></div>
                                <div><Text keyboard>Time : </Text>{course.BOOKING_DATE.slice(11, -5)}<br/></div>
                                
                                </div>
                                    <br />
                                    
                                    <div style={{display:"flex" ,justifyContent:"center"}}>
                                    <button onClick={() => deleteOrder(course.BOOKING_ID)}>DELETE</button>
                                    </div>
                                
                                </Card>
                            </div>


                        </Col>
                    ))}
                </Row>
                                     <br />
                                    <br /> 
                <Row style={{justifyContent:"center"}}>
                    <Col span={4}>
                        <Button type="primary" danger><Link to="/course">Back To Home</Link></Button>
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}

export default withRouter(DoctorConfirm)
