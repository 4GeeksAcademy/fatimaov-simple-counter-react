import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

// Styles
const spanStyle = {
    backgroundColor: "#ffffff15",
    borderRadius: "10px",
    padding: "0 15px",
    borderLeft: "2px solid #ffffff5e",
    borderRight: "2px solid #ffffff5e"
}

function SecondsCounter({ ones, tens, hundreds, thousands, tenThousands, hundredThousands }) {
    
    return (
        <>
            <span style={spanStyle}><FontAwesomeIcon icon={faClock} /></span>
            <span style={spanStyle}>{hundredThousands}</span>
            <span style={spanStyle}>{tenThousands}</span>
            <span style={spanStyle}>{thousands}</span>
            <span style={spanStyle}>{hundreds}</span>
            <span style={spanStyle}>{tens}</span>
            <span style={spanStyle}>{ones}</span>
        </>
    )
}

export default SecondsCounter;