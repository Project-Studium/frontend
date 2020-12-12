import React from 'react'
import {Link} from 'react-router-dom'

import BackgroundImage from '../../assets/SUFOCO.jpg'
import Hat from '../../assets/Chapéu.svg'
import WaveOne from '../../assets/OndaUm.svg'
import WaveTwo from '../../assets/OndaDois.svg'

const HomePage = () => {
    return (
        <div>
            <img src={BackgroundImage} />
            <img src={Hat} />
            <img src={WaveOne} />
            <img src={WaveTwo} />
            <Link to='/signin'>fazer login</Link>
        </div>
    )
} 

export default HomePage