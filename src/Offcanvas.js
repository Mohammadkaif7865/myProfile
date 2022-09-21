import React from 'react';
import "./Offcanvas.css";
import { Link } from 'react-router-dom';
import "./App.css";
function Offcanvas(props) {
    return (
        <>
            <div className="offcan" style={{ display: props.showOff }}>
                <i className="bi bi-x-lg cursor-point close-btn" onClick={() => props.changeShow("none")}></i>
                <h1>Mohammad kaif</h1>
                <Link to="/" onClick={() => props.changeShow("none")}><span>Home</span></Link>
                <Link to="/message" onClick={() => props.changeShow("none")}><span>Contact me</span></Link>
            </div>
        </>
    )
}
export default Offcanvas;