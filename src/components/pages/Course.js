import React,{useEffect, useState} from 'react'
import Navbar from '../other/Navbar'
import { Carousel,Card, Row, Col } from 'antd';
import axios from '../../config/axios'
import {CheckCircleTwoTone } from '@ant-design/icons';
import {withRouter} from 'react-router-dom';

const contentStyle = {
    height: '50vh',
    width: '100vw',
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#364d79',
  };
const { Meta } = Card;




function Course(props) {

const [getCourse, setGetCourse] = useState([])

const fetchData = async()=>{
   const getCourse = await axios.get("/course/")
   setGetCourse (getCourse.data)


}
console.log(getCourse)

const toDoctorProfile=(item)=>{
    props.setState(item)
    props.history.push('/doctorprofile')
}

useEffect(() => {
    fetchData()
}, [])

    return (
        <div style={{height:"100vh" }}>
            <Navbar setRole={props.setRole}/>
            <Carousel autoplay style={{height:"300px" ,width:"100%" }}>
                    <div >
                    <img src="https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" style={contentStyle}/>
                    </div>
                    <div>
                    <img src="https://images.unsplash.com/photo-1491510736257-3ad769ff47b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" style={contentStyle}/>
                    </div>
                    <div>
                    <img src="https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" style={contentStyle}/>
                    </div>
                    <div>
                    <img src="https://images.unsplash.com/photo-1466193341027-56e68017ee2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" style={contentStyle}/>
                    </div>
            </Carousel>
            <br/>
            <br/>
            <Row gutter={24} style={{ padding: "10px 10px 10px 10px ", backgroundColor: "white"}}>
                      {getCourse.map((item,idx)=>
                        <Col className="gutter-row" key ={idx} span={6} style={{ width:"200px" }} >
                         <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{height:"200px"}} />}
                            ><Meta title={item.name} description={item.catagory}  />
                                <p>{item.price}</p>
                            <br/>
                            <button onClick={() => toDoctorProfile(item)}> Contact Doctor <CheckCircleTwoTone twoToneColor="#52c41a" /></button>
                         </Card>
                         </Col>)}
                    </Row>
        </div>
    )
}

export default withRouter (Course)
