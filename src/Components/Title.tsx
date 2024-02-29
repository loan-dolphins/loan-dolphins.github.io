'use client';
import { TypeAnimation } from 'react-type-animation';

export function Title() {
    return (
        <h1 className="flex justify-center tarnsition-all">
            <TypeAnimation
                cursor={false}
                sequence={[
                    'We are loan sharks',
                    600,
                    'We are ',
                    650,
                    'We are Dolphin Loans. 🐬',
                    (el) => el?.classList.add('hidden'),
                    () => {
                        const titleElement =
                            document.querySelector('.stylised-title');
                        titleElement?.classList.remove('hidden');
                        titleElement?.classList.add('slide-in');
                    },
                ]}
                wrapper="span"
                speed={10}
                deletionSpeed={70}
                className="text-7xl font-bold text-neutral-200 text-center mt-20 show-cursor transition-all"
            />

            <span className="hidden stylised-title text-7xl font-bold text-neutral-200 text-center mt-20 transition-all">
                We are <span className="gradient-text">Dolphin Loans.</span> 🐬
            </span>
        </h1>
    );
}
