import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

let seconds = 0;
setInterval(() => {
    const placeValue = [...seconds.toString()].reverse();
    root.render(
        <Home
            ones={placeValue[0] || 0}
            tens={placeValue[1] || 0}
            hundreds={placeValue[2] || 0}
            thousands={placeValue[3] || 0}
            tenThousands={placeValue[4] || 0}
            hundredThousands={placeValue[5] || 0}
        />
    )
    seconds++;
}
    , 1000);

