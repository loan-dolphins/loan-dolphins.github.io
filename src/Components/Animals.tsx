import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import stars from '../assets/stars.svg';

import octopus from "../assets/money_mouth_face-octopus.png"
import coral from "../assets/pensive-coral.png"
import shark from "../assets/shark-money_mouth_face.png"
import whale from "../assets/whale-money_mouth_face.png"
import fish from "../assets/fish-money_mouth_face.png"
import icecube from "../assets/ice_cube-money_with_wings.png"

let Animals = () => {
    return (
        <>
            <ParallaxLayer
                offset={1.1}
                speed={0.3}
                factor={4}
            ><img src={whale} alt="" width={100} className='ml-10'/></ParallaxLayer>
            <ParallaxLayer
                offset={2}
                speed={0.3}
                factor={4}
            ><img src={shark} alt="" width={100}/></ParallaxLayer>
            <ParallaxLayer
                offset={2}
                speed={0.3}
                factor={4}
            ><img src={octopus} alt="" width={100}/></ParallaxLayer>
            <ParallaxLayer
                offset={2}
                speed={0.3}
                factor={4}
            ><img src={fish} alt="" width={100}/></ParallaxLayer>
            <ParallaxLayer
                offset={2}
                speed={0.3}
                factor={4}
            ><img src={icecube} alt="" width={100}/></ParallaxLayer>
            <ParallaxLayer
                offset={2}
                speed={0.3}
                factor={4}
            ><img src={coral} alt="" width={100}/></ParallaxLayer>
        </>
    );
};

export default Animals;
