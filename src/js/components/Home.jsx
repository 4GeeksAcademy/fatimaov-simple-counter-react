import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Import component
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