import { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import evilDolphin from '../assets/EvilDolphin.jpg';
import BackgroundBubbles from '../Components/BackgroundBubbles';
import { Title } from '../Components/Title';
import Header from '../Components/Header';
import About from '../Components/About';

export default function Home() {
    const parallax = useRef<IParallax>(null!);
    return (
        <>
            <div className="h-[100vh] w-full">
                <Parallax
                    ref={parallax}
                    pages={5}
                    className="h-[100vh] w-full bg-sky-950"
                >
                    <ParallaxLayer
                        sticky={{
                            start: 0.5,
                            end: 4,
                        }}
                        className='max-w-4xl mx-auto'
                    >
                        <Header />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.33} speed={0.4} className='max-w-4xl mx-auto'>
                        <Title />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.6} speed={1}>
                        {/* Suggest that they should scroll down */}
                        <div className="flex justify-center opacity-50">
                            {scrollDown}
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0}>
                        {/* Suggest that they should scroll down */}
                        <div className="flex justify-center opacity-50">
                            This is where a quick explanation of the company will go, obviously not styled like this
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={1}
                        speed={1}
                        factor={6}
                        className="bg-black opacity-50"
                    >
                        <div>
                            <h1>This will be the services section</h1>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={2}
                        speed={1}
                        factor={6}
                        className="bg-black opacity-50"
                    >
                        <div>
                            <h1>This will be the reviews section</h1>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={3}
                        speed={1}
                        factor={6}
                        className="bg-black opacity-20"
                    >
                        <div>
                            <h1>The Acessibility section can go here</h1>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={4}
                        speed={1}
                        style={{ backgroundColor: '#87BCDE' }}
                        className="flex justify-end"
                    >
                        <h1 className='position absolute left-0 text-red-600 text-opacity-80'>Evil Dolphin goes here</h1>
                        <img src={evilDolphin} className="w-full" alt="Evil Dolphin" />
                    </ParallaxLayer>

                    <BackgroundBubbles />
                </Parallax>
            </div>
        </>
    );
}

{
    /* <ParallaxLayer
                    offset={1.3}
                    speed={-0.3}
                    style={{ pointerEvents: 'none' }}
                >
                    <img
                        src={url('satellite4')}
                        style={{ width: '15%', marginLeft: '70%' }}
                    />
                </ParallaxLayer> */
}

{
    /* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '55%',
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '15%',
                        }}
                    />
                </ParallaxLayer> */
}

{
    /* <ParallaxLayer
                    offset={1.75}
                    speed={0.5}
                    style={{ opacity: 0.1 }}
                >
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '70%',
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '40%',
                        }}
                    />
                </ParallaxLayer> */
}

{
    /* <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '10%',
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '75%',
                        }}
                    />
                </ParallaxLayer> */
}

{
    /* <ParallaxLayer
                    offset={1.6}
                    speed={-0.1}
                    style={{ opacity: 0.4 }}
                >
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '60%',
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '25%',
                            marginLeft: '30%',
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '80%',
                        }}
                    />
                </ParallaxLayer> */
}

{
    /* <ParallaxLayer
                    offset={2.6}
                    speed={0.4}
                    style={{ opacity: 0.6 }}
                >
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '5%',
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '15%',
                            marginLeft: '75%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}
                >
                    <img src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer> */
}

{
    /* <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true),
                    }}
                /> */
}

{
    /* <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={url('server')} style={{ width: '20%' }} />
                </ParallaxLayer> */
}

{
    /* <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={url('bash')} style={{ width: '40%' }} />
                </ParallaxLayer> */
}

{
    /* <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => parallax.current.scrollTo(0)}
                >
                    <img src={url('clients-main')} style={{ width: '40%' }} />
                </ParallaxLayer> */
}

let scrollDown = (
    <svg
        width="85px"
        height="85px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse"
    >
        <path
            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
            stroke="#ffffff00"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M12 6V14"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M15 11L12 14L9 11"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
