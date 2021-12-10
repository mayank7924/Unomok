import React from 'react'
import chair from './imgs/chair.jpg'
import './CSS/First.css'

const First = () => {
    return (
        <span>
            <img src={chair} alt="chairimg" />
            <p>Buy Chairs and Stools.
                Arm chair upholstered in synthetic leader. <br />
                Power Coated Steel.
                <br />
                <button className="btn"> Shop Now </button>
            </p>
        </span>
    )
}

export default First
