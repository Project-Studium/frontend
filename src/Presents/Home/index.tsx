import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
           <h1>HomePage Studium</h1> 
            <Link to='/signin'>fazer login</Link>
        </div>
    )
} 

export default HomePage