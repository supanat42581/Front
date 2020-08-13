import React ,{useState,useEffect}from 'react'
import Navbar from '../other/Navbar'

function DoctorProfile(props) {
    const [getDoctor, setGetDoctor] = useState([])

    const fetchData = async()=>{
    //    const getCourse = await axios.get("/doctor/")
    setGetDoctor (props.state)
    
    
    }
    // console.log(getCourse)
    
    useEffect(() => {
        fetchData()
    }, [])
   

    return (
        <div>
            <Navbar setRole={props.setRole}/>
            <h1>this is DoctorProfile page</h1>
            {getDoctor.name}
        </div>
    )
}

export default DoctorProfile

