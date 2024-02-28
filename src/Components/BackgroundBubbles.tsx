import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import stars from '../assets/stars.svg';

let BackgroundBubbles = () => {
    return (
        <>
            <ParallaxLayer
                offset={0.33}
                speed={0.1}
                factor={3}
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundPositionX: '30%',
                }}
                className="bg-cover bubbles ml-[20%]"
            ></ParallaxLayer>
            <ParallaxLayer
                offset={0.66}
                speed={0.3}
                factor={3}
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundPositionX: '55%',
                }}
                className="bg-cover bubbles -ml-[20%]"
            ></ParallaxLayer>
            <ParallaxLayer
                offset={0.99}
                speed={0.5}
                factor={3}
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundPositionX: '50%',
                }}
                className="bg-cover bubbles"
            ></ParallaxLayer>
        </>
    );
};

export default BackgroundBubbles;
