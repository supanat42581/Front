import React from 'react'
import Navbar from '../other/Navbar'

function DoctorConfirm(props) {
    return (
        <div>
            <Navbar setRole={props.setRole}/>
            <h1>this is DoctorProfile page</h1>
        </div>
    )
}

export default DoctorConfirm
