import React, { useEffect, useState } from 'react'
import Navbar from '../other/Navbar'
import axios from '../../config/axios';
import { Carousel, Card, Row, Col, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { convertLegacyProps } from 'antd/lib/button/button';

function Cart(props) {
    // const {state} = props

    // const [getCourse, setGetCourse] = useState({})
    const [cart, setCart] = useState([])



    const fetchData = async () => {

        try {
            const book = await axios.get(`/booking/`)
            setCart(book.data)

        } catch (err) {
            console.log(err.message)
        }


        //    setGetCourse({...getCourse.data, ...book.data[0]})
        //    setGetDoctor(book.data[0].Doctor)
        // console.log(getCourse)

    }
    // console.log(getCourse)

    const deleteOrder = async (course_id, doctor_id) => {
        console.log(course_id, doctor_id)
        try {
            const targetOrder = await axios.delete(`/booking/${doctor_id}/${course_id}`)
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
                </Row>
                <Row>
                    {cart.map(book => (
                        <Col span={12}>
                            <div>
                                <div style={{ backgroundColor: "OldLace", height: "80vh", width: "100vw", justifyContent: "start" }}>
                                    <h1>CART</h1>
                                    <h3>Course Name : {book.Course.name}</h3>
                                    <h3>Price : {book.Course.price}</h3>
                                    <h3>Doctor name : {book.Doctor.name}</h3>
                                    <h3>Doctor Education : {book.Doctor.education}</h3>
                                    <h3>Date : {book.date.slice(0, 10)}</h3>
                                    <h3>Time : {book.date.slice(11, -5)}</h3>
                                    <img src={book.Course.image_url} style={{ width: "300px", height: "200px" }} />
                                    <br />
                                    <br />
                                    <button onClick={() => deleteOrder(book.Course.id, book.Doctor.id)}>DELETE</button>

                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col span={24}>
                        <Button type="primary" danger><Link to="/course">X</Link></Button>
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}

export default withRouter(Cart)
