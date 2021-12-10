import React from 'react'
import './CSS/Second.css'

const Second = (props) => {
    return (
        <div className="con">
            <div className="SS">
                <img className="ad" src={props.img1} alt="img" />
            </div>
            <div className="SS">
                <img className="ad" src={props.img2} alt="img" />
            </div>
            <div className="SS">
                <img className="ad" src={props.img3} alt="img" />
            </div>
            <br />
            <span className="SS" id="ad1"> {props.name1}</span>
            <span className="SS" id="ad2"> {props.name2}</span>
            <span className="SS" id="ad3"> {props.name3}</span>
            <br />
            <span className="SS" id="ad1">Price: {props.price1}</span>
            <span className="SS" id="ad2">Price: {props.price2}</span>
            <span className="SS" id="ad3">Price: {props.price3}</span>
        </div>

    )
}

export default Second
