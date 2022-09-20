import React, { useEffect, useState } from 'react';
import "./Home.css"
import Typewriter from "typewriter-effect";
function Home(props) {
    const [index, setIndex] = useState(4);
    const [bnb, setBNB] = useState("");
    const [btc, setBTC] = useState("");
    const [eth, setETH] = useState("");
    let hideShow = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 121 && index > 0) {
            setIndex(0);
        } else if (scrolled <= 121 && index === 0) {
            setIndex(4);
        }
        // console.log(scrolled);
        // ! What is going on here
    };
    useEffect(() => {
        window.addEventListener("scroll", hideShow);
        setInterval(() => {
            fetch("https://www.binance.com/api/v3/ticker/price?symbol=BNBUSDT", { method: "GET" })
                .then(response => response.json())
                .then(data => setBNB(data.price))
            fetch("https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT", { method: "GET" })
                .then(response => response.json()).then(data => setBTC(data.price))
            fetch("https://www.binance.com/api/v3/ticker/price?symbol=ETHUSDT", { method: "GET" })
                .then(response => response.json()).then(data => setETH(data.price))
        }, 1000);
    }, []);
    return (
        <>
            <div className="imageSet" style={{ zIndex: index }}>
                <div className="headh">
                    <h1>Mohammad Kaif</h1>
                    <div className='right-head'>
                        <span>Home</span>
                        <span>Contact me</span>
                        <h1 className='headBars cursor-point'>
                            <i className="bi bi-list" onClick={() => props.changeShow("block")}></i>
                        </h1>
                    </div>
                </div>
                <div className="typingEffect">
                    <Typewriter
                        options={{
                            strings: ['Hi, I am Mohammad kaif', 'I am a MERN stack developer', "and currently learning WEB3"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className="cryptoPrices">
                    <span><img src="https://i.ibb.co/xDwPT8M/btc.png" alt="btc" />{Number(btc).toFixed(3)} USDT</span>{" "}
                    <span><img src="https://i.ibb.co/1LFTWd0/eth2.png" alt="eth" />{Number(eth).toFixed(3)} USDT</span>{" "}
                    <span><img src="https://i.ibb.co/rxd1b2R/bnb.png" alt="bnb" />{Number(bnb).toFixed(3)} USDT</span>{" "}
                </div>
            </div>
            <div className='aboutme'>
                <div className='picContainer'>
                    <h1 className='borderBottom' >About me</h1>
                    "Hi, my self Mohammad kaif . I had completed my btech from Guru Tegh Bahadur Insitute Of Technology . All about my education have mentioned below. I am a software enthusiast and (MERN) full-stack web developer.I love to learn new technology, and also have decent knowledge of C++,C and DSA."
                </div>
                <div className="picContainer">
                    <img src="https://i.ibb.co/B6gHmmx/IMG-20220831-WA0051.jpg" alt="myImage" className='profileimg' />
                </div>
            </div>
            <div className='aboutme'>
                <div className='picContainer'>
                    <img src="https://i.ibb.co/KwgWqqJ/quali.png" alt="myImage" className='profileimg' />
                </div>
                <div className="picContainer">
                    <h1 className='borderBottom' >Qualification</h1>
                    <span className='displayB'>10th : Dev public school (CBSE : 98%)</span>
                    <span className='displayB'>12th : Rao mohar singh memorial senior secondary school (CBSE : 85%)</span>
                    <span className='displayB'> Guru tegh bahadur insitute of technology (2017-2021)
                        BTECH - IT (CGPA : 7.8)</span>
                </div>
            </div>
            <h1 className='borderBottom centerText' >Skill set</h1>
            <div className="skills">
                <img src="https://i.ibb.co/vHrrh4P/html.png" alt="html" />
                <img src="https://i.ibb.co/DtRRvcj/css.png" alt="css" />
                <img src="https://i.ibb.co/DQ1WCTQ/js.png" alt="js" />
                <img src="https://i.ibb.co/xMXctLd/react.png" alt="react" />
                <img src="https://i.ibb.co/gjfKm7Q/nodejs.png" alt="node" />
                <img src="https://i.ibb.co/3MNpq6t/mongodb.png" alt="mongo" />
                <img src="https://i.ibb.co/X2H5Qh7/expressjs.png" alt="express" />
                <img src="https://i.ibb.co/k8fXBNx/c.png" alt="c" />
                <img src="https://i.ibb.co/hHFSXHg/c.png" alt="c++" />
            </div>
        </>
    )
}
export default Home;