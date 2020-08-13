import React ,{useState,useEffect}from 'react'
import Navbar from '../other/Navbar'
import {withRouter} from 'react-router-dom'
import { Button, Row } from 'antd';
import { Link } from 'react-router-dom';
import axios from '../../config/axios';



function DoctorProfile(props) {
    const [getDoctor, setGetDoctor] = useState([])
// console.log(props)
    const fetchData = async()=>{
        
      const doctor =  await axios.get(`/doctor/${props.state.doctor_id}`)
    //   console.log(doctor)
    setGetDoctor (doctor.data)
    }

    // console.log(getCourse)
    
    useEffect(() => {
        fetchData()
    }, [])
   
    // props.history.push("/booking");
    return (
        <div>
            <div>
            <Navbar setRole={props.setRole}/>
            </div>
            <Row>
            <h1>this is DoctorProfile page</h1><br/>
            {getDoctor.name}<br/>
            {getDoctor.education}<br/>
            </Row>
            <Row>
            <Button type="primary" danger><Link to ="/course">Back</Link></Button>
            <Button type="primary" primary><Link to ="/booking">Confirm</Link></Button> 
            </Row>
        </div>
            
    )
}

export default withRouter(DoctorProfile)

