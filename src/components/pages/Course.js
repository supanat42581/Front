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
                    <img src="https://images.unsplash.com/photo-1597123142966-4ce237ab1289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" style={contentStyle}/>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>4</h3>
                    </div>
            </Carousel>

            

            <h1>this is course page</h1>
            
            <Row gutter={24} style={{ padding: "10px 10px 10px 10px ", backgroundColor: "white"}}>
                      {getCourse.map((item,idx)=>
                        <Col className="gutter-row" key ={idx} span={8} style={{ paddingRight: "5px",paddingLeft: "20px" }} >
                         <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
