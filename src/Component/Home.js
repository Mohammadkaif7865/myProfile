import React, { useEffect, useState } from 'react';
import "./Home.css"
import Typewriter from "typewriter-effect";
function Home(props) {
    const [index, setIndex] = useState(4);
    let hideShow = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 180 && index > 0) {
            setIndex(0);
        } else if (scrolled <= 180 && index === 0) {
            setIndex(4);
        }
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
                        <span>About</span>
                        <span>Contact me</span>
                        <h1 className='headBars cursor-point'>
                            <i className="bi bi-list" onClick={() => props.changeShow("block")}></i>
                        </h1>
                    </div>
                </div>
                <div className="typingEffect">
                    <Typewriter
                        options={{
                            strings: ['Hi, I am Mohammad kaif', 'I am a MERN stack developer', "and currently learning web3"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos vero optio iure qui, ut nihil iusto quaerat laborum ex voluptatibus, provident, possimus repudiandae ipsam et. Repudiandae nemo beatae modi tempore fugiat nostrum accusamus esse, similique ea, doloribus reiciendis maiores dignissimos perferendis quas nisi laborum itaque obcaecati iste maxime! Veniam, laborum, nam omnis dicta voluptatum enim nemo, facere aperiam itaque assumenda magni labore tenetur earum ipsa accusamus placeat? Sed deleniti minus ea libero culpa, neque temporibus recusandae debitis ratione inventore saepe quo. Sit voluptas, eligendi placeat reiciendis ad itaque fuga. Odit aut laborum quas, eos fuga, earum, maiores facere quod mollitia ad ex ipsam quia esse obcaecati sint aperiam nisi nam accusantium voluptates error eum ratione! Saepe ducimus cumque omnis, blanditiis sequi veniam optio dolorum possimus laboriosam eligendi eaque, quae dolor qui, doloribus temporibus id nobis quod sapiente aut totam nesciunt ad beatae deserunt. Magnam laboriosam impedit praesentium excepturi veritatis facilis rem nihil, odit similique molestias assumenda, dolore quam voluptatibus a voluptatum possimus fuga tempora distinctio fugiat asperiores molestiae dignissimos vero perspiciatis! In architecto quis quae consequuntur voluptatem eaque corporis magnam hic, fugiat deserunt doloremque impedit, quo iusto non, culpa distinctio laborum! Maiores sit hic delectus ipsa officia quis nihil optio sint nam, quae aperiam commodi tenetur. Odio repellat aliquam quae aliquid ex, atque, alias ducimus delectus soluta magni voluptate consequuntur quia possimus? Rem recusandae obcaecati vero voluptates placeat exercitationem voluptas magnam nostrum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque corrupti optio, tenetur tempora voluptas suscipit soluta in iure quasi numquam eveniet praesentium voluptatum saepe corporis animi quaerat facilis id. Rerum, sequi impedit saepe ullam error aspernatur blanditiis culpa repudiandae placeat quod magni quasi soluta assumenda debitis quaerat nesciunt neque! Commodi facere labore voluptatibus! Ipsam dolore nemo in repellendus dolorem voluptatum officia aperiam exercitationem possimus voluptatem repellat illo officiis architecto illum maxime culpa iste earum delectus, placeat explicabo! Officia eligendi perspiciatis sint, voluptas aspernatur mollitia, assumenda tempora magni facere beatae eaque? Maiores laboriosam inventore illo eum quidem nobis delectus, quisquam repudiandae hic, ipsum, possimus nisi corrupti sit? Eos rem voluptates, hic maxime itaque id eligendi, recusandae ullam quis debitis saepe totam dolor laboriosam dolorem distinctio, obcaecati voluptatum quod? Tempora quaerat quod cum inventore enim delectus perferendis! Asperiores et magni dolore dolorum, quas architecto, quidem, doloribus illo illum eaque voluptatem error. Fugit blanditiis voluptatibus, atque quos laudantium impedit officiis nulla, in harum ut vel saepe vitae ab est porro autem numquam. Quibusdam ipsa, ad asperiores vel, eum est, omnis consequuntur blanditiis quam quisquam pariatur molestiae hic expedita minus dolores nobis esse! Magnam perferendis repellat unde harum, itaque ut accusamus, nesciunt inventore beatae porro laborum officiis ullam. Laudantium expedita, ducimus id labore necessitatibus ab. Eius quibusdam facere sunt. Officiis est dignissimos veniam temporibus ea, sed unde animi molestias, magni voluptate, sit provident quam. Eius illum assumenda laborum nisi numquam porro sapiente inventore ad iusto error similique eaque, adipisci, dolorem, maxime ipsam. Iusto, assumenda numquam dolore eveniet illo odio debitis, harum odit consectetur animi doloribus explicabo reprehenderit sapiente recusandae illum aperiam alias quidem laborum velit. Quia, quas tempore! Sequi, perferendis nihil consectetur quam asperiores eveniet at? Accusantium, obcaecati beatae facilis in, alias laudantium veritatis magnam eius atque dolor architecto? Quibusdam harum numquam laborum impedit. Sint, repellendus illo excepturi suscipit consequuntur nam esse similique, delectus vero ab aut voluptatibus laborum consectetur quaerat voluptate vitae, facilis doloremque doloribus ratione blanditiis non optio eligendi itaque? Inventore, aperiam nam atque tempora cumque vel sit doloribus natus. Totam dolores inventore itaque eum explicabo? Voluptas aliquid dolor odio, modi dolore possimus, minima magnam dignissimos, aliquam in sapiente eum voluptates. Dignissimos doloremque est similique earum tempore. Natus fuga laborum iste molestias obcaecati, earum quidem quibusdam magni dicta debitis nemo eaque temporibus excepturi facere sapiente voluptatem neque consequatur! Quasi voluptatem temporibus blanditiis inventore consequuntur delectus accusantium. Ea molestiae delectus officiis magni perferendis? Quibusdam temporibus quas alias itaque, quam blanditiis consequatur tenetur sapiente esse adipisci enim iusto repellendus fugit cumque non. At, perspiciatis ipsum atque placeat quisquam, nisi eligendi numquam sint illum ullam odio qui veniam minima unde eius deserunt repellat voluptate mollitia reiciendis in nam totam error magnam! Veniam quia, aliquam maxime, ducimus commodi ut neque repellendus soluta temporibus necessitatibus facilis non quasi iure ea? Sunt vel at exercitationem laudantium earum libero veritatis temporibus sapiente iste? Tempora quisquam ipsum quod eum maxime recusandae dolor aspernatur. Recusandae labore necessitatibus soluta, explicabo numquam deserunt ipsum harum? Corporis nihil deleniti, ad nisi quaerat cumque suscipit voluptatem culpa tenetur dignissimos. Iusto voluptatem voluptatum sit earum eveniet, delectus officia temporibus? Cum quia perspiciatis, cupiditate facere mollitia voluptatem sed? In aperiam impedit beatae, magnam excepturi pariatur voluptatem sapiente ratione non sunt, esse itaque nostrum voluptatum quia nisi eligendi maxime repellendus suscipit dolores quos. Molestiae ad enim quia rerum itaque, aspernatur explicabo recusandae sed, facilis debitis neque repudiandae labore libero nemo est laboriosam esse modi? Hic fugiat atque minus cum assumenda fuga iste quod ab nesciunt nostrum esse aliquid nulla provident architecto, facere autem animi sit aspernatur neque commodi. Cupiditate cumque, reprehenderit commodi sequi perspiciatis aliquam maxime nobis molestiae, itaque exercitationem voluptatum? Voluptatibus iure, repudiandae fugit nihil accusamus voluptates at eius esse labore nostrum alias voluptate, maxime exercitationem molestiae odio modi itaque ea, ad magnam ab recusandae doloremque dignissimos ut! Corporis beatae eveniet et in distinctio est ea tenetur harum dignissimos hic dolores fuga maiores, ullam ipsum doloribus reiciendis, officia voluptatem neque aperiam rerum inventore. Id dolores dolor voluptatum aliquam quidem pariatur nemo recusandae, iusto necessitatibus distinctio ratione quo illum in consequuntur laborum vero corporis sed placeat temporibus rem iure, adipisci fuga voluptas. Dolorem fugit facilis debitis nesciunt error maxime laborum voluptate corrupti similique dicta obcaecati aliquam incidunt inventore, illo maiores minus, quisquam totam id? Ea atque reprehenderit doloribus dolore quidem quaerat, dignissimos quas deserunt, aut ducimus quibusdam voluptates nostrum, aliquam illum repudiandae. Quasi omnis deleniti soluta, optio ducimus quos sapiente natus accusamus veritatis earum accusantium nisi temporibus cum non nostrum dolor? Reprehenderit repellendus a consectetur quibusdam quia earum magnam debitis aliquam dolor, nobis, blanditiis labore nihil perspiciatis quis inventore incidunt! Dolor nihil eligendi dolore inventore debitis, cumque commodi tempore ex illum vitae impedit amet corrupti culpa consequuntur ipsa. Laudantium voluptas sed in quae dolorem, error tempore dolores consequatur eveniet modi itaque blanditiis, recusandae tempora aliquid qui illum odio ratione magnam, nostrum quam commodi saepe. Incidunt velit nihil quisquam cum molestias nulla dignissimos illum rem quidem ipsa ipsum, veniam amet, modi consequuntur. Distinctio odio quasi libero voluptas omnis facere mollitia voluptate veritatis inventore aut et quo nostrum ipsa id vero, nobis nemo fuga eius unde est error, voluptatibus similique quam maiores! Ut ab pariatur possimus consectetur sequi obcaecati, dicta repellendus sint eveniet? Esse vitae sequi eos adipisci! Reiciendis obcaecati mollitia dignissimos, fugit, accusantium beatae repellendus praesentium iusto numquam debitis quos architecto similique quo. Officiis, veritatis dolorem! Amet harum a vel cumque. Distinctio assumenda eum neque aperiam consequatur hic, nam quam! Accusamus natus reprehenderit, nulla impedit non officiis illo quod unde minus dolorem molestias ea corrupti. Temporibus minima maxime voluptatem rerum veniam molestiae quis, nisi sunt? Explicabo harum animi repudiandae iste maiores eos laudantium delectus provident minus! Voluptate a provident odit sit aut dolores eveniet, esse alias eaque facere enim delectus illum culpa sequi accusamus atque magnam quam molestiae incidunt iste rerum perspiciatis! Expedita incidunt fugiat distinctio quae, aliquid recusandae porro est assumenda rem laudantium ea, excepturi numquam voluptas eius impedit eaque quisquam hic nihil corrupti placeat. Ab corporis recusandae est praesentium natus autem maxime velit magnam doloribus, ea harum, nulla consectetur quaerat. Nisi nesciunt amet doloremque ut quisquam dolorem deserunt tenetur, adipisci dolorum, sed ipsa nulla porro hic odit totam? Saepe dolorem labore odio officiis, maxime inventore perspiciatis voluptatibus id neque, numquam molestiae quidem eius maiores suscipit! Necessitatibus odio possimus, ea facilis ex in voluptas similique odit deserunt maiores architecto neque numquam iste amet ullam, commodi accusantium placeat libero vitae delectus blanditiis mollitia minus. Deserunt, laborum asperiores pariatur libero amet odit facilis voluptas ipsa nemo blanditiis, nobis voluptates odio debitis excepturi unde impedit eos quia perferendis. Error, veritatis minima quos odit repellat amet, officiis deserunt libero et, rem ea! Dolorem fuga aliquid nesciunt distinctio nulla quis molestiae magnam dignissimos sit impedit, quisquam dolores deleniti ipsa, natus rerum explicabo praesentium optio? Accusamus architecto blanditiis esse minima, ab placeat nesciunt recusandae vel inventore hic eum consequuntur, tempora excepturi repellat! Provident dolores ad, sapiente pariatur veniam ducimus consectetur quidem blanditiis ratione fugit ab voluptatibus suscipit repellat nostrum natus cupiditate sint. Neque vel nihil blanditiis sequi odit maxime, sed voluptatem molestias? Repellat expedita deleniti, tempore perferendis, consequuntur cupiditate eos provident placeat ex laboriosam excepturi rem adipisci totam, amet eligendi possimus veniam ipsum harum dignissimos magni? Aliquam, quis, officia illum voluptate provident placeat nemo vero maiores velit eum recusandae blanditiis eius quod totam animi. Nam sed hic earum ipsum. Expedita, quam. Est repudiandae odio dignissimos cumque aliquam! Ea aliquam rerum, deserunt labore consequuntur odit maiores repellendus cum.
            </div>
        </>
    )
}
export default Home;