import React from 'react';
import "./Footer.css";
function Footer() {
    return (
        <>
            <footer>

                <div class="foot-ele" id="contacts">
                    <a href="https://github.com/Mohammadkaif7865" target="_blank">
                    <i class="bi bi-github"></i>
                    </a>
                    <a href="https://twitter.com/Mdkaif78605" target="_blank">
                    <i class="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.mohammadkaif051197@gmail.com" target="_blank"><i class="bi bi-gmail"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100047805708813" target="_blank">
                    <i class="bi bi-meta"></i>
                    </a>
                    <a href="https://www.instagram.com/mohammadkaif403/" target="_blank">
                    <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-kaif-99aaba1b9/" target="_blank">
                    <i class="bi bi-linkedin"></i>
                    </a>
                </div>
                <div class="foot-ele">
                    <p>
                        <sup>&copy;</sup>Copyright 2022, <sup>&#xae;</sup>All Rights Reserved. @ Mohammad kaif 0.0.1
                    </p>
                </div>
            </footer>
        </>
    )
}
export default Footer;