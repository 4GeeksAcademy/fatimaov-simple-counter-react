import React from "react";

// Styles
const spanStyle = {
    backgroundColor: "#ffffff15",
    borderRadius: "10px",
    padding: "0 15px",
    borderLeft: "2px solid #ffffff5e",
    borderRight: "2px solid #ffffff5e"
}

function SecondsCounter(props) {

    return (
        <>
            {
                Object.values(props).reverse().map((prop) => {
                    return <span style={spanStyle}>{prop}</span>
                })
            }
        </>
    )
}

export default SecondsCounter;
export { spanStyle };