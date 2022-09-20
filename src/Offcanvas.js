import React from 'react';
import "./Offcanvas.css";
import "./App.css";
function Offcanvas(props) {
    return (
        <>
            <div className="offcan" style={{ display: props.showOff }}>
                <i className="bi bi-x-lg cursor-point close-btn" onClick={() => props.changeShow("none")}></i>
                <h1>Mohammad kaif</h1>
                <h3>Home</h3>
                <h3>Contact me</h3>
            </div>
        </>
    )
}
export default Offcanvas;