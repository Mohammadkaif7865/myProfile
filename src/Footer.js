import React, { useState } from 'react';
import "./Footer.css";
function Footer() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
                     in place of 'smooth' */
        });
    };
    window.addEventListener("scroll", toggleVisible);
    return (
        <>
            <footer>
                <div
                    className="float-b-t-t"
                    style={{ display: visible ? "inline" : "none" }}
                >
                    <h3>
                        <i className="bi bi-chevron-up" onClick={scrollToTop} style={{ position: "relative", top: "-13px", left: "-7px" }}></i>
                    </h3>
                </div>
                <div className="foot-ele" id="contacts">
                    <a href="https://github.com/Mohammadkaif7865" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://twitter.com/Mdkaif78605" target="_blank">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.mohammadkaif051197@gmail.com" target="_blank"><i className="bi bi-gmail"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100047805708813" target="_blank">
                        <i className="bi bi-meta"></i>
                    </a>
                    <a href="https://www.instagram.com/mohammadkaif403/" target="_blank">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-kaif-99aaba1b9/" target="_blank">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                <div className="foot-ele">
                    <p>
                         &copy; Copyright 2022, &#xae; All Rights Reserved. @ Mohammad kaif 0.0.1
                    </p>
                </div>
            </footer>
        </>
    )
}
export default Footer;