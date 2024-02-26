'use client';
import { TypeAnimation } from 'react-type-animation';

const CURSOR_CLASS_NAME = 'show-cursor';

export function Title() {
    return (
        <TypeAnimation
            cursor={false}
            sequence={[
                'We are loan sharks',
                600,
                'We are Dolphin Loans. 🐬',
                (el) => el?.classList.remove('show-cursor'),
            ]}
            wrapper="h1"
            speed={10}
            deletionSpeed={50}
            className="text-7xl font-bold text-neutral-200 text-center mt-20 show-cursor"
        />
    );
}
