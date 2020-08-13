import React from 'react'
import Navbar from '../other/Navbar'

function Cart(props) {
    return (
        <div>
            <Navbar setRole={props.setRole}/>
             <h1>this is cart page</h1>
        </div>
    )
}

export default Cart
