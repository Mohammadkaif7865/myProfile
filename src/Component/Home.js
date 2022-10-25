import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css"
import Typewriter from "typewriter-effect";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bnb: "",
            btc: "",
            eth: "",
            index: 4
        }
    }
    hideShow = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50 && this.state.index > 0) {
            this.setState({ index: 0 });
        } else if (scrolled <= 50 && this.state.index === 0) {
            this.setState({ index: 4 });
        }
        // ! What is going on here
        // ! idk why class component can easily handle scroll event listener but not function component
    };
    componentDidMount() {
        setInterval(() => {
            fetch("https://www.binance.com/api/v3/ticker/price?symbol=BNBUSDT", { method: "GET" })
                .then(response => response.json())
                .then(data => this.setState({ bnb: data.price }))
            fetch("https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT", { method: "GET" })
                .then(response => response.json()).then(data => this.setState({ btc: data.price }))
            fetch("https://www.binance.com/api/v3/ticker/price?symbol=ETHUSDT", { method: "GET" })
                .then(response => response.json()).then(data => this.setState({ eth: data.price }))
        }, 1000);
        window.addEventListener("scroll", this.hideShow);
    }
    render() {
        return (
            <>
                <div className="imageSet" style={{ zIndex: this.state.index }}>
                    <div className="headh">
                        <Link to="/"> <h1>Mohammad Kaif</h1></Link>
                        <div className='right-head'>
                            <Link to="/"><span>Home</span></Link>
                            <Link to="/message"><span>Contact me</span></Link>
                            <h1 className='headBars cursor-point'>
                                <i className="bi bi-list" onClick={() => this.props.changeShow("block")}></i>
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
                        <span><img src="https://i.ibb.co/xDwPT8M/btc.png" alt="btc" />{Number(this.state.btc).toFixed(3)} USDT</span>{" "}
                        <span><img src="https://i.ibb.co/1LFTWd0/eth2.png" alt="eth" />{Number(this.state.eth).toFixed(3)} USDT</span>{" "}
                        <span><img src="https://i.ibb.co/rxd1b2R/bnb.png" alt="bnb" />{Number(this.state.bnb).toFixed(3)} USDT</span>{" "}
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
                        <span className='displayB'><i className="bi bi-circle-fill"></i> 10th : Dev public school (CBSE : 98%)</span>
                        <span className='displayB'><i className="bi bi-circle-fill"></i> 12th : Rao mohar singh memorial senior secondary school (CBSE : 85%)</span>
                        <span className='displayB'><i className="bi bi-circle-fill"></i>  Guru tegh bahadur insitute of technology (2017-2021)
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
                    <img src="https://i.ibb.co/xX6TdGx/express.webp" alt="express" />
                    <img src="https://i.ibb.co/k8fXBNx/c.png" alt="c" />
                    <img src="https://i.ibb.co/hHFSXHg/c.png" alt="c++" />
                </div>
                <h1 className='borderBottom centerText' >Projects</h1>
                <div className="projects">

                    <div className="pro">
                        <h2>Amazon <a href="https://amazonbymdkaif.netlify.app" target='_blank'><button className='btn btn-primary'>visit</button></a> </h2>
                        <div id="carouselExampleDark2" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="3" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner proImg">
                                <div className="carousel-item active">
                                    <img src="https://i.ibb.co/D1PZnhm/Screenshot-8.png" className="d-block w-100" alt="home" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/DzmxzCF/Screenshot-9.png" className="d-block w-100" alt="listing" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/MVr7DgP/Screenshot-10.png" className="d-block w-100" alt="details" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/nBML9wV/Screenshot-7.png" className="d-block w-100" alt="checkout" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="pro">
                        <h2>Zomato <a href="https://zomatobyme.netlify.app" target="_blank"><button className='btn btn-primary'>visit</button></a> </h2>
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner proImg">
                                <div className="carousel-item active">
                                    <img src="https://i.ibb.co/ydpCDsP/Screenshot-5.png" className="d-block w-100" alt="home" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/LkP6PvH/Screenshot-4.png" className="d-block w-100" alt="listing" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/1G0077f/Screenshot-6.png" className="d-block w-100" alt="details" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/nBML9wV/Screenshot-7.png" className="d-block w-100" alt="checkout" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <h1 className="borderBottom centerText">Hobbies</h1>
                <div className="hobbies">
                    <div className="hobby">
                        <h3 className='BorderBottom centerText'>Sports</h3>
                        <img src="https://i.ibb.co/PTcZVzz/sports.png" alt="sports" />
                    </div>
                    <div className="hobby">
                        <h3 className='BorderBottom centerText'>Travel</h3>
                        <img src="https://i.ibb.co/1G5zP0Y/travel.png" alt="sports" />
                    </div>
                    <div className="hobby">
                        <h3 className='BorderBottom centerText'>Coding</h3>
                        <img src="https://i.ibb.co/JKkmkDZ/5847eb76cef1014c0b5e484f.png" alt="sports" />
                    </div>
                    <div className="hobby">
                        <h3 className='BorderBottom centerText'>Gaming</h3>
                        <img src="https://i.ibb.co/t4H7SGx/gaming.webp" alt="sports" />
                    </div>
                    <div className="hobby">
                        <h3 className='BorderBottom centerText'>Gyming</h3>
                        <img src="https://i.ibb.co/9wHMDCh/gym.png" alt="sports" />
                    </div>
                </div>
                <h1 className="borderBottom centerText">My Location</h1>
                <div className="location">
                    <iframe title='map' className='myLoc' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.635348138501!2d76.95111272534892!3d28.632494217302455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0e4df36aeb0f%3A0x14ca1b4b544523e!2sNaveen%20Palace%2C%20Jharoda%20Kalan%2C%20Delhi!5e0!3m2!1sen!2sin!4v1645689456510!5m2!1sen!2sin"
                        allowFullScreen="1" loading="lazy"></iframe>
                </div>
            </>
        )
    }
}
export default Home;