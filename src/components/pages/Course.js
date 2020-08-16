import React,{useEffect, useState, useContext} from 'react'
import Navbar from '../other/Navbar'
import { Carousel,Card, Row, Col,Typography, Space } from 'antd';
import axios from '../../config/axios'
import {CheckCircleTwoTone } from '@ant-design/icons';
import {withRouter} from 'react-router-dom';
import {SearchContext} from '../../context/SearchContext'


const contentStyle = {
    height: '90vh',
    width: '100vw',
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#364d79',
  };
const { Meta } = Card;




function Course(props) {
const { Text } = Typography;
const {searchTerm, setSearchTerm} = useContext(SearchContext);   
const [getCourse, setGetCourse] = useState([])


console.log(searchTerm)

const toDoctorProfile=(item)=>{
    props.setState(item)
    localStorage.setItem("course", JSON.stringify (item))
    props.history.push('/doctorprofile')
}
 



useEffect(() => {
const fetchData = async()=>{
   const getCourse = await axios.get(`/courses/search/?name=${searchTerm}`)
   setGetCourse (getCourse.data)
  
}
    fetchData()
}, [searchTerm])

    return (
        <Row>
            <Col span ={24}>
        <div style={{height:"90vh" }}>
            <Navbar setRole={props.setRole}/>
            <Row style={{display:"flex",justifyContent:"center"}}>
                <Col span={23} >
            <Carousel autoplay style={{height:"100vh" ,width:"100%",   }}>
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
                </Col>
            </Row>
            <br/>
            <br/>
            <Row style={{justifyContent:"center"}}>
            <Text code style={{justifyContent:"center", fontSize:"30px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Course&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            </Row>
            <Row gutter={23} style={{ padding: "10px 10px 10px 10px ", backgroundColor: "white",display:"flex",justifyContent:"center"}}>
                    
                      {getCourse.map((item,idx)=>
                        <Col className="gutter-row" key ={idx} span={6} style={{ width:"200px" }} >
                         <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src={item.image_url} style={{height:"200px"}} />}
                            ><Meta title={item.name} description={item.catagory}  />
                                <p>{item.price}</p>
                            <br/>
                            <button onClick={() => toDoctorProfile(item)}> Contact Doctor <CheckCircleTwoTone twoToneColor="#52c41a" /></button>
                         </Card>
                         </Col>)}
            </Row>
        </div>
            </Col>
        </Row>
    )
}

export default withRouter (Course)
