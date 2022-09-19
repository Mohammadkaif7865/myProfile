import React from 'react';
import "./Header.css";
function Header(props) {
    return (
        <>
            <div className="head">
                <h1>Mohammad Kaif</h1>
                <div className="right-head">
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact me</span>
                    <h1 className='headBars cursor-point'>
                        <i className="bi bi-list" onClick={() => props.changeShow("block")}></i>
                    </h1>
                </div>
            </div>

        </>
    )
}
export default Header;