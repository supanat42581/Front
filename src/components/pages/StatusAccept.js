import React from 'react'
import Navbar from '../other/Navbar'

function StatusAccept(props) {
    return (
        <div>
            <Navbar setRole={props.setRole}/>
            <h1>this is StatusAccept page</h1>
        </div>
    )
}

export default StatusAccept
