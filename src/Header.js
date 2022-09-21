import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
function Header(props) {
    return (
        <>
            <div className="head">
                <h1>Mohammad Kaif</h1>
                <div className="right-head">
                    <Link to="/"><span>Home</span></Link>
                    <Link to="/message"><span>Contact me</span></Link>
                    <h1 className='headBars cursor-point'>
                        <i className="bi bi-list" onClick={() => props.changeShow("block")}></i>
                    </h1>
                </div>
            </div>

        </>
    )
}
export default Header;