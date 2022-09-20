import React, { useEffect, useState } from 'react';
import "./Home.css"
import Typewriter from "typewriter-effect";
function Home(props) {
    const [index, setIndex] = useState(4);
    let hideShow = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 120 && index > 0) {
            setIndex(0);
        } else if (scrolled <= 120 && index === 0) {
            setIndex(4);
        }
        // console.log(scrolled);
        // ! What is going on here
    };
    useEffect(() => {
        window.addEventListener("scroll", hideShow);
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
            </div>
            <div className="container">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ab quaerat ipsa aperiam ipsam omnis molestiae adipisci quibusdam numquam possimus voluptatem in sit aliquam explicabo quo, eligendi quis impedit cum sint dolorum aut eaque? Labore ad, ratione inventore reprehenderit consequatur vitae ab, blanditiis provident delectus ducimus ex pariatur. Aperiam natus est quae, autem vel quas nostrum molestiae impedit blanditiis repudiandae dignissimos nobis eveniet laboriosam! Officiis, nihil minus nisi id labore ex, saepe soluta deleniti nam voluptatem maiores ad sed, esse beatae commodi deserunt mollitia et? Culpa dicta dolore possimus voluptates et aliquam fugit, laudantium rem inventore ducimus doloremque nihil veniam a illum minus similique quasi voluptate illo quod, facere deserunt animi quas magni! Dolores rerum voluptas perspiciatis doloremque eaque reiciendis reprehenderit cumque! Autem ipsa sed necessitatibus culpa minus asperiores aliquid quae molestias unde pariatur, quo sequi, eveniet, amet corrupti neque provident quasi nobis aperiam totam facilis! Deserunt veritatis eum quae fuga cupiditate! Impedit repudiandae alias eum molestiae consequuntur doloremque facilis, labore ea nam deleniti voluptas id obcaecati perspiciatis magni fugiat laboriosam sunt quia tempore? Laborum, distinctio illum ea temporibus, qui, dolore maiores atque tempore molestias voluptas debitis unde aut est ipsa sed facilis minus itaque rerum magnam totam esse. Repudiandae aut asperiores illum, minus modi quasi reiciendis, recusandae commodi cum sequi quis ullam voluptatibus provident! Quae, impedit explicabo delectus ad eaque earum sit fuga numquam, sed cum voluptate provident ea modi tempore fugiat debitis?
            </div>
            <div className='aboutme .reveal'>
                <h1>About me</h1>
                <div>
                    "Hi, my self Mohammad kaif . I had completed my btech from Guru Tegh Bahadur Insitute Of Technology . All about my education have mentioned below. I am a software enthusiast and (MERN) full-stack web developer.I love to learn new technology, and also have decent knowledge of C++,C and DSA."
                </div>
            </div>
        </>
    )
}
export default Home;