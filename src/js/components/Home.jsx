import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { spanStyle } from "./SecondsCounter";
import SecondsCounter from "./SecondsCounter";

// Styles
const divStyle = {
	display: "flex",
	justifyContent: "center",
	gap: "15px",
	background: "black",
	color: "white",
	padding: "20px",
	fontFamily: "Times New Roman, serif",
	fontSize: "5rem",
	fontWeight: "bold"
}

//create your first component
const Home = ({ ones, tens, hundreds, thousands, tenThousands, hundredThousands }) => {
	return (
		<div style={divStyle}>
			<span style={spanStyle}><FontAwesomeIcon icon={faClock} /></span>
			<SecondsCounter
				ones={ones}
				tens={tens}
				hundreds={hundreds}
				thousands={thousands}
				tenThousands={tenThousands}
				hundredThousands={hundredThousands}
			/>
		</div>
	);
};

export default Home;