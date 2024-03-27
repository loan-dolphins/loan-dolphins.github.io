import { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import evilDolphin from '../assets/EvilDolphin.jpg';
import squidguy from '../assets/squidguy.jpg';
import ww from '../assets/ww.jpg';
import qc from '../assets/qc.jpg';
import ex from '../assets/ex.jpg';
import acc from '../assets/acc.png';
import fg from '../assets/fg.jpg';
import id from '../assets/id.jpg';
import sg from '../assets/sg.jpg';
import access from '../assets/Accessibility.svg.png';
import BackgroundBubbles from '../Components/BackgroundBubbles';
import { Title } from '../Components/Title';
import Header from '../Components/Header';
import About from '../Components/About';
import Animals from '../Components/Animals';
import { TypeAnimation } from 'react-type-animation';

const services = [
    {
        title: '💸 Quick Cash',
        description:
            'We, at Dolphin Loans, capitalize on the financial desperation of individuals and businesses. Our lending practices involve offering loans at exorbitant interest rates, ensnaring borrowers in a cycle of debt. We profit from their financial struggles, prioritizing our gains over their well-being. With relentless pursuit, we ensure that our profits soar, leaving borrowers trapped in a vicious cycle of indebtedness.',
        image: qc,
    },
    {
        title: '🔨 Extortion Insurance',
        description:
            'We offer "extortion insurance," promising to shield businesses from harassment or threats for regular payments. However, failing to pay could result in us orchestrating the very threats we claim to prevent, ensuring continued dependence on our services.',
        image: ex,
    },
    {
        title: '💳 Debt Forgery Service',
        description:
            "At Dolphin Loans, we provide a debt forgery service, offering to erase or significantly reduce a debtor's outstanding balance. However, to avail of this, debtors must agree to take on new, larger debts with exorbitant interest rates, trapping them in a perpetual cycle of indebtedness under our control.",
        image: fg,
    },
    {
        title: '🆔 Identity Theft Assistance',
        description:
            'With our identity theft assistance, we help individuals assume new identities to escape financial troubles. However, this involves illegal activities such as identity theft and fraud, risking legal repercussions for debtors and others involved.',
        image: id,
    },
];

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
                    <Animals />

                    <ParallaxLayer
                        sticky={{
                            start: window.innerWidth > 1000 ? 0.5 : 0,
                            end: 4,
                        }}
                        className="max-w-4xl mx-auto"
                    >
                        <Header />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0.33}
                        speed={0.4}
                        className="max-w-4xl mx-auto"
                    >
                        <Title />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.6} speed={1}>
                        <div className="flex justify-center opacity-50 mt-10">
                            {scrollDown}
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0}>
                        {/* Suggest that they should scroll down */}
                        <div className="flex justify-center bg-opacity-50">
                            <p className="text-2xl m-20 text-center text-neutral-200 opacity-70">
                                <TypeAnimation
                                    sequence={[
                                        ' Dolphin Loans is a leading financial institution that offers a wide range of loan products to meet the needs of individuals and businesses.  ',
                                    ]}
                                ></TypeAnimation>
                            </p>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={1.5}
                        speed={0.5}
                        factor={6}
                        className="bg-black bg-opacity-50"
                    >
                        <div className=" max-w-4xl flex flex-col items-center mx-auto">
                            <h1 className="text-white text-4xl mx-auto w-ful mb-10 mt-10">
                                Services
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto lg:*:m-5">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 p-6 rounded-lg flex flex-col items-center"
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-32 h-32 object-cover rounded-full mb-4"
                                        />
                                        <h2 className="text-white text-xl mb-2 font-bold">
                                            {' '}
                                            {service.title}
                                        </h2>
                                        <p className="text-center text-md text-neutral-300">
                                            {service.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={2}
                        speed={1}
                        factor={6}
                        className="bg-black bg-opacity-50"
                    >
                        <div className="max-w-4xl mx-auto mt-[20%] flex-col justify-center *:mb-20">
                            <h1 className="text-white text-4xl mx-auto w-ful mt-[20%] mb-10">
                                Testimonials
                            </h1>
                            <div className="flex flex-col gap-6">
                                <div className="bg-gray-800 p-4 rounded-lg flex flex-row">
                                    <img
                                        src={squidguy}
                                        alt="Guy from Squid Game"
                                        className="w-40 h-40 rounded-full mb-4 object-cover m-4"
                                    />
                                    <div className="text-white my-auto mx-7 text-lg">
                                        <blockquote className="italic">
                                            <p>
                                                "Dolphin Loans? They're like the
                                                VIPs of finance, always
                                                delivering a winning hand. With
                                                them, you're not just a player;
                                                you're the champion, walking
                                                away with cash in hand, just
                                                like in Squid Game. Trust me,
                                                Dolphin Loans is your ticket to
                                                victory."
                                            </p>
                                            <footer className="font-bold">
                                                - Seong Gi-hun
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-4 rounded-lg flex flex-row">
                                    <div className="text-white my-auto mx-7 text-lg">
                                        <blockquote className="italic">
                                            <p>
                                                "Dolphin Loans? They're like the
                                                Heisenberg of the loan game,
                                                cooking up deals that'll leave
                                                you hooked. But remember, tread
                                                carefully, because once you're
                                                in their territory, there's no
                                                turning back. It's either sink
                                                or swim, and with Dolphin Loans,
                                                the currents can be
                                                unforgiving."
                                            </p>
                                            <footer className="font-bold">
                                                - Walter White
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <img
                                        src={ww}
                                        alt="Walter White"
                                        className="w-40 h-40 rounded-full mb-4 object-cover m-4"
                                    />
                                </div>

                                <div className="bg-gray-800 p-4 rounded-lg flex flex-row">
                                    <img
                                        src={sg}
                                        alt="Saul Goodman"
                                        className="w-40 h-40 rounded-full m-4 object-cover"
                                    />
                                    <div className="text-white my-auto mx-7 text-lg">
                                        <blockquote className="italic">
                                            <p>
                                                "Dolphin Loans, huh? Sounds like
                                                the kind of place where you'd
                                                need a lawyer as good as me to
                                                get you out of trouble. But hey,
                                                if you're looking for a loan
                                                with a side of questionable
                                                legality, Dolphin Loans might
                                                just be the ticket. Just
                                                remember, you didn't hear about
                                                them from me."
                                            </p>
                                            <footer className="font-bold">
                                                - Saul Goodman
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={3}
                        speed={0.8}
                        factor={6}
                        className="bg-black bg-opacity-20"
                    >
                        <div className="flex justify-center items-center m-10 flex-col mt-[35%] max-w-4xl mx-auto">
                            <img
                                src={acc}
                                alt="Accessibility"
                                className="w-[80%] m-10"
                            />
                            <p className="text-xl text-blue-400 opacity-70 mx-[20%] text-center font-inter leading-relaxed">
                                At Dolphin Loans, accessibility is paramount.
                                Our commitment to inclusivity extends to every
                                aspect of our services. We've chosen a blue
                                color scheme, ensuring visibility for the five
                                most common types of color blindness. Our
                                website is designed with keyboard navigation in
                                mind, allowing easy access for those with motor
                                impairments. Additionally, we employ unicode
                                characters for language translation, ensuring
                                our services are accessible to a diverse
                                audience. Your financial needs are important to
                                us, and we're dedicated to providing accessible
                                solutions for all.
                            </p>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={4}
                        speed={1}
                        style={{ backgroundColor: '#87BCDE' }}
                        className="flex justify-center"
                    >
                        <h1 className="position absolute left-0 text-red-600 text-opacity-90  opacity-50 text-center">
                            Scroll back up
                        </h1>
                        <img
                            src={evilDolphin}
                            className="w-full"
                            alt="Evil Dolphin"
                        />
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
